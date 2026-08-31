import { supabase } from '../lib/supabase';
import { defaultProducts, type UmkmProduct } from '../data/umkmData';

const STORAGE_KEY = 'kebonagung_umkm_products';

export interface SupabaseUmkmRow {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  seller: string;
  image_url?: string | null;
  badge?: string | null;
  whatsapp_number?: string | null;
  ecommerce_url?: string | null;
  ecommerce_platform?: string | null;
  created_at?: string;
}

export const mapRowToProduct = (row: SupabaseUmkmRow): UmkmProduct => ({
  id: row.id,
  name: row.name,
  category: row.category,
  description: row.description,
  price: row.price,
  seller: row.seller,
  imageUrl: row.image_url || undefined,
  badge: row.badge || 'Produk Unggulan',
  whatsappNumber: row.whatsapp_number || undefined,
  ecommerceUrl: row.ecommerce_url || undefined,
  ecommercePlatform: row.ecommerce_platform || undefined,
});

export const mapProductToRow = (product: UmkmProduct): SupabaseUmkmRow => ({
  id: product.id,
  name: product.name,
  category: product.category,
  description: product.description,
  price: product.price,
  seller: product.seller,
  image_url: product.imageUrl || null,
  badge: product.badge || 'Produk Unggulan',
  whatsapp_number: product.whatsappNumber || null,
  ecommerce_url: product.ecommerceUrl || null,
  ecommerce_platform: product.ecommercePlatform || null,
});

// Fetch all products from Supabase with graceful fallback
export const fetchProducts = async (): Promise<UmkmProduct[]> => {
  try {
    const { data, error } = await supabase
      .from('umkm_products')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.warn('Supabase query error (table might not exist yet), using local cache:', error.message);
      return getLocalFallback();
    }

    if (data && Array.isArray(data)) {
      if (data.length === 0) {
        // If table is empty, auto-seed with defaultProducts
        await seedDefaultProducts();
        return defaultProducts;
      }
      const mapped = data.map(mapRowToProduct);
      saveToLocalCache(mapped);
      return mapped;
    }
  } catch (err) {
    console.error('Failed to fetch from Supabase:', err);
  }
  return getLocalFallback();
};

// Seed default products to Supabase if empty
export const seedDefaultProducts = async (): Promise<void> => {
  try {
    const rows = defaultProducts.map(mapProductToRow);
    const { error } = await supabase.from('umkm_products').upsert(rows);
    if (error) {
      console.warn('Failed to seed default products to Supabase:', error.message);
    } else {
      console.log('Successfully seeded default products to Supabase.');
    }
  } catch (err) {
    console.error('Error seeding default products:', err);
  }
};

// Add product
export const addProduct = async (newProduct: Omit<UmkmProduct, 'id'>): Promise<UmkmProduct> => {
  const productWithId: UmkmProduct = {
    ...newProduct,
    id: `prod-${Date.now()}`,
  };

  // 1. Save to local first for instant UI response
  const current = getLocalFallback();
  const updated = [productWithId, ...current];
  saveToLocalCache(updated);
  window.dispatchEvent(new Event('umkm_updated'));

  // 2. Sync to Supabase
  try {
    const row = mapProductToRow(productWithId);
    const { error } = await supabase.from('umkm_products').insert([row]);
    if (error) {
      console.warn('Failed to insert into Supabase:', error.message);
    }
  } catch (err) {
    console.error('Supabase insert error:', err);
  }

  return productWithId;
};

// Update product
export const updateProduct = async (updatedProduct: UmkmProduct): Promise<void> => {
  // 1. Update local cache
  const current = getLocalFallback();
  const updated = current.map(p => (p.id === updatedProduct.id ? updatedProduct : p));
  saveToLocalCache(updated);
  window.dispatchEvent(new Event('umkm_updated'));

  // 2. Sync to Supabase
  try {
    const row = mapProductToRow(updatedProduct);
    const { error } = await supabase
      .from('umkm_products')
      .update(row)
      .eq('id', updatedProduct.id);

    if (error) {
      console.warn('Failed to update in Supabase:', error.message);
    }
  } catch (err) {
    console.error('Supabase update error:', err);
  }
};

// Delete product
export const deleteProduct = async (id: string): Promise<void> => {
  // 1. Update local cache
  const current = getLocalFallback();
  const updated = current.filter(p => p.id !== id);
  saveToLocalCache(updated);
  window.dispatchEvent(new Event('umkm_updated'));

  // 2. Sync to Supabase
  try {
    const { error } = await supabase
      .from('umkm_products')
      .delete()
      .eq('id', id);

    if (error) {
      console.warn('Failed to delete from Supabase:', error.message);
    }
  } catch (err) {
    console.error('Supabase delete error:', err);
  }
};

// Local storage helpers
const getLocalFallback = (): UmkmProduct[] => {
  if (typeof window === 'undefined') return defaultProducts;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    // Ignore
  }
  return defaultProducts;
};

const saveToLocalCache = (items: UmkmProduct[]): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (e) {
    // Ignore
  }
};
