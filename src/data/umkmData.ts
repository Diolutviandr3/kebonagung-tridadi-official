export interface UmkmProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  seller: string;
  imageUrl?: string;
  badge: string;
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
  },
];

export const products = defaultProducts;

const STORAGE_KEY = 'kebonagung_umkm_products';

export const getStoredProducts = (): UmkmProduct[] => {
  if (typeof window === 'undefined') return defaultProducts;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // Upgrade legacy items if any had iconName
        return parsed.map((item, idx) => {
          if (!item.imageUrl && defaultProducts[idx]) {
            return { ...item, imageUrl: defaultProducts[idx].imageUrl };
          }
          return item;
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

export const addStoredProduct = (newProduct: Omit<UmkmProduct, 'id'>): UmkmProduct => {
  const current = getStoredProducts();
  const productWithId: UmkmProduct = {
    ...newProduct,
    id: `prod-${Date.now()}`,
  };
  const updated = [productWithId, ...current];
  saveStoredProducts(updated);
  return productWithId;
};

export const updateStoredProduct = (updatedProduct: UmkmProduct): void => {
  const current = getStoredProducts();
  const updated = current.map(p => (p.id === updatedProduct.id ? updatedProduct : p));
  saveStoredProducts(updated);
};

export const deleteStoredProduct = (id: string): void => {
  const current = getStoredProducts();
  const updated = current.filter(p => p.id !== id);
  saveStoredProducts(updated);
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
