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
  Heart
} from 'lucide-react';

interface MeramuDocPhoto {
  id: string;
  title: string;
  category: 'Pelatihan' | 'Digitalisasi' | 'Kemitraan' | 'Sosial';
  date: string;
  location: string;
  caption: string;
  colorScheme: string;
  iconSymbol: string;
}

const docPhotos: MeramuDocPhoto[] = [
  {
    id: 'meramu-1',
    title: 'Survei Awal & Pemetaan Potensi Pertanian Dusun',
    category: 'Kemitraan',
    date: 'Januari 2026',
    location: 'Lahan Pertanian Kebonagung',
    caption: 'Tim MeRAMU HMTP UAD melakukan observasi komoditas pangan utama dan diskusi bersama ketua kelompok tani Kebonagung.',
    colorScheme: 'from-purple-200 via-cream-200 to-purple-100',
    iconSymbol: '🌾',
  },
  {
    id: 'meramu-2',
    title: 'Focus Group Discussion (FGD) bersama Perangkat Dukuh & RT/RW',
    category: 'Kemitraan',
    date: 'Februari 2026',
    location: 'Balai Padukuhan Kebonagung',
    caption: 'Penyusunan rencana kerja program pengabdian serta penyerapan aspirasi kebutuhan warga Padukuhan Kebonagung.',
    colorScheme: 'from-cream-200 via-purple-100 to-cream-300',
    iconSymbol: '🗣️',
  },
  {
    id: 'meramu-3',
    title: 'Pelatihan Diversifikasi Produk Olahan Singkong & Umbi',
    category: 'Pelatihan',
    date: 'Februari 2026',
    location: 'Dapur Komunal Kebonagung',
    caption: 'Praktik langsung pengolahan tepung mocaf dan inovasi camilan sehat bernilai jual tinggi bersama ibu-ibu PKK.',
    colorScheme: 'from-purple-100 via-cream-100 to-purple-200',
    iconSymbol: '🥣',
  },
  {
    id: 'meramu-4',
    title: 'Workshop Higiene, Sanitasi & Standar GMP Pangan Olahan',
    category: 'Pelatihan',
    date: 'Maret 2026',
    location: 'Aula Balai Dusun',
    caption: 'Edukasi keamanan pangan, pencegahan kontaminasi silang, dan standar kebersihan bagi para pelaku UMKM kuliner dusun.',
    colorScheme: 'from-cream-300 via-purple-200 to-cream-200',
    iconSymbol: '🧼',
  },
  {
    id: 'meramu-5',
    title: 'Pendampingan Redesain Kemasan & Label Nutrisi UMKM',
    category: 'Pelatihan',
    date: 'Maret 2026',
    location: 'Sekretariat Tim MeRAMU',
    caption: 'Pembuatan label identitas merek modern, pencantuman tanggal kedaluwarsa, dan teknik pengemasan kedap udara (vacuum seal).',
    colorScheme: 'from-purple-200 via-cream-100 to-purple-100',
    iconSymbol: '📦',
  },
  {
    id: 'meramu-6',
    title: 'Pengembangan & Uji Coba Website Resmi Padukuhan Kebonagung',
    category: 'Digitalisasi',
    date: 'April 2026',
    location: 'Lab Komputasi & Dusun',
    caption: 'Perancangan kerangka web responsif menggunakan React & Tailwind CSS untuk mempublikasikan profil dan produk UMKM dusun.',
    colorScheme: 'from-cream-200 via-purple-200 to-cream-100',
    iconSymbol: '💻',
  },
  {
    id: 'meramu-7',
    title: 'Pelatihan Pengelolaan Konten Digital untuk Pemuda Karang Taruna',
    category: 'Digitalisasi',
    date: 'April 2026',
    location: 'Balai Pertemuan Kebonagung',
    caption: 'Bimbingan teknis pengelolaan informasi web, foto dokumentasi, dan promosi media sosial kepada generasi muda padukuhan.',
    colorScheme: 'from-purple-100 via-cream-300 to-purple-200',
    iconSymbol: '📱',
  },
  {
    id: 'meramu-8',
    title: 'Edukasi Gizi Balita & Pemberian Makanan Tambahan (PMT)',
    category: 'Sosial',
    date: 'Mei 2026',
    location: 'Posyandu Cempaka Kebonagung',
    caption: 'Penyuluhan gizi seimbang untuk pencegahan stunting serta pembagian formula makanan pendamping ASI kaya protein nabati.',
    colorScheme: 'from-cream-100 via-purple-100 to-cream-300',
    iconSymbol: '👶',
  },
  {
    id: 'meramu-9',
    title: 'Serah Terima Platform Digital & Penutupan Program Pengabdian',
    category: 'Kemitraan',
    date: 'Juni 2026',
    location: 'Balai Padukuhan Kebonagung',
    caption: 'Penyerahan plakat penghargaan, dokumen sistem informasi padukuhan, dan foto bersama Kepala Dukuh serta seluruh perwakilan warga.',
    colorScheme: 'from-purple-200 via-cream-200 to-purple-100',
    iconSymbol: '🎓',
  },
];

