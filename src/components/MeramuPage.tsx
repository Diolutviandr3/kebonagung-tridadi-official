import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  Sparkles, 
  Target, 
  CheckCircle2, 
  ArrowLeft, 
  BookOpen, 
  Cpu, 
  Award, 
  Layers, 
  X, 
  Maximize2,
  Calendar,
  MapPin,
  Heart,
  ChevronLeft,
  ChevronRight,
  Camera
} from 'lucide-react';
import penerjunan1 from '../assets/penerjunan1.JPG';
import penerjunan2 from '../assets/penerjunan2.JPG';
import penerjunan3 from '../assets/penerjunan3.JPG';
import penerjunan4 from '../assets/penerjunan4.JPG';

interface MeramuDocPhoto {
  id: string;
  title: string;
  category: 'Pelatihan' | 'Digitalisasi' | 'Kemitraan' | 'Sosial';
  date: string;
  location: string;
  caption: string;
  colorScheme: string;
  iconSymbol: string;
  images?: string[];
}

const docPhotos: MeramuDocPhoto[] = [
  {
    id: 'meramu-1',
    title: 'Survei Awal & Pemetaan Potensi Pertanian Dusun',
    category: 'Kemitraan',
    date: 'Januari 2026',
    location: 'Lahan Pertanian Kebonagung',
    caption: 'Tim MeRAMU HMTP UAD melakukan observasi komoditas pangan utama dan diskusi bersama Lurah Tridadi beserta PCM Sleman',
    colorScheme: 'from-purple-200 via-cream-200 to-purple-100',
    iconSymbol: '🌾',
  },
  {
    id: 'meramu-2',
    title: 'Focus Group Discussion (FGD) bersama Karang Taruna Kebonagung',
    category: 'Kemitraan',
    date: 'Agustus 2026',
    location: 'Balai Cabai Padukuhan Kebonagung',
    caption: 'Fiksasi rencana kerja program pengabdian di Padukuhan Kebonagung.',
    colorScheme: 'from-cream-200 via-purple-100 to-cream-300',
    iconSymbol: '🗣️',
  },
  {
    id: 'meramu-3',
    title: 'Sosialisasi dan Penerjunan Tim MeRAMU HMTP UAD',
    category: 'Sosial',
    date: '15 Agustus 2026',
    location: 'Aula Kalurahan Tridadi',
    caption: 'Melakukan penerjunan Tim MeRAMU HMTP UAD secara resmi oleh pihak universitas, kalurahan, dan mitra terkait.',
    colorScheme: 'from-purple-100 via-cream-100 to-purple-200',
    iconSymbol: '🤝',
    images: [penerjunan1, penerjunan2, penerjunan3, penerjunan4],
  },
  {
    id: 'meramu-4',
    title: 'Sosialisasi TALASTIKA dan VESTA: Diversifikasi Produk Olahan Talas',
    category: 'Pelatihan',
    date: '21 Agustus 2026',
    location: 'Masjid Al-Huda Kebonagung',
    caption: 'Sosialisasi pengolahan tepung talas dan inovasi camilan sehat bernilai jual tinggi bersama ibu-ibu KWT.',
    colorScheme: 'from-purple-100 via-cream-100 to-purple-200',
    iconSymbol: '🥣',
  },
  {
    id: 'meramu-5',
    title: 'Pelatihan TALASTIKA: Diversifikasi Produk Tepung Talas',
    category: 'Pelatihan',
    date: '29 Agustus 2026',
    location: 'Balai Lelang Cabai Kebonagung',
    caption: 'Praktik langsung proses pembuatan tepung talas bersama ibu-ibu KWT.',
    colorScheme: 'from-purple-100 via-cream-100 to-purple-200',
    iconSymbol: '🥣',
  },
  {
    id: 'meramu-6',
    title: 'Pelatihan VESTA: Pengolahan Produk Turunan Tepung Talas Berupa Nugget dan Beras Analog',
    category: 'Pelatihan',
    date: '29 Agustus 2026',
    location: 'Balai Lelang Cabai Kebonagung',
    caption: 'Praktik langsung pengolahan inovasi nugget serta beras analog berbasis tepung talas bersama ibu-ibu KWT.',
    colorScheme: 'from-purple-100 via-cream-100 to-purple-200',
    iconSymbol: '🥣',
  },
  {
    id: 'meramu-7',
    title: 'Workshop PRIME: Pendampingan Desain Kemasan & Identitas Merek (Branding)',
    category: 'Pelatihan',
    date: '31 Agustus 2026',
    location: 'Masjid Al-Huda Kebonagung',
    caption: 'Edukasi pembuatan identitas visual produk, label kemasan informatif sesuai regulasi (komposisi, tanggal kedaluwarsa, nilai gizi), serta pemilihan bahan kemasan tahan udara.',
    colorScheme: 'from-cream-300 via-purple-200 to-cream-200',
    iconSymbol: '🧼',
  },
  {
    id: 'meramu-8',
    title: 'Sosialisasi Legalitas Produk Usaha',
    category: 'Pelatihan',
    date: '31 Agustus 2026',
    location: 'Masjid Al-Huda Kebonagung',
    caption: 'Sinergi bersama pelaku UMKM desa dalam memberikan pemahaman dan pendampingan pengurusan izin dasar (NIB) serta sertifikasi produk (P-IRT/Halal) guna meningkatkan nilai jual komoditas lokal seperti olahan talas agar siap bersaing di pasar yang lebih luas.',
    colorScheme: 'from-purple-200 via-cream-100 to-purple-100',
    iconSymbol: '📦',
  },
  {
    id: 'meramu-9',
    title: 'Pengenalan dan Uji Coba Website Resmi Padukuhan Kebonagung',
    category: 'Digitalisasi',
    date: '31 Agustus 2026',
    location: 'Masjid Al-Huda Kebonagung',
    caption: 'Pengenalan dan uji coba website resmi padukuhan untuk mempublikasikan profil dan produk UMKM dusun.',
    colorScheme: 'from-cream-200 via-purple-200 to-cream-100',
    iconSymbol: '💻',
  },
  {
    id: 'meramu-11',
    title: 'Pelatihan Pengelolaan Konten Digital untuk Pemuda Karang Taruna',
    category: 'Digitalisasi',
    date: 'April 2026',
    location: 'Balai Pertemuan Kebonagung',
    caption: 'Bimbingan teknis pengelolaan informasi web, foto dokumentasi, dan promosi media sosial kepada generasi muda padukuhan.',
    colorScheme: 'from-purple-100 via-cream-300 to-purple-200',
    iconSymbol: '📱',
  },
  {
    id: 'meramu-12',
    title: 'Silaturrahmi Bersama Kepala Dukuh dan RT/RW Kebonagung',
    category: 'Sosial',
    date: '11 Agustus 2026',
    location: 'Kebonagung',
    caption: 'Melakukan silaturrahmi dan diskusi santai bersama Kepala Dukuh dan RT/RW untuk mendengar aspirasi dan masukan terkait program pengabdian Tim Meramu HMTP.',
    colorScheme: 'from-cream-100 via-purple-100 to-cream-300',
    iconSymbol: '👶',
  },
  {
    id: 'meramu-13',
    title: 'Silaturrahmi Bersama Pimpinan Cabang Muhammadiyah Sleman dan Pimpinan Ranting Muhammadiyah Tridadi',
    category: 'Sosial',
    date: '11 Agustus 2026',
    location: 'Kebonagung',
    caption: 'Melakukan silaturrahmi dan diskusi santai bersama Pimpinan Cabang Muhammadiyah Sleman dan Pimpinan Ranting Muhammadiyah Tridadi untuk mendengar aspirasi dan masukan terkait program pengabdian Tim Meramu HMTP.',
    colorScheme: 'from-cream-100 via-purple-100 to-cream-300',
    iconSymbol: '👶',
  },
  {
    id: 'meramu-14',
    title: 'Serah Terima Peninggalan Fisik & Penutupan Program Pengabdian',
    category: 'Kemitraan',
    date: 'September 2026',
    location: 'Balai Lelang Cabai Padukuhan Kebonagung',
    caption: 'Penyerahan plakat penghargaan, dokumen sistem informasi padukuhan, dan foto bersama Kepala Dukuh serta seluruh perwakilan warga.',
    colorScheme: 'from-purple-200 via-cream-200 to-purple-100',
    iconSymbol: '🎓',
  },
  {
    id: 'meramu-15',
    title: 'Mengajar TPA (Taman Pendidikan Al- Quran)',
    category: 'Sosial',
    date: '14, 15, 21, 22, 28, 29 Agustus dan 4,5 September 2026',
    location: 'Masjid Al-Huda Kebonagung',
    caption: 'Tim MeRAMU HMTP UAD mengisi kegiatan belajar mengajar TPA (Taman Pendidikan Al-Quran) untuk anak-anak usia dini di Padukuhan Kebonagung.',
    colorScheme: 'from-purple-200 via-cream-200 to-purple-100',
    iconSymbol: '🎓',
  },
  {
    id: 'meramu-16',
    title: 'Kajian Malam Jumat',
    category: 'Sosial',
    date: '13, 20, 27 Agustus dan 3, 10 September 2026',
    location: 'Masjid Al-Huda Kebonagung',
    caption: 'Tim MeRAMU HMTP UAD mengisi kegiatan kajian rutin Malam Jumat di Masjid Al-Huda Kebonagung dengan tema penguatan karakter dan motivasi belajar bagi generasi Islam.',
    colorScheme: 'from-purple-200 via-cream-200 to-purple-100',
    iconSymbol: '🎓',
  },
  {
    id: 'meramu-17',
    title: 'Malam Tirakatan Peringatan HUT RI ke-81',
    category: 'Sosial',
    date: '16 Agustus 2026',
    location: 'Kebonagung',
    caption: 'Tim MeRAMU HMTP UAD turut berpartisipasi dalam kegiatan Malam Tirakatan Peringatan HUT RI ke-81 di Padukuhan Kebonagung.',
    colorScheme: 'from-purple-200 via-cream-200 to-purple-100',
    iconSymbol: '🎓',
  },
  {
    id: 'meramu-18',
    title: 'Hari Sehat Bersama Masyarakat',
    category: 'Sosial',
    date: '17 dan 23 Agustus 2026',
    location: 'Kebonagung',
    caption: 'Tim MeRAMU HMTP UAD turut berpartisipasi dalam kegiatan Hari Sehat Bersama Masyarakat di Padukuhan Kebonagung.',
    colorScheme: 'from-purple-200 via-cream-200 to-purple-100',
    iconSymbol: '🎓',
  },
  {
    id: 'meramu-19',
    title: 'Kegiatan Memperingati Hari Kemardekaan ',
    category: 'Sosial',
    date: 'Agustus 2026',
    location: 'Kebonagung',
    caption: 'Tim MeRAMU HMTP UAD turut berpartisipasi dalam kegiatan memperingati Hari Kemerdekaan di Padukuhan Kebonagung.',
    colorScheme: 'from-purple-200 via-cream-200 to-purple-100',
    iconSymbol: '🎓',
  },
  {
    id: 'meramu-19',
    title: 'Silaturrahmi Bersama Karang Taruna dan Kelompok Wanita Tani',
    category: 'Sosial',
    date: 'Agustus 2026',
    location: 'Kebonagung',
    caption: '',
    colorScheme: 'from-purple-200 via-cream-200 to-purple-100',
    iconSymbol: '🎓',
  },
];

