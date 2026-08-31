export interface UmkmProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  seller: string;
  imageUrl?: string;
  badge: string;
  whatsappNumber?: string;
  ecommerceUrl?: string;
  ecommercePlatform?: string;
}

export const defaultProducts: UmkmProduct[] = [
  {
    id: 'prod-1',
    name: 'Beras Organik Kebonagung Wangi',
    category: 'Hasil Tani',
    description: 'Beras pulen hasil panen langsung dari persawahan asri Kebonagung, ditanam tanpa pestisida kimia berlebih.',
    price: 'Rp 68.000 / 5kg',
    seller: 'Kelompok Tani Makmur',
    imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
    badge: 'Produk Unggulan',
    whatsappNumber: '088216186389',
    ecommerceUrl: 'https://shopee.co.id',
    ecommercePlatform: 'Shopee',
  },
  {
    id: 'prod-2',
    name: 'Keripik Singkong Bumbu Rempah',
    category: 'Olahan Makanan',
    description: 'Keripik renyah gurih dengan bumbu rempah pilihan racikan ibu-ibu warga Kebonagung. Bebas bahan pengawet.',
    price: 'Rp 15.000 / bks',
    seller: 'Dapur Bu Sugeng (RT 02)',
    imageUrl: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=600&q=80',
    badge: 'Paling Laris',
    whatsappNumber: '088216186389',
    ecommerceUrl: 'https://tokopedia.com',
    ecommercePlatform: 'Tokopedia',
  },
  {
    id: 'prod-3',
    name: 'Sambal Belut Khas Tridadi',
    category: 'Kuliner Tradisional',
    description: 'Sambal belut pedas gurih dengan cita rasa khas Sleman, diolah higienis dan siap santap bersama nasi hangat.',
    price: 'Rp 28.000 / toples',
    seller: 'Warung Bu Sri',
    imageUrl: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80',
    badge: 'Khas Dusun',
    whatsappNumber: '088216186389',
    ecommerceUrl: 'https://gofood.co.id',
    ecommercePlatform: 'GoFood',
  },
  {
    id: 'prod-4',
    name: 'Anyaman Bambu & Kerajinan Kriya',
    category: 'Kerajinan Tangan',
    description: 'Besek, tempat buah, dan hiasan rumah estetik berbahan dasar bambu lokal karya perajin terampil Kebonagung.',
    price: 'Mulai Rp 20.000',
    seller: 'Kriya Bambu Lestari',
    imageUrl: 'https://images.unsplash.com/photo-1615865417491-9941019fbc00?auto=format&fit=crop&w=600&q=80',
    badge: 'Handmade',
    whatsappNumber: '088216186389',
    ecommerceUrl: 'https://shopee.co.id',
    ecommercePlatform: 'Shopee',
  },
  {
    id: 'prod-5',
    name: 'Wedang Rempah & Jahe Instan',
    category: 'Minuman Herbal',
    description: 'Minuman herbal alami penghangat tubuh dari paduan jahe merah, serai, kayu manis, dan cengkeh segar.',
    price: 'Rp 22.000 / pack',
    seller: 'Herbal Berkah Sehat (RT 04)',
    imageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80',
    badge: 'Sehat Alami',
    whatsappNumber: '088216186389',
    ecommerceUrl: 'https://tokopedia.com',
    ecommercePlatform: 'Tokopedia',
  },
  {
    id: 'prod-6',
    name: 'Jajan Pasar & Kue Basah Tradisional',
    category: 'Kudapan',
    description: 'Aneka kue lemper, klepon, nagasari, dan lapis legit legit yang cocok untuk konsumsi harian dan pesanan hajatan.',
    price: 'Mulai Rp 2.500 / pcs',
    seller: 'Pawon Guyub Kebonagung',
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
    badge: 'Segar Tiap Hari',
    whatsappNumber: '088216186389',
    ecommerceUrl: 'https://grab.com/id/food/',
    ecommercePlatform: 'GrabFood',
  },
];

import { supabase } from '../lib/supabase';

export const products = defaultProducts;

const STORAGE_KEY = 'kebonagung_umkm_products';

