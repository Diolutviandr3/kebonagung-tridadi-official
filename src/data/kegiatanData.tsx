import React from 'react';
import { 
  HeartPulse, 
  Shovel, 
  Users, 
  Landmark, 
  BookOpen, 
  ShieldCheck 
} from 'lucide-react';

export interface PhotoDoc {
  id: string;
  title: string;
  caption: string;
  tag: string;
  colorScheme: string;
  iconSymbol: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  category: string;
  schedule: string;
  time: string;
  location: string;
  description: string;
  organizer: string;
  icon: React.ReactNode;
  iconBg: string;
  badge: string;
  gallery: PhotoDoc[];
}

export const activities: ActivityItem[] = [
  {
    id: 'act-1',
    title: 'Posyandu Balita & Posbindu Lansia Cempaka',
    category: 'Kesehatan Warga',
    schedule: 'Setiap Tanggal 10 Setiap Bulan',
    time: '08.30 - 11.30 WIB',
    location: 'Balai Pertemuan Kebonagung',
    description: 'Pemeriksaan tensi darah, penimbangan balita, imunisasi berkala, serta pembagian Pemberian Makanan Tambahan (PMT) bergizi bagi warga.',
    organizer: 'Kader Posyandu & Puskesmas Sleman',
    icon: <HeartPulse className="w-6 h-6 text-purple" />,
    iconBg: 'from-purple-100 to-cream-200',
    badge: 'Rutin Bulanan',
    gallery: [
      {
        id: 'p1-1',
        title: 'Penimbangan Balita & Pengukuran Tumbuh Kembang',
        caption: 'Kader posyandu mencatat data antropometri balita untuk pemantauan gizi dan pencegahan stunting di tingkat dusun.',
        tag: 'Balita Sehat',
        colorScheme: 'from-purple-200 via-cream-200 to-purple-100',
        iconSymbol: '👶',
      },
      {
        id: 'p1-2',
        title: 'Pemeriksaan Tensi Darah & Gula Darah Lansia',
        caption: 'Pemeriksaan kesehatan terpadu dan konsultasi kesehatan harian untuk para lansia di Padukuhan Kebonagung.',
        tag: 'Posbindu',
        colorScheme: 'from-cream-200 via-purple-100 to-cream-300',
        iconSymbol: '🩺',
      },
      {
        id: 'p1-3',
        title: 'Penyaluran Makanan Tambahan (PMT) Bergizi',
        caption: 'Pembagian bubur kacang hijau, telur rebus, dan buah segar untuk memenuhi kebutuhan gizi balita dan ibu hamil.',
        tag: 'Gizi Warga',
        colorScheme: 'from-purple-100 via-cream-100 to-purple-200',
        iconSymbol: '🥣',
      },
      {
        id: 'p1-4',
        title: 'Edukasi Pola Hidup Sehat bersama Tenaga Medis',
        caption: 'Sesi bimbingan singkat dari bidan desa mengenai sanitasi rumah tangga dan pola konsumsi sehat keluarga.',
        tag: 'Penyuluhan',
        colorScheme: 'from-cream-300 via-purple-200 to-cream-200',
        iconSymbol: '📋',
      },
    ],
  },
  {
    id: 'act-2',
    title: 'Kerja Bakti Bersih Dusun & Saluran Irigasi',
    category: 'Gotong Royong',
    schedule: 'Minggu Pertama Setiap Bulan',
    time: '06.30 - 09.30 WIB',
    location: 'Lingkungan RT 01 - RT 04',
    description: 'Aksi bersama membersihkan drainase, pemangkasan dahan pohon, pemilahan sampah organik, dan perawatan fasilitas umum.',
    organizer: 'Seluruh Warga & Karang Taruna',
    icon: <Shovel className="w-6 h-6 text-purple" />,
    iconBg: 'from-cream-200 to-purple-100',
    badge: 'Kebersihan',
    gallery: [
      {
        id: 'p2-1',
        title: 'Pembersihan Sedimen Saluran Irigasi Sawah',
        caption: 'Warga bersama-sama mengeruk lumpur dan sampah pada saluran irigasi agar aliran air ke lahan sawah lancar.',
        tag: 'Irigasi Lancar',
        colorScheme: 'from-cream-200 via-purple-200 to-cream-100',
        iconSymbol: '🌊',
      },
      {
        id: 'p2-2',
        title: 'Penataan Kebersihan Bahu Jalan Utama',
        caption: 'Pemotongan rumput liar dan perapian tanaman peneduh di sepanjang jalan masuk Padukuhan Kebonagung.',
        tag: 'Jalan Asri',
        colorScheme: 'from-purple-100 via-cream-300 to-purple-200',
        iconSymbol: '🌿',
      },
      {
        id: 'p2-3',
        title: 'Pemilahan Sampah & Pengelolaan Bank Sampah Dusun',
        caption: 'Edukasi dan pemilahan sampah anorganik yang dapat didaur ulang bersama pemuda Karang Taruna.',
        tag: 'Peduli Lingkungan',
        colorScheme: 'from-purple-200 via-cream-100 to-purple-100',
        iconSymbol: '♻️',
      },
      {
        id: 'p2-4',
        title: 'Guyub Rukun Santap Pagi Bersama Warga',
        caption: 'Momen keakraban menikmati teh hangat dan jajanan pasar setelah menyelesaikan giat kerja bakti bersama.',
        tag: 'Guyub Dusun',
        colorScheme: 'from-cream-100 via-purple-100 to-cream-300',
        iconSymbol: '☕',
      },
    ],
  },
  {
    id: 'act-3',
    title: 'Pertemuan Rutin Paguyuban PKK & Dasawisma',
    category: 'Pemberdayaan Wanita',
    schedule: 'Setiap Hari Jumat Kliwon',
    time: '15.30 - 17.00 WIB',
    location: 'Rumah Kader PKK Bergilir',
    description: 'Forum arisan bulanan, edukasi ketahanan pangan keluarga, pengelolaan pekarangan tanaman obat, dan simpan pinjam dasawisma.',
    organizer: 'Tim Penggerak PKK Kebonagung',
    icon: <Users className="w-6 h-6 text-purple" />,
    iconBg: 'from-purple-200 to-cream-100',
    badge: 'Sosial & Edukasi',
    gallery: [
      {
        id: 'p3-1',
        title: 'Rapat Pleno & Evaluasi Program Kerja PKK',
        caption: 'Penyampaian laporan kegiatan bulanan dan perencanaan program pembinaan keluarga sakinah.',
        tag: 'Rapat Bulanan',
        colorScheme: 'from-purple-100 via-cream-200 to-purple-200',
        iconSymbol: '📝',
      },
      {
        id: 'p3-2',
        title: 'Budidaya Tanaman Obat Keluarga (TOGA) Pekarangan',
        caption: 'Pelatihan menanam jahe, kencur, kunyit, dan serai di polybag pekarangan rumah tangga.',
        tag: 'Pekarangan Hijau',
        colorScheme: 'from-cream-200 via-purple-100 to-cream-100',
        iconSymbol: '🌱',
      },
      {
        id: 'p3-3',
        title: 'Demo Pengolahan Kudapan Sehat Berbahan Singkong',
        caption: 'Kreativitas ibu-ibu PKK dalam menciptakan variasi kue tradisional berbahan dasar umbi-umbian lokal.',
        tag: 'Kuliner Sehat',
        colorScheme: 'from-purple-200 via-cream-300 to-purple-100',
        iconSymbol: '👩‍🍳',
      },
      {
        id: 'p3-4',
        title: 'Simpan Pinjam Mandiri Kelompok Dasawisma',
        caption: 'Pengelolaan dana gotong royong untuk mendukung modal usaha mikro ibu-ibu warga Kebonagung.',
        tag: 'Kemandirian Ekonomi',
        colorScheme: 'from-cream-300 via-purple-200 to-cream-200',
        iconSymbol: '💰',
      },
    ],
  },
  {
    id: 'act-4',
    title: 'Merti Dusun & Gelar Budaya Tradisi',
    category: 'Seni & Budaya',
    schedule: 'Agenda Tahunan (Bulan Sapar/Rejeb)',
    time: '08.00 WIB - Selesai',
    location: 'Kawasan Dusun Kebonagung',
    description: 'Upacara adat wujud syukur berkah bumi, kirab gunungan hasil tani, doa lintas tokoh, dan pementasan seni karawitan tradisional.',
    organizer: 'Paguyuban Kebudayaan & Tokoh Adat',
    icon: <Landmark className="w-6 h-6 text-purple" />,
    iconBg: 'from-cream-100 to-purple-200',
    badge: 'Kearifan Lokal',
    gallery: [
      {
        id: 'p4-1',
        title: 'Kirab Gunungan Hasil Bumi Kebonagung',
        caption: 'Pawai arak-arakan gunungan berisi sayuran, buah, dan hasil panen mengitari jalan padukuhan dengan busana adat.',
        tag: 'Kirab Budaya',
        colorScheme: 'from-purple-200 via-cream-200 to-purple-100',
        iconSymbol: '🌾',
      },
      {
        id: 'p4-2',
        title: 'Prosesi Kenduri & Doa Bersama Tokoh Masyarakat',
        caption: 'Upacara sakral mengucap syukur kepada Tuhan Yang Maha Esa atas limpahan rezeki dan ketentraman warga.',
        tag: 'Doa Syukur',
        colorScheme: 'from-cream-200 via-purple-100 to-cream-300',
        iconSymbol: '🤲',
      },
      {
        id: 'p4-3',
        title: 'Pementasan Karawitan Gamelan Jawa Warga',
        caption: 'Tabuhan gending gamelan yang dimainkan dengan penuh dedikasi oleh paguyuban karawitan Kebonagung.',
        tag: 'Seni Karawitan',
        colorScheme: 'from-purple-100 via-cream-100 to-purple-200',
        iconSymbol: '🎶',
      },
      {
        id: 'p4-4',
        title: 'Gelar Pentas Seni Budaya & Jathilan Tradisional',
        caption: 'Pementasan seni tradisional yang dinikmati ratusan warga dengan penuh antusias dan suka cita.',
        tag: 'Pentas Rakyat',
        colorScheme: 'from-cream-300 via-purple-200 to-cream-100',
        iconSymbol: '🎭',
      },
    ],
  },
  {
    id: 'act-5',
    title: 'Pelatihan Branding & Digitalisasi UMKM',
    category: 'Program Inovasi',
    schedule: 'Program Sinergi 2026',
    time: '09.00 - 12.00 WIB',
    location: 'Aula Padukuhan Kebonagung',
    description: 'Pendampingan pembuatan profil online, foto produk estetis, dan teknik pengemasan makanan higienis bersama mahasiswa UAD.',
    organizer: 'Tim MeRAMU HMTP UAD 2026',
    icon: <BookOpen className="w-6 h-6 text-purple" />,
    iconBg: 'from-purple-100 to-cream-300',
    badge: 'Program MeRAMU',
    gallery: [
      {
        id: 'p5-1',
        title: 'Sesi Pemaparan Strategi Digital Marketing & Branding',
        caption: 'Tim MeRAMU HMTP UAD memaparkan teknik pemasaran modern melalui media sosial dan platform digital kepada pelaku UMKM.',
        tag: 'Edukasi Digital',
        colorScheme: 'from-purple-200 via-cream-100 to-purple-100',
        iconSymbol: '💻',
      },
      {
        id: 'p5-2',
        title: 'Praktik Pemotretan Produk dengan Mini Studio',
        caption: 'Pelaku usaha diajak memotret produk olahan menggunakan pencahayaan alami dan tata letak profesional.',
        tag: 'Foto Produk',
        colorScheme: 'from-cream-200 via-purple-200 to-cream-100',
        iconSymbol: '📸',
      },
      {
        id: 'p5-3',
        title: 'Pelatihan Pengemasan & Pelabelan Produk Higienis',
        caption: 'Edukasi standar kemasan pangan yang tahan lama, aman dikonsumsi, dan memiliki daya tarik visual tinggi.',
        tag: 'Packaging Standar',
        colorScheme: 'from-purple-100 via-cream-300 to-purple-200',
        iconSymbol: '📦',
      },
      {
        id: 'p5-4',
        title: 'Serah Terima Sistem Informasi Padukuhan Kebonagung',
        caption: 'Penyerahan platform web resmi padukuhan kepada Kepala Dukuh Kebonagung untuk keberlanjutan publikasi warga.',
        tag: 'Sinergi 2026',
        colorScheme: 'from-cream-100 via-purple-100 to-cream-300',
        iconSymbol: '🤝',
      },
    ],
  },
  {
    id: 'act-6',
    title: 'Siskamling & Ronda Keamanan Bergilir',
    category: 'Ketertiban',
    schedule: 'Setiap Malam (Jadwal Regu)',
    time: '22.00 - 04.00 WIB',
    location: 'Pos Ronda RT 01 - RT 04',
    description: 'Penjagaan ketentraman lingkungan dan patroli rutin swadaya warga guna memastikan situasi padukuhan tetap aman dan kondusif.',
    organizer: 'Linmas & Warga Padukuhan',
    icon: <ShieldCheck className="w-6 h-6 text-purple" />,
    iconBg: 'from-cream-200 to-purple-200',
    badge: 'Keamanan 24 Jam',
    gallery: [
      {
        id: 'p6-1',
        title: 'Apel Koordinasi Regu Jaga Malam di Pos Ronda',
        caption: 'Pemeriksaan kelengkapan regu jaga malam sebelum memulai rute patroli ke setiap lorong RT.',
        tag: 'Apel Ronda',
        colorScheme: 'from-purple-100 via-cream-200 to-purple-200',
        iconSymbol: '🔦',
      },
      {
        id: 'p6-2',
        title: 'Patroli Lingkungan Pemukiman & Batas Dusun',
        caption: 'Pengecekan pintu gerbang dan fasilitas umum secara berkala pada jam-jam rawan malam hari.',
        tag: 'Patroli Tertib',
        colorScheme: 'from-cream-200 via-purple-100 to-cream-100',
        iconSymbol: '🚶‍♂️',
      },
      {
        id: 'p6-3',
        title: 'Pemanfaatan Kentongan & Komunikasi HT Darurat',
        caption: 'Pemeliharaan sarana komunikasi tradisional dan digital untuk koordinasi tanggap darurat warga.',
        tag: 'Tanggap Cepat',
        colorScheme: 'from-purple-200 via-cream-300 to-purple-100',
        iconSymbol: '📻',
      },
      {
        id: 'p6-4',
        title: 'Pemeriksaan Penerangan Jalan Lingkungan Dusun',
        caption: 'Memastikan seluruh lampu jalan gang berfungsi dengan baik untuk keamanan aktivitas warga di malam hari.',
        tag: 'Lingkungan Terang',
        colorScheme: 'from-cream-300 via-purple-200 to-cream-200',
        iconSymbol: '💡',
      },
    ],
  },
];
