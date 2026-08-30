import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Sparkles, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Camera, 
  Grid, 
  Layers, 
  Info,
  Search
} from 'lucide-react';
import { activities, type ActivityItem } from '../data/kegiatanData';

export const KegiatanSection: React.FC = () => {
  // State for modal dialog pop-up and active photo carousel
  const [selectedActivity, setSelectedActivity] = useState<ActivityItem | null>(null);
  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const categories = useMemo(() => {
    return ['Semua', ...Array.from(new Set(activities.map(a => a.category)))];
  }, []);

  const filteredActivities = useMemo(() => {
    return activities.filter(a => {
      const matchCat = selectedCategory === 'Semua' || a.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchQuery = !query ||
        a.title.toLowerCase().includes(query) ||
        a.description.toLowerCase().includes(query) ||
        a.location.toLowerCase().includes(query) ||
        a.schedule.toLowerCase().includes(query) ||
        a.organizer.toLowerCase().includes(query) ||
        a.category.toLowerCase().includes(query);
      return matchCat && matchQuery;
    });
  }, [searchQuery, selectedCategory]);

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
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
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

        {/* Search & Category Filter Bar */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 justify-between">
            {/* Search Input Box */}
            <div className="relative w-full sm:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-purple/60" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari kegiatan, lokasi, jadwal, atau topik..."
                className="w-full pl-11 pr-10 py-3 rounded-2xl bg-cream border-2 border-purple/20 focus:border-purple focus:ring-2 focus:ring-purple/20 text-purple placeholder:text-purple/40 text-sm font-medium transition-all outline-none"
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
              Menampilkan <span className="text-purple font-extrabold">{filteredActivities.length}</span> dari {activities.length} Kegiatan
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-purple text-cream shadow-sm'
                    : 'bg-cream text-purple/80 border border-purple/20 hover:border-purple/50 hover:bg-purple/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Clickable Activity Cards Grid */}
        {filteredActivities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities.map((activity, idx) => (
              <motion.div
                key={activity.id}
                onClick={() => openActivityModal(activity)}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.4 }}
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
                <div className={`h-40 ${activity.gallery[0]?.imageUrl ? 'bg-purple-950' : `bg-gradient-to-br ${activity.iconBg}`} border-b-2 border-purple/15 p-5 flex items-start justify-between relative overflow-hidden`}>
                  {activity.gallery[0]?.imageUrl ? (
                    <>
                      <img 
                        src={activity.gallery[0].imageUrl} 
                        alt={activity.title} 
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/90 via-purple-950/40 to-purple-950/60 pointer-events-none" />
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-dots-pattern opacity-30 pointer-events-none" />
                  )}

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
        ) : (
          <div className="text-center py-16 px-4 rounded-3xl bg-cream border-2 border-dashed border-purple/25 space-y-4">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-purple/10 flex items-center justify-center text-2xl">
              🔍
            </div>
            <div className="space-y-1 max-w-md mx-auto">
              <h3 className="font-bold text-base text-purple">Kegiatan Tidak Ditemukan</h3>
              <p className="text-xs text-purple/75 leading-relaxed">
                Tidak ada agenda kegiatan yang sesuai dengan kata kunci "{searchQuery}". Silakan coba kata kunci lain atau reset filter.
              </p>
            </div>
            <button
              type="button"
              onClick={() => { setSearchQuery(''); setSelectedCategory('Semua'); }}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-purple text-cream hover:bg-purple-800 transition-all shadow-sm cursor-pointer"
            >
              Reset Pencarian
            </button>
          </div>
        )}

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
                        <div className={`h-72 sm:h-96 md:h-[420px] w-full ${selectedActivity.gallery[activePhotoIdx].imageUrl ? 'bg-purple-950' : `bg-gradient-to-br ${selectedActivity.gallery[activePhotoIdx].colorScheme}`} p-6 flex flex-col justify-between relative overflow-hidden`}>
                          {selectedActivity.gallery[activePhotoIdx].imageUrl ? (
                            <>
                              <img
                                src={selectedActivity.gallery[activePhotoIdx].imageUrl}
                                alt={selectedActivity.gallery[activePhotoIdx].title}
                                className="absolute inset-0 w-full h-full object-contain sm:object-cover bg-purple-950"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/90 via-transparent to-purple-950/40 pointer-events-none" />
                            </>
                          ) : (
                            <>
                              <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />
                              <div className="relative z-10 my-auto text-center space-y-2">
                                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-cream border-2 border-purple shadow-purple-sm mx-auto flex items-center justify-center text-4xl sm:text-5xl">
                                  {selectedActivity.gallery[activePhotoIdx].iconSymbol}
                                </div>
                                <span className="text-xs font-extrabold text-purple uppercase tracking-wider block">
                                  Dokumentasi Resmi Padukuhan Kebonagung
                                </span>
                              </div>
                            </>
                          )}

                          {/* Top bar inside photo view */}
                          <div className="flex items-center justify-between z-10">
                            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-cream text-purple border-2 border-purple shadow-sm">
                              {selectedActivity.gallery[activePhotoIdx].tag}
                            </span>
                            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-purple text-cream shadow-sm">
                              Foto {activePhotoIdx + 1} dari {selectedActivity.gallery.length}
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
                            type="button"
                            onClick={prevPhoto}
                            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-2xl bg-cream/95 border-2 border-purple text-purple hover:bg-purple hover:text-cream flex items-center justify-center shadow-lg transition-all active:scale-95 cursor-pointer"
                            aria-label="Foto Sebelumnya"
                          >
                            <ChevronLeft className="w-6 h-6" />
                          </button>

                          {/* Right Navigation Arrow */}
                          <button
                            type="button"
                            onClick={nextPhoto}
                            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-2xl bg-cream/95 border-2 border-purple text-purple hover:bg-purple hover:text-cream flex items-center justify-center shadow-lg transition-all active:scale-95 cursor-pointer"
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
                            type="button"
                            onClick={() => setActivePhotoIdx(pIdx)}
                            className={`p-2.5 rounded-2xl text-left border-2 transition-all flex items-center gap-3 cursor-pointer ${
                              activePhotoIdx === pIdx
                                ? 'bg-purple text-cream border-purple shadow-purple-sm scale-[1.02]'
                                : 'bg-cream-50 text-purple border-purple/20 hover:border-purple/60'
                            }`}
                          >
                            {photo.imageUrl ? (
                              <img src={photo.imageUrl} alt={photo.title} className="w-12 h-12 rounded-xl object-cover shrink-0 border border-purple/20" />
                            ) : (
                              <span className="text-xl shrink-0">{photo.iconSymbol}</span>
                            )}
                            <div className="min-w-0 flex-1">
                              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md block w-fit mb-0.5 ${activePhotoIdx === pIdx ? 'bg-cream text-purple' : 'bg-purple/10 text-purple'}`}>
                                #{pIdx + 1}
                              </span>
                              <span className="text-[11px] font-bold line-clamp-1 leading-tight">
                                {photo.title}
                              </span>
                            </div>
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
                          <div className={`h-48 ${photo.imageUrl ? 'bg-purple-950' : `bg-gradient-to-br ${photo.colorScheme}`} p-4 flex flex-col justify-between relative overflow-hidden`}>
                            {photo.imageUrl ? (
                              <>
                                <img src={photo.imageUrl} alt={photo.title} className="absolute inset-0 w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-purple-950/40 pointer-events-none" />
                              </>
                            ) : (
                              <div className="my-auto text-center text-3xl">
                                {photo.iconSymbol}
                              </div>
                            )}

                            <div className="flex items-center justify-between z-10">
                              <span className="px-3 py-0.5 rounded-full text-[11px] font-bold bg-cream text-purple border border-purple/20 shadow-xs">
                                {photo.tag}
                              </span>
                              <span className="text-xs font-bold text-purple bg-cream/90 px-2 py-0.5 rounded-md shadow-xs">
                                Bukti #{pIdx + 1}
                              </span>
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