interface MeramuPageProps {
  onBackToHome: () => void;
}

export const MeramuPage: React.FC<MeramuPageProps> = ({ onBackToHome }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<MeramuDocPhoto | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [activeFilter, setActiveFilter] = useState<string>('Semua');

  const categories = ['Semua', 'Pelatihan', 'Digitalisasi', 'Kemitraan', 'Sosial'];

  const filteredPhotos = activeFilter === 'Semua'
    ? docPhotos
    : docPhotos.filter(p => p.category === activeFilter);

  const programs = [
    {
      num: '01',
      title: 'Digitalisasi Sistem Informasi Padukuhan Kebonagung',
      subtitle: 'Membangun Ekosistem Keterbukaan Informasi Desa',
      desc: 'Pengembangan situs web resmi berbasis teknologi modern (React, Tailwind CSS, Framer Motion) untuk menyajikan profil wilayah, katalog UMKM warga, dan keterbukaan agenda kegiatan padukuhan kepada publik.',
      deliverables: [
        'Website Padukuhan Kebonagung yang responsif & ramah perangkat mobile',
        'Etalase digital promosi produk-produk olahan pangan UMKM warga',
      ],
      icon: <Cpu className="w-6 h-6 text-purple" />,
    },
    {
      num: '02',
      title: 'TALASTIKA dan VESTA : Diversifikasi & Inovasi Teknologi Pengolahan Pangan Lokal',
      subtitle: 'Meningkatkan Nilai Tambah Komoditas Hasil Panen',
      desc: 'Penerapan ilmu teknologi pangan dalam mengolah umbi talas menjadi tepung talas berkualitas serta aneka olahan kudapan sehat berdaya simpan lebih lama.',
      deliverables: [
        'Formulasi resep olahan pangan bernilai ekonomi tinggi',
        'Praktik pembuatan tepung talas bebas gluten untuk Kelompok Wanita Tani (KWT)',
        'Uji organoleptik (rasa, aroma, tekstur) produk bersama masyarakat',
      ],
      icon: <Sparkles className="w-6 h-6 text-purple" />,
    },
    {
      num: '03',
      title: 'Standardisasi Higiene, Sanitasi & Keamanan Pangan UMKM',
      subtitle: 'Penerapan Good Manufacturing Practices (GMP)',
      desc: 'Pendampingan pelaku usaha mikro dalam menerapkan prinsip sanitasi pengolahan makanan, higienitas pekerja, serta pencegahan kontaminasi fisik, kimia, dan biologis.',
      deliverables: [
        'Checklist audit kebersihan dapur produksi UMKM binaan',
        'Sosialisasi sertifikasi pangan aman dan izin edar produk',
      ],
      icon: <Award className="w-6 h-6 text-purple" />,
    },
    {
      num: '04',
      title: 'PRIME : Pendampingan Desain Kemasan & Identitas Merek (Branding)',
      subtitle: 'Meningkatkan Daya Saing Pasar Produk Warga',
      desc: 'Pelatihan pembuatan identitas visual produk, label kemasan informatif sesuai regulasi (komposisi, tanggal kedaluwarsa, nilai gizi), serta pemilihan bahan kemasan tahan udara.',
      deliverables: [
        'Desain label kemasan modern untuk 6+ produk UMKM Padukuhan Kebonagung',
        'Penggunaan teknik sealing kemasan yang menjaga kerenyahan makanan',
      ],
      icon: <Layers className="w-6 h-6 text-purple" />,
    },
    {
      num: '05',
      title: 'Sosialisasi Legalitas Produk Usaha',
      subtitle: 'Pemberdayaan UMKM & Peningkatan Daya Saing Potensi Lokal',
      desc: 'Sinergi bersama pelaku UMKM desa dalam memberikan pemahaman dan pendampingan pengurusan izin dasar (NIB) serta sertifikasi produk (P-IRT/Halal) guna meningkatkan nilai jual komoditas lokal seperti olahan talas agar siap bersaing di pasar yang lebih luas.',
      deliverables: [
        'Panduan praktis pendaftaran Nomor Induk Berusaha (NIB)',
        'Leaflet alur pengurusan sertifikasi P-IRT dan Halal untuk produk olahan pangan',
        'Pendampingan langsung pendaftaran legalitas bagi perwakilan pelaku usaha mikro',
      ],
      icon: <Heart className="w-6 h-6 text-purple" />,
    },
  ];

  return (
    <div className="min-h-screen bg-cream text-purple pt-24 pb-20 selection:bg-purple selection:text-cream">
      
      {/* Top Banner / Breadcrumb */}
      <div className="bg-cream-100/90 border-b-2 border-purple/15 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-purple text-cream hover:bg-purple-800 transition-all shadow-sm group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Kembali ke Halaman Utama</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold text-purple/75">
            <span>Beranda</span>
            <span>/</span>
            <span className="text-purple font-bold">Tim MeRAMU HMTP UAD 2026</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-20">
        
        {/* Header Title & Intro Section */}
        <section className="text-center max-w-4xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple text-cream text-xs font-bold uppercase tracking-wider shadow-purple-sm"
          >
            <GraduationCap className="w-4 h-4 text-cream" />
            <span>Program Pengabdian Mahasiswa 2026</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-purple tracking-tight leading-tight"
          >
            Tim MeRAMU HMTP <br className="hidden sm:inline" />
            <span className="font-serif italic underline decoration-purple/30 decoration-wavy underline-offset-8">
              Universitas Ahmad Dahlan 2026
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-purple/85 leading-relaxed text-justify"
          >
            Mewujudkan Padukuhan Kebonagung, Tridadi yang berdaya saing mandiri melalui integrasi <strong>Teknologi Pangan Tepat Guna</strong>, <strong>Pemberdayaan UMKM</strong>, dan <strong>Digitalisasi Sistem Informasi Desa</strong>.
          </motion.p>
        </section>

        {/* 1. Paragraf Deskripsi Tim & Tujuan Kegiatan */}
        <section className="rounded-3xl bg-cream-50/90 border-2 border-purple p-8 sm:p-12 shadow-purple-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple/10 border border-purple/20 text-xs font-bold text-purple uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Profil & Visi Pengabdian</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-purple tracking-tight leading-snug">
                Mengenal Tim MeRAMU HMTP UAD
              </h2>

              <p className="text-sm sm:text-base text-purple/85 leading-relaxed text-justify">
                <strong>Tim MeRAMU</strong> (<em>Media Ruang Aksi Mahasiswa untuk Umat</em>) merupakan inisiatif mahasiswa dari <strong>Himpunan Mahasiswa Teknik Pangan (HMTP) Universitas Ahmad Dahlan</strong>. Program pengabdian ini dibentuk sebagai bentuk perwujudan Catur Dharma Perguruan Tinggi dalam mendedikasikan keilmuan teknologi pangan dan rekayasa proses secara nyata di tengah masyarakat.
              </p>

              <p className="text-sm sm:text-base text-purple/85 leading-relaxed text-justify">
                Tujuan utama kegiatan di Padukuhan Kebonagung, Kalurahan Tridadi, Kapanewon Sleman adalah memperkuat kemandirian ekonomi keluarga melalui hilirisasi komoditas pertanian lokal yaitu talas pratama, standardisasi keamanan pangan bagi pelaku UMKM dusun, serta membangun fondasi keterbukaan informasi digital desa yang berkelanjutan.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-cream border border-purple/15 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-purple">Hilirisasi Hasil Tani</h4>
                    <p className="text-[11px] text-purple/75">Mengolah bahan mentah menjadi produk bernilai jual tinggi.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-cream border border-purple/15 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-purple">Transformasi Digital</h4>
                    <p className="text-[11px] text-purple/75">Penyediaan wadah informasi & etalase online padukuhan.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-3xl bg-purple text-cream shadow-purple-lg space-y-4">
                <div className="flex items-center gap-3 border-b border-cream/20 pb-3">
                  <Target className="w-6 h-6 text-cream" />
                  <div>
                    <h3 className="font-bold text-base text-cream">Tiga Pilar Utama Pengabdian</h3>
                    <p className="text-xs text-cream/75">Tahun Kegiatan 2026</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-3 rounded-xl bg-purple-800/80 border border-cream/10">
                    <span className="font-bold block text-cream">1. Rekayasa & Keamanan Pangan</span>
                    <span className="text-cream/80 text-xs">Penerapan GMP, diversifikasi olahan umbi, dan mutu gizi.</span>
                  </div>

                  <div className="p-3 rounded-xl bg-purple-800/80 border border-cream/10">
                    <span className="font-bold block text-cream">2. Branding & Desain Kemasan</span>
                    <span className="text-cream/80 text-xs">Kemasan estetik, pelabelan nutrisi, dan daya saing pasar.</span>
                  </div>

                  <div className="p-3 rounded-xl bg-purple-800/80 border border-cream/10">
                    <span className="font-bold block text-cream">3. Keterbukaan Informasi Desa</span>
                    <span className="text-cream/80 text-xs">Pengembangan portal web resmi Padukuhan Kebonagung.</span>
                  </div>
                </div>

                <div className="pt-2 text-center text-xs text-cream/85 font-semibold">
                  <span>Universitas Ahmad Dahlan • Yogyakarta</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 2. Deskripsi Rinci Program Kerja di Padukuhan Kebonagung */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple/10 border border-purple/20 text-xs font-bold text-purple uppercase tracking-wider">
              Program Kerja Unggulan
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-purple tracking-tight">
              Program Kegiatan di Padukuhan Kebonagung
            </h2>
            <p className="text-base text-purple/85">
              Rangkaian program terstruktur yang dilaksanakan oleh Tim MeRAMU HMTP UAD berkolaborasi dengan perangkat Kalurahan Tridadi, Dukuh, Kelompok Wanita Tani, Karang Taruna, dan warga Kebonagung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((prog, idx) => (
              <motion.div
                key={prog.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-8 rounded-3xl bg-cream-50 border-2 border-purple hover:bg-cream shadow-purple-sm hover:shadow-purple-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-purple text-cream flex items-center justify-center font-bold">
                      {prog.icon}
                    </div>
                    <span className="font-serif font-black text-2xl text-purple/40">
                      {prog.num}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold text-purple/70 uppercase tracking-wider block">
                      {prog.subtitle}
                    </span>
                    <h3 className="font-bold text-lg text-purple leading-snug mt-1">
                      {prog.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-purple/80 leading-relaxed text-justify">
                    {prog.desc}
                  </p>

                  <div className="pt-3 border-t border-purple/15 space-y-2">
                    <span className="text-[11px] font-bold text-purple uppercase tracking-wider block">
                      Luaran / Hasil Kegiatan:
                    </span>
                    {prog.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-purple/85">
                        <span className="text-purple font-bold mt-0.5">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. Grid Galeri Dokumentasi Bukti Foto Kegiatan Tim MeRAMU */}
        <section className="space-y-10 pt-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple/10 border border-purple/20 text-xs font-bold text-purple uppercase tracking-wider">
                Dokumentasi Bukti Nyata
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-purple tracking-tight">
                Galeri Foto Kegiatan Pengabdian Tim MeRAMU
              </h2>
              <p className="text-base text-purple/85">
                Kumpulan bukti foto pelaksanaan kegiatan, bimbingan teknis, workshop, dan interaksi hangat bersama masyarakat Kebonagung.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeFilter === cat
                      ? 'bg-purple text-cream shadow-purple-sm'
                      : 'bg-cream-50 border border-purple/20 text-purple hover:bg-purple/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo, idx) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                onClick={() => {
                  setSelectedPhoto(photo);
                  setCurrentImageIndex(0);
                }}
                className="group cursor-pointer rounded-3xl bg-cream-50 border-2 border-purple hover:border-purple shadow-purple-sm hover:shadow-purple-md transition-all overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Photo Visual Box */}
                  <div className={`h-52 ${photo.images && photo.images.length > 0 ? 'bg-purple-950' : `bg-gradient-to-br ${photo.colorScheme}`} p-4 flex flex-col justify-between relative overflow-hidden`}>
                    {photo.images && photo.images.length > 0 ? (
                      <>
                        <img
                          src={photo.images[0]}
                          alt={photo.title}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-purple-950/20 to-purple-950/40 pointer-events-none" />
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-dots-pattern opacity-40 group-hover:scale-105 transition-transform duration-300 pointer-events-none" />
                        <div className="my-auto text-center text-4xl group-hover:scale-110 transition-transform">
                          {photo.iconSymbol}
                        </div>
                      </>
                    )}

                    <div className="flex items-center justify-between z-10">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-cream text-purple border border-purple/20 shadow-sm">
                        {photo.category}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {photo.images && photo.images.length > 1 && (
                          <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-purple/90 text-cream backdrop-blur-sm border border-cream/20 shadow-sm">
                            <Camera className="w-3 h-3" />
                            <span>{photo.images.length} Foto</span>
                          </span>
                        )}
                        <span className="p-2 rounded-xl bg-purple text-cream opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all shadow-sm">
                          <Maximize2 className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-semibold text-purple/80 bg-cream/90 px-3 py-1 rounded-lg backdrop-blur-sm border border-purple/10 z-10">
                      <span>{photo.date}</span>
                      <span>{photo.location}</span>
                    </div>
                  </div>

                  {/* Photo Content */}
                  <div className="p-5 space-y-2">
                    <h3 className="font-bold text-base text-purple group-hover:text-purple-800 transition-colors leading-snug">
                      {photo.title}
                    </h3>
                    <p className="text-xs text-purple/80 leading-relaxed line-clamp-3 text-justify">
                      {photo.caption}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-purple/15 flex items-center justify-between text-xs font-bold text-purple">
                    <span>Lihat Dokumentasi</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </section>

        {/* Bottom CTA / Return Button */}
        <div className="pt-10 text-center border-t-2 border-purple/15 space-y-4">
          <h3 className="text-2xl font-extrabold text-purple">
            Terima Kasih atas Sinergi Warga Padukuhan Kebonagung
          </h3>
          <p className="text-sm text-purple/80 max-w-xl mx-auto">
            Semoga inisiatif teknologi pangan dan sistem informasi yang dibangun bersama Tim MeRAMU HMTP UAD 2026 senantiasa memberikan manfaat berkelanjutan.
          </p>
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl font-bold bg-purple text-cream hover:bg-purple-800 transition-all shadow-purple-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali Menjelajahi Beranda Padukuhan</span>
          </button>
        </div>

      </div>

      {/* Lightbox Modal for Photo Gallery */}
      <AnimatePresence>
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/85 backdrop-blur-sm"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-cream rounded-3xl border-2 border-purple shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Visual Box / Photo Preview */}
              <div className={`relative ${selectedPhoto.images && selectedPhoto.images.length > 0 ? 'h-72 sm:h-96 md:h-[420px] bg-purple-950' : `h-64 sm:h-80 bg-gradient-to-br ${selectedPhoto.colorScheme}`} p-4 sm:p-6 flex flex-col justify-between overflow-hidden shrink-0`}>
                {selectedPhoto.images && selectedPhoto.images.length > 0 ? (
                  <>
                    <img
                      src={selectedPhoto.images[currentImageIndex]}
                      alt={`${selectedPhoto.title} - Foto ${currentImageIndex + 1}`}
                      className="absolute inset-0 w-full h-full object-contain sm:object-cover bg-purple-950"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-purple-950/50 pointer-events-none" />

                    {/* Navigation Buttons for Multi-photo */}
                    {selectedPhoto.images.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex((prev) => (prev === 0 ? selectedPhoto.images!.length - 1 : prev - 1));
                          }}
                          aria-label="Foto Sebelumnya"
                          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-purple-900/80 hover:bg-purple text-cream shadow-lg transition-all hover:scale-110 border border-cream/20"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex((prev) => (prev === selectedPhoto.images!.length - 1 ? 0 : prev + 1));
                          }}
                          aria-label="Foto Selanjutnya"
                          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-purple-900/80 hover:bg-purple text-cream shadow-lg transition-all hover:scale-110 border border-cream/20"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>

                        {/* Dot indicator */}
                        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-purple-950/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-cream/20 shadow-md">
                          {selectedPhoto.images.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={(e) => {
                                e.stopPropagation();
                                setCurrentImageIndex(idx);
                              }}
                              aria-label={`Lihat Foto ${idx + 1}`}
                              className={`h-2 rounded-full transition-all ${
                                currentImageIndex === idx
                                  ? 'bg-cream w-6'
                                  : 'bg-cream/40 w-2 hover:bg-cream/70'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className="my-auto text-center text-6xl">
                    {selectedPhoto.iconSymbol}
                  </div>
                )}

                {/* Top header overlay inside modal visual box */}
                <div className="flex items-center justify-between z-10">
                  <div className="flex items-center gap-2">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-cream text-purple border border-purple shadow-sm">
                      {selectedPhoto.category}
                    </span>
                    {selectedPhoto.images && selectedPhoto.images.length > 1 && (
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-purple/90 text-cream backdrop-blur-sm border border-cream/20 shadow-sm">
                        {currentImageIndex + 1} / {selectedPhoto.images.length}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="p-2 rounded-xl bg-cream border border-purple text-purple hover:bg-purple hover:text-cream transition-colors shadow-sm"
                    aria-label="Tutup modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Bottom header overlay inside modal visual box */}
                <div className="flex items-center justify-between text-xs font-bold text-purple bg-cream/95 px-4 py-1.5 rounded-xl border border-purple/20 z-10 backdrop-blur-sm shadow-sm">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-purple" />
                    {selectedPhoto.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-purple" />
                    {selectedPhoto.location}
                  </span>
                </div>
              </div>

              {/* Thumbnails strip (if multi-photo) */}
              {selectedPhoto.images && selectedPhoto.images.length > 1 && (
                <div className="px-6 pt-3 pb-2 flex gap-3 overflow-x-auto bg-cream-50 border-b border-purple/10">
                  {selectedPhoto.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`relative rounded-xl overflow-hidden border-2 w-20 h-14 shrink-0 transition-all ${
                        currentImageIndex === idx
                          ? 'border-purple ring-2 ring-purple/30 scale-105 shadow-sm'
                          : 'border-purple/20 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                      <span className="absolute bottom-0.5 right-1 text-[9px] font-bold text-cream bg-purple/80 px-1 rounded">
                        Foto #{idx + 1}
                      </span>
                    </button>
                  ))}
                </div>
              )}

              {/* Details & Caption */}
              <div className="p-6 sm:p-8 space-y-3 bg-cream overflow-y-auto">
                <h3 className="font-extrabold text-xl text-purple">
                  {selectedPhoto.title}
                </h3>
                <p className="text-sm text-purple/85 leading-relaxed text-justify">
                  {selectedPhoto.caption}
                </p>
                
                <div className="pt-4 border-t border-purple/15 flex items-center justify-between">
                  <div className="text-xs text-purple/70">
                    {selectedPhoto.images && selectedPhoto.images.length > 0 && (
                      <span>Dokumentasi Resmi Kegiatan Tim MeRAMU UAD</span>
                    )}
                  </div>
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="px-6 py-2 rounded-xl font-bold bg-purple text-cream text-xs hover:bg-purple-800 transition-all shadow-purple-sm"
                  >
                    Tutup Tampilan
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
