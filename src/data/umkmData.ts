export interface UmkmProduct {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  seller: string;
  imageBg: string;
  iconName: string;
  badge: string;
}

export const products: UmkmProduct[] = [
  {
    id: 'prod-1',
    name: 'Beras Organik Kebonagung Wangi',
    category: 'Hasil Tani',
    description: 'Beras pulen hasil panen langsung dari persawahan asri Kebonagung, ditanam tanpa pestisida kimia berlebih.',
    price: 'Rp 68.000 / 5kg',
    seller: 'Kelompok Tani Makmur',
    imageBg: 'from-purple-100 to-cream-200',
    iconName: '🌾',
    badge: 'Produk Unggulan',
  },
  {
    id: 'prod-2',
    name: 'Keripik Singkong Bumbu Rempah',
    category: 'Olahan Makanan',
    description: 'Keripik renyah gurih dengan bumbu rempah pilihan racikan ibu-ibu warga Kebonagung. Bebas bahan pengawet.',
    price: 'Rp 15.000 / bks',
    seller: 'Dapur Bu Sugeng (RT 02)',
    imageBg: 'from-cream-200 to-purple-100',
    iconName: '🥔',
    badge: 'Paling Laris',
  },
  {
    id: 'prod-3',
    name: 'Sambal Belut Khas Tridadi',
    category: 'Kuliner Tradisional',
    description: 'Sambal belut pedas gurih dengan cita rasa khas Sleman, diolah higienis dan siap santap bersama nasi hangat.',
    price: 'Rp 28.000 / toples',
    seller: 'Warung Bu Sri',
    imageBg: 'from-purple-100 to-cream-300',
    iconName: '🌶️',
    badge: 'Khas Dusun',
  },
  {
    id: 'prod-4',
    name: 'Anyaman Bambu & Kerajinan Kriya',
    category: 'Kerajinan Tangan',
    description: 'Besek, tempat buah, dan hiasan rumah estetik berbahan dasar bambu lokal karya perajin terampil Kebonagung.',
    price: 'Mulai Rp 20.000',
    seller: 'Kriya Bambu Lestari',
    imageBg: 'from-cream-300 to-purple-200',
    iconName: '🧺',
    badge: 'Handmade',
  },
  {
    id: 'prod-5',
    name: 'Wedang Rempah & Jahe Instan',
    category: 'Minuman Herbal',
    description: 'Minuman herbal alami penghangat tubuh dari paduan jahe merah, serai, kayu manis, dan cengkeh segar.',
    price: 'Rp 22.000 / pack',
    seller: 'Herbal Berkah Sehat (RT 04)',
    imageBg: 'from-purple-200 to-cream-200',
    iconName: '🍵',
    badge: 'Sehat Alami',
  },
  {
    id: 'prod-6',
    name: 'Jajan Pasar & Kue Basah Tradisional',
    category: 'Kudapan',
    description: 'Aneka kue lemper, klepon, nagasari, dan lapis legit legit yang cocok untuk konsumsi harian dan pesanan hajatan.',
    price: 'Mulai Rp 2.500 / pcs',
    seller: 'Pawon Guyub Kebonagung',
    imageBg: 'from-cream-100 to-purple-100',
    iconName: '🥟',
    badge: 'Segar Tiap Hari',
  },
];
