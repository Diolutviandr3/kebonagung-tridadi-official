import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  Target, 
  CheckCircle2, 
  ArrowLeft, 
  BookOpen, 
  X, 
  Maximize2,
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Camera,
  Search
} from 'lucide-react';
import { 
  docPhotos, 
  programs, 
  meramuCategories, 
  type MeramuDocPhoto 
} from '../data/meramuData';

interface MeramuPageProps {
  onBackToHome: () => void;
}

export const MeramuPage: React.FC<MeramuPageProps> = ({ onBackToHome }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<MeramuDocPhoto | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [activeFilter, setActiveFilter] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = meramuCategories;

  const filteredPhotos = useMemo(() => {
    return docPhotos.filter(photo => {
      const matchCategory = activeFilter === 'Semua' || photo.category === activeFilter;
      const query = searchQuery.toLowerCase().trim();
      const matchQuery = !query ||
        photo.title.toLowerCase().includes(query) ||
        photo.caption.toLowerCase().includes(query) ||
        photo.location.toLowerCase().includes(query) ||
        photo.date.toLowerCase().includes(query) ||
        photo.category.toLowerCase().includes(query);
      return matchCategory && matchQuery;
    });
  }, [activeFilter, searchQuery]);

  const handlePrevPhoto = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!selectedPhoto) return;
    if (selectedPhoto.images && selectedPhoto.images.length > 1) {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedPhoto.images!.length - 1 : prev - 1));
    } else {
      const currentAlbumIdx = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
      if (currentAlbumIdx > 0) {
        setSelectedPhoto(filteredPhotos[currentAlbumIdx - 1]);
        setCurrentImageIndex(0);
      } else {
        setSelectedPhoto(filteredPhotos[filteredPhotos.length - 1]);
        setCurrentImageIndex(0);
      }
    }
  };

  const handleNextPhoto = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!selectedPhoto) return;
    if (selectedPhoto.images && selectedPhoto.images.length > 1) {
      setCurrentImageIndex((prev) => (prev === selectedPhoto.images!.length - 1 ? 0 : prev + 1));
    } else {
      const currentAlbumIdx = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
      if (currentAlbumIdx < filteredPhotos.length - 1) {
        setSelectedPhoto(filteredPhotos[currentAlbumIdx + 1]);
        setCurrentImageIndex(0);
      } else {
        setSelectedPhoto(filteredPhotos[0]);
        setCurrentImageIndex(0);
      }
    }
  };

  // Keyboard navigation & body scroll lock for photo lightbox modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedPhoto) return;
      if (e.key === 'Escape') {
        setSelectedPhoto(null);
      } else if (e.key === 'ArrowLeft') {
        handlePrevPhoto();
      } else if (e.key === 'ArrowRight') {
        handleNextPhoto();
      }
    };

    if (selectedPhoto) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPhoto, filteredPhotos]);

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
          </div>

          {/* Search & Category Filter Controls */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 justify-between">
              {/* Search Input Box */}
              <div className="relative w-full sm:max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-purple/60" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari dokumentasi foto kegiatan..."
                  className="w-full pl-11 pr-10 py-3 rounded-2xl bg-cream-50 border-2 border-purple/20 focus:border-purple focus:ring-2 focus:ring-purple/20 text-purple placeholder:text-purple/40 text-sm font-medium transition-all outline-none"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full text-purple/60 hover:text-purple hover:bg-purple/10 transition-colors cursor-pointer"
                    aria-label="Hapus pencarian"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Result Count Badge */}
              <div className="text-xs font-bold text-purple/75 self-end sm:self-center bg-purple/10 px-3.5 py-2 rounded-xl border border-purple/15">
                Menampilkan <span className="text-purple font-extrabold">{filteredPhotos.length}</span> dari {docPhotos.length} Dokumentasi
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    activeFilter === cat
                      ? 'bg-purple text-cream shadow-purple-sm'
                      : 'bg-cream-50/80 border border-purple/20 text-purple hover:bg-purple/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Gallery Grid */}
          {filteredPhotos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPhotos.map((photo, idx) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04 }}
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
                            loading="lazy"
                            decoding="async"
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
          ) : (
            <div className="text-center py-16 px-4 rounded-3xl bg-cream-50 border-2 border-dashed border-purple/25 space-y-4">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-purple/10 flex items-center justify-center text-2xl">
                🔍
              </div>
              <div className="space-y-1 max-w-md mx-auto">
                <h3 className="font-bold text-base text-purple">Dokumentasi Tidak Ditemukan</h3>
                <p className="text-xs text-purple/75 leading-relaxed">
                  Tidak ada dokumentasi kegiatan yang sesuai dengan kata kunci "{searchQuery}". Silakan coba kata kunci lain atau reset filter.
                </p>
              </div>
              <button
                type="button"
                onClick={() => { setSearchQuery(''); setActiveFilter('Semua'); }}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-purple text-cream hover:bg-purple-800 transition-all shadow-sm cursor-pointer"
              >
                Reset Pencarian
              </button>
            </div>
          )}

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

      {/* Full-Screen Lightbox Modal for Photo Gallery */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-md text-cream select-none"
            onClick={() => setSelectedPhoto(null)}
          >
            {/* 1. Top Bar Header */}
            <div 
              className="px-4 sm:px-8 py-3.5 bg-purple-950/80 border-b border-cream/15 flex items-center justify-between z-30 shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple text-cream border border-cream/20 shadow-xs shrink-0">
                  {selectedPhoto.category}
                </span>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-extrabold text-cream truncate">
                    {selectedPhoto.title}
                  </h4>
                  <div className="flex items-center gap-3 text-[11px] text-cream/70">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-cream/80" />
                      {selectedPhoto.date}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1 truncate">
                      <MapPin className="w-3 h-3 text-cream/80" />
                      {selectedPhoto.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {selectedPhoto.images && selectedPhoto.images.length > 1 && (
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-cream/10 border border-cream/20 text-cream">
                    {currentImageIndex + 1} / {selectedPhoto.images.length}
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedPhoto(null)}
                  className="p-2.5 rounded-2xl bg-cream/10 hover:bg-cream text-cream hover:text-purple border border-cream/20 transition-all cursor-pointer"
                  aria-label="Tutup pratinjau foto"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* 2. Main Center Stage (Photo & Navigation Buttons) */}
            <div 
              className="flex-1 relative flex items-center justify-between px-2 sm:px-8 py-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              <button
                type="button"
                onClick={handlePrevPhoto}
                aria-label="Foto Sebelumnya"
                className="z-20 p-3 sm:px-4 sm:py-3.5 rounded-2xl bg-purple-950/85 hover:bg-purple text-cream border border-cream/25 shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer group"
              >
                <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
                <span className="hidden sm:inline text-xs font-bold">Sebelumnya</span>
              </button>

              {/* Center Active Photo */}
              <div className="flex-1 h-full flex flex-col items-center justify-center px-2 sm:px-6 relative">
                {selectedPhoto.images && selectedPhoto.images.length > 0 ? (
                  <motion.img
                    key={`${selectedPhoto.id}-${currentImageIndex}`}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.22 }}
                    src={selectedPhoto.images[currentImageIndex]}
                    alt={`${selectedPhoto.title} - Foto ${currentImageIndex + 1}`}
                    className="max-h-[60vh] sm:max-h-[68vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border border-cream/10 select-none"
                  />
                ) : (
                  <div className="text-6xl text-center py-12">
                    {selectedPhoto.iconSymbol}
                  </div>
                )}
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNextPhoto}
                aria-label="Foto Selanjutnya"
                className="z-20 p-3 sm:px-4 sm:py-3.5 rounded-2xl bg-purple-950/85 hover:bg-purple text-cream border border-cream/25 shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer group"
              >
                <span className="hidden sm:inline text-xs font-bold">Selanjutnya</span>
                <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* 3. Bottom Information & Thumbnails Bar */}
            <div 
              className="px-4 sm:px-8 py-4 bg-purple-950/90 border-t border-cream/15 z-30 shrink-0 space-y-3"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Caption text */}
              <div className="max-w-4xl mx-auto text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-2">
                <p className="text-xs sm:text-sm text-cream/90 leading-relaxed max-w-3xl line-clamp-2 sm:line-clamp-none">
                  {selectedPhoto.caption}
                </p>
              </div>

              {/* Thumbnails strip */}
              {selectedPhoto.images && selectedPhoto.images.length > 1 && (
                <div className="flex items-center justify-center gap-2 overflow-x-auto py-1 scrollbar-none max-w-2xl mx-auto">
                  {selectedPhoto.images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`relative rounded-xl overflow-hidden border-2 w-16 h-12 shrink-0 transition-all cursor-pointer ${
                        currentImageIndex === idx
                          ? 'border-cream ring-2 ring-cream/40 scale-105 shadow-md opacity-100'
                          : 'border-cream/20 opacity-50 hover:opacity-90'
                      }`}
                    >
                      <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
