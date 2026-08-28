import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  Sparkles, 
  HeartPulse, 
  Shovel, 
  Landmark, 
  BookOpen, 
  ShieldCheck, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Camera,
  Grid,
  Layers,
  Info
} from 'lucide-react';

interface PhotoDoc {
  id: string;
  title: string;
  caption: string;
  tag: string;
  colorScheme: string;
  iconSymbol: string;
}

interface ActivityItem {
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

const activities: ActivityItem[] = [
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

export const KegiatanSection: React.FC = () => {
  // State for modal dialog pop-up and active photo carousel
  const [selectedActivity, setSelectedActivity] = useState<ActivityItem | null>(null);
  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedActivity(null);
      }
    };

    if (selectedActivity) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedActivity]);

  const openActivityModal = (activity: ActivityItem) => {
    setSelectedActivity(activity);
    setActivePhotoIdx(0);
    setViewMode('carousel');
  };

  const closeModal = () => {
    setSelectedActivity(null);
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedActivity) return;
    setActivePhotoIdx((prev) => (prev + 1) % selectedActivity.gallery.length);
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedActivity) return;
    setActivePhotoIdx((prev) => (prev - 1 + selectedActivity.gallery.length) % selectedActivity.gallery.length);
  };

  return (
    <section id="kegiatan" className="pt-28 sm:pt-32 pb-20 md:pb-28 bg-cream-100/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple/10 border border-purple/20 text-xs font-bold text-purple uppercase tracking-wider"
          >
            <Calendar className="w-3.5 h-3.5 text-purple" />
            <span>Agenda & Dokumentasi Warga</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple tracking-tight leading-tight"
          >
            Kegiatan Padukuhan
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-purple/85 leading-relaxed"
          >
            Klik pada setiap kartu kegiatan untuk melihat detail lengkap serta <strong>galeri dokumentasi bukti foto</strong> pelaksanaan di Padukuhan Kebonagung.
          </motion.p>
        </div>

        {/* Clickable Activity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, idx) => (
            <motion.div
              key={activity.id}
              onClick={() => openActivityModal(activity)}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group cursor-pointer rounded-3xl bg-cream border-2 border-purple/20 hover:border-purple shadow-purple-sm hover:shadow-purple-lg transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openActivityModal(activity);
                }
              }}
            >
              <div>
                {/* Visual Header / Banner */}
                <div className={`h-36 bg-gradient-to-br ${activity.iconBg} border-b-2 border-purple/15 p-5 flex items-start justify-between relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-dots-pattern opacity-30 pointer-events-none" />

                  {/* Icon Emblem */}
                  <div className="w-12 h-12 rounded-2xl bg-cream border-2 border-purple/20 shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-purple group-hover:text-cream transition-all z-10 [&>svg]:group-hover:text-cream">
                    {activity.icon}
                  </div>

                  {/* Badges */}
                  <div className="flex flex-col items-end gap-1.5 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple text-cream shadow-sm flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-cream" />
                      <span>{activity.badge}</span>
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cream/90 text-purple border border-purple/20 shadow-xs flex items-center gap-1">
                      <Camera className="w-3 h-3 text-purple" />
                      <span>{activity.gallery.length} Foto Bukti</span>
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-purple/70 uppercase tracking-wider block">
                      {activity.category}
                    </span>
                    <h3 className="font-bold text-lg text-purple group-hover:text-purple-800 transition-colors leading-snug">
                      {activity.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-purple/80 leading-relaxed line-clamp-3 text-justify">
                    {activity.description}
                  </p>

                  {/* Schedule & Metadata Details */}
                  <div className="pt-3 border-t border-purple/10 space-y-2 text-xs text-purple/85">
                    <div className="flex items-center gap-2 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-purple shrink-0" />
                      <span>{activity.schedule}</span>
                    </div>

                    <div className="flex items-center gap-2 font-medium">
                      <Clock className="w-3.5 h-3.5 text-purple shrink-0" />
                      <span>{activity.time}</span>
                    </div>

                    <div className="flex items-center gap-2 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-purple shrink-0" />
                      <span>{activity.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-2">
                <div className="pt-3 border-t-2 border-purple/15 flex items-center justify-between text-xs font-semibold text-purple">
                  <span className="text-purple/70 text-[11px]">Penyelenggara: {activity.organizer}</span>
                  <span className="inline-flex items-center gap-1 font-bold text-purple group-hover:translate-x-1 transition-transform">
                    <span>Lihat Galeri</span>
                    <span>→</span>
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Modal Dialog Pop-up for Activity & Photo Gallery */}
        <AnimatePresence>
          {selectedActivity && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-purple-950/75 backdrop-blur-sm"
              onClick={closeModal}
            >
              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ type: 'spring', duration: 0.45, bounce: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl max-h-[90vh] bg-cream rounded-3xl border-2 border-purple shadow-2xl overflow-hidden flex flex-col my-auto"
              >
                {/* Modal Top Header */}
                <div className="p-5 sm:p-6 bg-cream-50 border-b-2 border-purple/20 flex items-start justify-between gap-4 sticky top-0 z-20">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple text-cream">
                        {selectedActivity.category}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple/10 text-purple border border-purple/20">
                        {selectedActivity.badge}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-purple leading-tight pt-1">
                      {selectedActivity.title}
                    </h3>
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={closeModal}
                    className="p-2.5 rounded-2xl bg-cream border-2 border-purple text-purple hover:bg-purple hover:text-cream transition-all shrink-0 shadow-sm"
                    aria-label="Tutup Dialog"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Scrollable Content */}
                <div className="p-5 sm:p-7 space-y-7 overflow-y-auto max-h-[calc(90vh-140px)]">
                  
                  {/* Gallery Control Bar */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-cream-muted/70 p-3.5 rounded-2xl border border-purple/20">
                    <div className="flex items-center gap-2 text-purple font-bold text-sm">
                      <Camera className="w-4 h-4 text-purple" />
                      <span>Galeri Bukti Foto Dokumentasi ({selectedActivity.gallery.length} Foto)</span>
                    </div>

                    <div className="flex items-center gap-1.5 self-end sm:self-auto">
                      <button
                        onClick={() => setViewMode('carousel')}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                          viewMode === 'carousel'
                            ? 'bg-purple text-cream shadow-sm'
                            : 'bg-cream border border-purple/20 text-purple hover:bg-purple/10'
                        }`}
                      >
                        <Layers className="w-3.5 h-3.5" />
                        <span>Slider Tampilan</span>
                      </button>
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                          viewMode === 'grid'
                            ? 'bg-purple text-cream shadow-sm'
                            : 'bg-cream border border-purple/20 text-purple hover:bg-purple/10'
                        }`}
                      >
                        <Grid className="w-3.5 h-3.5" />
                        <span>Semua Foto (Grid)</span>
                      </button>
                    </div>
                  </div>

                  {/* 1. Carousel Mode View */}
                  {viewMode === 'carousel' && (
                    <div className="space-y-4">
                      {/* Main Featured Photo Box */}
                      <div className="relative rounded-3xl overflow-hidden border-2 border-purple bg-cream-50 shadow-purple-md">
                        <div className={`h-64 sm:h-80 md:h-96 w-full bg-gradient-to-br ${selectedActivity.gallery[activePhotoIdx].colorScheme} p-6 flex flex-col justify-between relative overflow-hidden`}>
                          <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />

                          {/* Top bar inside photo view */}
                          <div className="flex items-center justify-between z-10">
                            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-cream text-purple border-2 border-purple shadow-sm">
                              {selectedActivity.gallery[activePhotoIdx].tag}
                            </span>
                            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-purple text-cream shadow-sm">
                              Foto {activePhotoIdx + 1} dari {selectedActivity.gallery.length}
                            </span>
                          </div>

                          {/* Center Graphic Representation */}
                          <div className="relative z-10 my-auto text-center space-y-2">
                            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-cream border-2 border-purple shadow-purple-sm mx-auto flex items-center justify-center text-4xl sm:text-5xl">
                              {selectedActivity.gallery[activePhotoIdx].iconSymbol}
                            </div>
                            <span className="text-xs font-extrabold text-purple uppercase tracking-wider block">
                              Dokumentasi Resmi Padukuhan Kebonagung
                            </span>
                          </div>

                          {/* Bottom Caption Overlay */}
                          <div className="relative z-10 bg-cream/95 backdrop-blur-sm p-4 rounded-2xl border-2 border-purple/20 space-y-1">
                            <h4 className="font-extrabold text-sm sm:text-base text-purple leading-snug">
                              {selectedActivity.gallery[activePhotoIdx].title}
                            </h4>
                            <p className="text-xs sm:text-sm text-purple/85 leading-relaxed text-justify">
                              {selectedActivity.gallery[activePhotoIdx].caption}
                            </p>
                          </div>

                          {/* Left Navigation Arrow */}
                          <button
                            onClick={prevPhoto}
                            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-2xl bg-cream/90 border-2 border-purple text-purple hover:bg-purple hover:text-cream flex items-center justify-center shadow-md transition-all active:scale-95"
                            aria-label="Foto Sebelumnya"
                          >
                            <ChevronLeft className="w-6 h-6" />
                          </button>

                          {/* Right Navigation Arrow */}
                          <button
                            onClick={nextPhoto}
                            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-2xl bg-cream/90 border-2 border-purple text-purple hover:bg-purple hover:text-cream flex items-center justify-center shadow-md transition-all active:scale-95"
                            aria-label="Foto Berikutnya"
                          >
                            <ChevronRight className="w-6 h-6" />
                          </button>
                        </div>
                      </div>

                      {/* Thumbnail Selector Strip */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                        {selectedActivity.gallery.map((photo, pIdx) => (
                          <button
                            key={photo.id}
                            onClick={() => setActivePhotoIdx(pIdx)}
                            className={`p-3 rounded-2xl text-left border-2 transition-all flex flex-col justify-between gap-2 ${
                              activePhotoIdx === pIdx
                                ? 'bg-purple text-cream border-purple shadow-purple-sm scale-[1.02]'
                                : 'bg-cream-50 text-purple border-purple/20 hover:border-purple/60'
                            }`}
                          >
                            <div className="flex items-center justify-between w-full">
                              <span className="text-lg">{photo.iconSymbol}</span>
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${activePhotoIdx === pIdx ? 'bg-cream text-purple' : 'bg-purple/10 text-purple'}`}>
                                #{pIdx + 1}
                              </span>
                            </div>
                            <span className="text-[11px] font-bold line-clamp-1 leading-snug">
                              {photo.title}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 2. Grid Mode View */}
                  {viewMode === 'grid' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedActivity.gallery.map((photo, pIdx) => (
                        <div
                          key={photo.id}
                          className="rounded-3xl border-2 border-purple bg-cream-50 overflow-hidden flex flex-col justify-between shadow-purple-sm"
                        >
                          <div className={`h-40 bg-gradient-to-br ${photo.colorScheme} p-4 flex flex-col justify-between relative`}>
                            <div className="flex items-center justify-between">
                              <span className="px-3 py-0.5 rounded-full text-[11px] font-bold bg-cream text-purple border border-purple/20">
                                {photo.tag}
                              </span>
                              <span className="text-xs font-bold text-purple bg-cream/80 px-2 py-0.5 rounded-md">
                                Bukti #{pIdx + 1}
                              </span>
                            </div>
                            <div className="my-auto text-center text-3xl">
                              {photo.iconSymbol}
                            </div>
                          </div>

                          <div className="p-4 space-y-1 bg-cream">
                            <h4 className="font-bold text-sm text-purple leading-snug">
                              {photo.title}
                            </h4>
                            <p className="text-xs text-purple/80 leading-relaxed text-justify">
                              {photo.caption}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Activity Details & Metadata Summary */}
                  <div className="rounded-2xl bg-cream-muted/80 border-2 border-purple/20 p-5 space-y-3">
                    <div className="flex items-center gap-2 font-bold text-sm text-purple">
                      <Info className="w-4 h-4 text-purple" />
                      <span>Rincian Pelaksanaan Agenda</span>
                    </div>

                    <p className="text-xs sm:text-sm text-purple/85 leading-relaxed text-justify">
                      {selectedActivity.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-purple font-semibold border-t border-purple/15">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-purple shrink-0" />
                        <span>{selectedActivity.schedule}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-purple shrink-0" />
                        <span>{selectedActivity.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-purple shrink-0" />
                        <span>{selectedActivity.location}</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Modal Footer */}
                <div className="p-4 sm:p-5 bg-cream-50 border-t-2 border-purple/20 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs font-bold text-purple/75">
                    Penyelenggara: {selectedActivity.organizer}
                  </span>
                  
                  <button
                    onClick={closeModal}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold bg-purple text-cream hover:bg-purple-800 transition-all text-xs shadow-purple-sm"
                  >
                    Tutup Dialog
                  </button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
