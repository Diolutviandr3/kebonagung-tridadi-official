import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Compass, ShieldCheck, MapPin, Users, TreePine, Award } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="beranda"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-cream bg-grid-pattern"
    >
      {/* Decorative ambient gradients with Cream & soft Purple tones */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-purple-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-cream-400/50 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top Pill / Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream-muted/90 border border-purple/20 shadow-sm text-xs md:text-sm font-semibold text-purple tracking-wide"
            >
              <Sparkles className="w-4 h-4 text-purple animate-pulse" />
              <span>Situs Resmi Informasi Padukuhan</span>
              <span className="w-1.5 h-1.5 rounded-full bg-purple/60" />
              <span className="text-purple/80">Tridadi, Sleman</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-purple leading-[1.15]"
            >
              Selamat Datang di{' '}
              <span className="relative inline-block font-serif italic text-purple underline decoration-purple/30 decoration-wavy underline-offset-8">
                Padukuhan Kebonagung
              </span>
            </motion.h1>

            {/* Subtitle / Short Village Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="text-base sm:text-lg md:text-xl text-purple/85 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal text-justify"
            >
              Padukuhan yang asri, rukun, dan berdaya saing di Kalurahan Tridadi, Kapanewon Sleman. 
              Menjunjung tinggi nilai gotong royong, kearifan lokal, serta memajukan potensi pertanian dan UMKM masyarakat menuju era digital yang berkelanjutan.
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <a
                href="#potensi"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold bg-purple text-cream hover:bg-purple-800 active:scale-[0.98] transition-all duration-200 shadow-purple-md hover:shadow-purple-lg group"
              >
                <span>Jelajahi Potensi Desa</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#profil"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-bold bg-cream-50/80 text-purple border-2 border-purple hover:bg-purple/10 active:scale-[0.98] transition-all duration-200 shadow-sm"
              >
                <Compass className="w-5 h-5 text-purple" />
                <span>Profil Padukuhan</span>
              </a>
            </motion.div>

            {/* Micro Highlights Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="pt-6 border-t border-purple/15 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm font-semibold text-purple/80"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-purple" />
                <span>Lingkungan Aman & Asri</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-purple" />
                <span>Masyarakat Guyub Rukun</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-purple" />
                <span>UMKM & Pertanian Aktif</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Visual Showcase & Quick Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Card */}
              <div className="relative rounded-3xl bg-cream-50/90 p-6 sm:p-8 border-2 border-purple/20 shadow-purple-lg backdrop-blur-sm space-y-6">
                
                <div className="flex items-center justify-between border-b border-purple/15 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple text-cream flex items-center justify-center font-bold">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="font-bold text-base text-purple">Informasi Wilayah</h2>
                      <p className="text-xs text-purple/75">Kalurahan Tridadi, Sleman</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple/10 text-purple border border-purple/20">
                    Aktif & Berdaya
                  </span>
                </div>

                {/* Village Quick Features List */}
                <div className="space-y-3.5">
                  <div className="p-3.5 rounded-2xl bg-cream border border-purple/10 flex items-start gap-3.5 transition-transform hover:-translate-y-0.5 shadow-sm">
                    <div className="p-2 rounded-xl bg-purple/10 text-purple mt-0.5">
                      <TreePine className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-purple">Lingkungan Hijau & Pertanian</h3>
                      <p className="text-xs text-purple/75 leading-relaxed mt-0.5 text-justify">
                        Kawasan pemukiman yang tertata dengan hamparan pertanian produktif dan ruang terbuka hijau yang terpelihara.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-cream border border-purple/10 flex items-start gap-3.5 transition-transform hover:-translate-y-0.5 shadow-sm">
                    <div className="p-2 rounded-xl bg-purple/10 text-purple mt-0.5">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-purple">Kerukunan & Kegiatan Warga</h3>
                      <p className="text-xs text-purple/75 leading-relaxed mt-0.5 text-justify">
                        Tradisi sambatan, posyandu rutin, kelompok pemuda, dan paguyuban seni yang aktif melestarikan kearifan lokal.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-cream border border-purple/10 flex items-start gap-3.5 transition-transform hover:-translate-y-0.5 shadow-sm">
                    <div className="p-2 rounded-xl bg-purple/10 text-purple mt-0.5">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-purple">Inisiatif Tim MeRAMU HMTP UAD</h3>
                      <p className="text-xs text-purple/75 leading-relaxed mt-0.5 text-justify">
                        Kolaborasi digitalisasi dan pengabdian masyarakat untuk memajukan perekonomian warga Kebonagung.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Quick Indicator */}
                <div className="pt-2 flex items-center justify-between text-xs text-purple/75">
                  <span>📍 Koordinat: Tridadi, Sleman</span>
                  <span className="font-semibold text-purple">D.I. Yogyakarta</span>
                </div>

              </div>

              {/* Decorative floating badge */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 sm:-right-6 bg-purple text-cream px-4 py-2.5 rounded-2xl shadow-purple-md border-2 border-cream flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-cream" />
                <span className="text-xs font-bold">Padukuhan Ramah & Asri</span>
              </motion.div>

              {/* Decorative floating bottom badge */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 sm:-left-6 bg-cream border-2 border-purple text-purple px-4 py-2 rounded-2xl shadow-purple-sm flex items-center gap-2"
              >
                <Users className="w-4 h-4 text-purple" />
                <span className="text-xs font-bold">Semangat MeRAMU 2026</span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