interface MeramuPageProps {
  onBackToHome: () => void;
}

export const MeramuPage: React.FC<MeramuPageProps> = ({ onBackToHome }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<MeramuDocPhoto | null>(null);
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
        'Buku panduan dan pelatihan pengelolaan website bagi pemuda dusun',
      ],
      icon: <Cpu className="w-6 h-6 text-purple" />,
    },
    {
      num: '02',
      title: 'Diversifikasi & Inovasi Teknologi Pengolahan Pangan Lokal',
      subtitle: 'Meningkatkan Nilai Tambah Komoditas Hasil Panen',
      desc: 'Penerapan ilmu teknologi pangan dalam mengolah singkong dan bahan pangan lokal menjadi tepung mocaf berkualitas serta aneka olahan kudapan sehat berdaya simpan lebih lama.',
      deliverables: [
        'Formulasi resep olahan pangan bernilai ekonomi tinggi',
        'Praktik pembuatan tepung mocaf bebas gluten untuk kelompok wanita tani',
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
        'Modul panduan sanitasi pengolahan pangan skala rumah tangga',
        'Checklist audit kebersihan dapur produksi UMKM binaan',
        'Sosialisasi sertifikasi pangan aman dan izin edar produk',
      ],
      icon: <Award className="w-6 h-6 text-purple" />,
    },
    {
      num: '04',
      title: 'Pendampingan Desain Kemasan & Identitas Merek (Branding)',
      subtitle: 'Meningkatkan Daya Saing Pasar Produk Warga',
      desc: 'Pelatihan pembuatan identitas visual produk, label kemasan informatif sesuai regulasi (komposisi, tanggal kedaluwarsa, nilai gizi), serta pemilihan bahan kemasan tahan udara.',
      deliverables: [
        'Desain label kemasan modern untuk 6+ produk UMKM Padukuhan Kebonagung',
        'Penggunaan teknik sealing kemasan yang menjaga kerenyahan makanan',
        'Bantuan mini-studio foto produk untuk pemasaran digital',
      ],
      icon: <Layers className="w-6 h-6 text-purple" />,
    },
    {
      num: '05',
      title: 'Edukasi Gizi Masyarakat & Pendampingan Posyandu',
      subtitle: 'Pemberdayaan Kesehatan Keluarga & Generasi Emas',
      desc: 'Sinergi bersama kader Posyandu Cempaka dalam mengedukasi ibu hamil dan balita mengenai pemenuhan gizi seimbang lokal guna mendukung pencegahan stunting.',
      deliverables: [
        'Resep Pemberian Makanan Tambahan (PMT) bernutrisi tinggi dan terjangkau',
        'Leaflet edukasi pedoman isi piringku untuk keluarga',
        'Partisipasi aktif dalam kegiatan penimbangan balita dan lansia',
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
            className="text-base sm:text-lg md:text-xl text-purple/85 leading-relaxed"
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

              <p className="text-sm sm:text-base text-purple/85 leading-relaxed">
                <strong>Tim MeRAMU</strong> (<em>Mengabdi, Merangkul, dan Memberdayakan Bersama Masyarakat</em>) merupakan inisiatif mahasiswa dari <strong>Himpunan Mahasiswa Teknik Pangan (HMTP) Universitas Ahmad Dahlan</strong>. Program pengabdian ini dibentuk sebagai bentuk perwujudan Catur Dharma Perguruan Tinggi dalam mendedikasikan keilmuan teknologi pangan dan rekayasa proses secara nyata di tengah masyarakat.
              </p>

              <p className="text-sm sm:text-base text-purple/85 leading-relaxed">
                Tujuan utama kegiatan di Padukuhan Kebonagung, Kalurahan Tridadi, Kapanewon Sleman adalah memperkuat kemandirian ekonomi keluarga melalui hilirisasi komoditas pertanian lokal, standardisasi keamanan pangan bagi pelaku UMKM dusun, serta membangun fondasi keterbukaan informasi digital desa yang berkelanjutan.
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
                    <span className="text-cream/80 text-xs">Penerapan GMP, diversifikasi olahan singkong, dan mutu gizi.</span>
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
              Rangkaian program terstruktur yang dilaksanakan oleh Tim MeRAMU HMTP UAD berkolaborasi dengan perangkat dukuh, PKK, kelompok tani, dan pemuda warga Kebonagung.
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

                  <p className="text-xs sm:text-sm text-purple/80 leading-relaxed">
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
                onClick={() => setSelectedPhoto(photo)}
                className="group cursor-pointer rounded-3xl bg-cream-50 border-2 border-purple hover:border-purple shadow-purple-sm hover:shadow-purple-md transition-all overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Photo Visual Box */}
                  <div className={`h-52 bg-gradient-to-br ${photo.colorScheme} p-4 flex flex-col justify-between relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-dots-pattern opacity-40 group-hover:scale-105 transition-transform duration-300 pointer-events-none" />

                    <div className="flex items-center justify-between z-10">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-cream text-purple border border-purple/20 shadow-sm">
                        {photo.category}
                      </span>
                      <span className="p-2 rounded-xl bg-purple text-cream opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all shadow-sm">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    <div className="my-auto text-center text-4xl group-hover:scale-110 transition-transform">
                      {photo.iconSymbol}
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-semibold text-purple/80 bg-cream/85 px-3 py-1 rounded-lg backdrop-blur-sm border border-purple/10 z-10">
                      <span>{photo.date}</span>
                      <span>{photo.location}</span>
                    </div>
                  </div>

                  {/* Photo Content */}
                  <div className="p-5 space-y-2">
                    <h3 className="font-bold text-base text-purple group-hover:text-purple-800 transition-colors leading-snug">
                      {photo.title}
                    </h3>
                    <p className="text-xs text-purple/80 leading-relaxed line-clamp-3">
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/80 backdrop-blur-sm"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-cream rounded-3xl border-2 border-purple shadow-2xl overflow-hidden"
            >
              <div className={`h-64 sm:h-80 bg-gradient-to-br ${selectedPhoto.colorScheme} p-6 flex flex-col justify-between relative`}>
                <div className="flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-cream text-purple border border-purple">
                    {selectedPhoto.category}
                  </span>
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="p-2 rounded-xl bg-cream border border-purple text-purple hover:bg-purple hover:text-cream transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="my-auto text-center text-6xl">
                  {selectedPhoto.iconSymbol}
                </div>

                <div className="flex items-center justify-between text-xs font-bold text-purple bg-cream/90 px-4 py-1.5 rounded-xl border border-purple/20">
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

              <div className="p-6 sm:p-8 space-y-3 bg-cream">
                <h3 className="font-extrabold text-xl text-purple">
                  {selectedPhoto.title}
                </h3>
                <p className="text-sm text-purple/85 leading-relaxed">
                  {selectedPhoto.caption}
                </p>
                
                <div className="pt-4 border-t border-purple/15 flex justify-end">
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="px-6 py-2 rounded-xl font-bold bg-purple text-cream text-xs hover:bg-purple-800 transition-all"
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