export const formatWhatsAppLink = (
  phone: string | undefined, 
  productName: string, 
  price: string, 
  seller: string
): string => {
  const defaultPhone = '6288216186389';
  let targetPhone = phone?.trim() || defaultPhone;
  // Clean phone number: remove non-digits, replace leading 0 with 62
  targetPhone = targetPhone.replace(/\D/g, '');
  if (targetPhone.startsWith('0')) {
    targetPhone = '62' + targetPhone.slice(1);
  }
  if (!targetPhone) {
    targetPhone = defaultPhone;
  }

  const message = `Halo ${seller ? seller + ', ' : ''}saya tertarik dan ingin memesan produk "${productName}" (${price}) dari etalase Website Resmi Padukuhan Kebonagung. Apakah masih tersedia?`;
  return `https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`;
};

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

const mapRowToProduct = (row: SupabaseUmkmRow): UmkmProduct => ({
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

const mapProductToRow = (product: UmkmProduct): SupabaseUmkmRow => ({
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

export const getStoredProducts = (): UmkmProduct[] => {
  if (typeof window === 'undefined') return defaultProducts;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.map((item, idx) => {
          const fallback = defaultProducts[idx];
          return {
            ...item,
            imageUrl: item.imageUrl || fallback?.imageUrl,
            whatsappNumber: item.whatsappNumber || fallback?.whatsappNumber || '088216186389',
            ecommerceUrl: item.ecommerceUrl || fallback?.ecommerceUrl,
            ecommercePlatform: item.ecommercePlatform || fallback?.ecommercePlatform || 'E-Commerce',
          };
        });
      }
    }
  } catch (err) {
    console.error('Failed to load stored UMKM products:', err);
  }
  return defaultProducts;
};

export const saveStoredProducts = (items: UmkmProduct[]): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new Event('umkm_updated'));
  } catch (err) {
    console.error('Failed to save UMKM products:', err);
  }
};

// Fetch from Supabase Cloud with fallback to local
export const fetchProductsFromSupabase = async (): Promise<UmkmProduct[]> => {
  try {
    const { data, error } = await supabase
      .from('umkm_products')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.warn('Supabase query note:', error.message);
      return getStoredProducts();
    }

    if (data && Array.isArray(data)) {
      if (data.length === 0) {
        // Seed default products to Supabase if newly created table is empty
        const rows = defaultProducts.map(mapProductToRow);
        await supabase.from('umkm_products').upsert(rows);
        saveStoredProducts(defaultProducts);
        return defaultProducts;
      }
      const mapped = data.map(mapRowToProduct);
      saveStoredProducts(mapped);
      return mapped;
    }
  } catch (err) {
    console.error('Supabase fetch error:', err);
  }
  return getStoredProducts();
};

export const addStoredProduct = async (newProduct: Omit<UmkmProduct, 'id'>): Promise<UmkmProduct> => {
  const current = getStoredProducts();
  const productWithId: UmkmProduct = {
    ...newProduct,
    id: `prod-${Date.now()}`,
  };
  const updated = [productWithId, ...current];
  saveStoredProducts(updated);

  // Sync to Supabase in background
  try {
    const row = mapProductToRow(productWithId);
    await supabase.from('umkm_products').insert([row]);
  } catch (err) {
    console.error('Supabase insert sync error:', err);
  }

  return productWithId;
};

export const updateStoredProduct = async (updatedProduct: UmkmProduct): Promise<void> => {
  const current = getStoredProducts();
  const updated = current.map(p => (p.id === updatedProduct.id ? updatedProduct : p));
  saveStoredProducts(updated);

  // Sync to Supabase in background
  try {
    const row = mapProductToRow(updatedProduct);
    await supabase.from('umkm_products').update(row).eq('id', updatedProduct.id);
  } catch (err) {
    console.error('Supabase update sync error:', err);
  }
};

export const deleteStoredProduct = async (id: string): Promise<void> => {
  const current = getStoredProducts();
  const updated = current.filter(p => p.id !== id);
  saveStoredProducts(updated);

  // Sync to Supabase in background
  try {
    await supabase.from('umkm_products').delete().eq('id', id);
  } catch (err) {
    console.error('Supabase delete sync error:', err);
  }
};

export const resetStoredProducts = (): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event('umkm_updated'));
  } catch (err) {
    console.error('Failed to reset UMKM products:', err);
  }
};
