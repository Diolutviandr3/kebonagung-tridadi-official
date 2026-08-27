import React from 'react';
import { Landmark, Heart, MapPin, Mail, Phone, ChevronRight, GraduationCap } from 'lucide-react';

interface FooterProps {
  onNavigateToMeramu?: () => void;
  onNavigateToLanding?: (sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateToMeramu,
  onNavigateToLanding,
}) => {
  return (
    <footer className="bg-cream-100/95 border-t-2 border-purple/20 text-purple pt-16 pb-12 relative overflow-hidden">
      
      {/* Decorative top ambient elements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b-2 border-purple/15">
          
          {/* Col 1: Identity & Description */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple text-cream border-2 border-purple flex items-center justify-center shadow-md">
                <Landmark className="w-5 h-5 text-cream" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-purple leading-tight">
                  Padukuhan Kebonagung
                </span>
                <span className="text-xs font-bold text-purple/75 uppercase tracking-wider">
                  Tridadi, Sleman, D.I. Yogyakarta
                </span>
              </div>
            </div>

            <p className="text-sm text-purple/85 leading-relaxed max-w-md">
              Padukuhan yang berbudaya, harmonis, dan berorientasi pada kemajuan bersama melalui pemanfaatan potensi lokal serta keterbukaan informasi digital.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-semibold text-purple/75">
              <span>Program Pengabdian:</span>
              <button
                onClick={onNavigateToMeramu}
                className="px-3.5 py-1.5 rounded-full bg-purple text-cream hover:bg-purple-800 font-bold shadow-sm inline-flex items-center gap-1.5 transition-all active:scale-95"
              >
                <GraduationCap className="w-3.5 h-3.5 text-cream" />
                <span>Tim MeRAMU HMTP UAD 2026</span>
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold text-purple uppercase tracking-wider">
              Tautan Navigasi
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigateToLanding ? onNavigateToLanding('beranda') : undefined}
                  className="inline-flex items-center gap-1.5 text-purple/80 hover:text-purple hover:translate-x-1 transition-all font-semibold"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-purple" />
                  <span>Beranda</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToLanding ? onNavigateToLanding('umkm') : undefined}
                  className="inline-flex items-center gap-1.5 text-purple/80 hover:text-purple hover:translate-x-1 transition-all font-semibold"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-purple" />
                  <span>Produk UMKM Masyarakat</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToLanding ? onNavigateToLanding('kegiatan') : undefined}
                  className="inline-flex items-center gap-1.5 text-purple/80 hover:text-purple hover:translate-x-1 transition-all font-semibold"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-purple" />
                  <span>Kegiatan Padukuhan</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToLanding ? onNavigateToLanding('lokasi') : undefined}
                  className="inline-flex items-center gap-1.5 text-purple/80 hover:text-purple hover:translate-x-1 transition-all font-semibold"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-purple" />
                  <span>Lokasi dan Informasi</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onNavigateToMeramu}
                  className="inline-flex items-center gap-1.5 text-purple font-bold hover:translate-x-1 transition-all"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-purple" />
                  <span>Halaman Khusus Tim MeRAMU UAD</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Village Location & Info */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-sm font-bold text-purple uppercase tracking-wider">
              Pusat Informasi Padukuhan
            </h3>
            <div className="space-y-3 text-sm text-purple/85">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-purple shrink-0 mt-1" />
                <span className="text-xs leading-relaxed font-medium">
                  Balai Pertemuan Padukuhan Kebonagung, Kalurahan Tridadi, Kapanewon Sleman, Kab. Sleman, D.I. Yogyakarta 55511
                </span>
              </div>
              <div className="flex items-center gap-2.5 font-medium">
                <Phone className="w-4 h-4 text-purple shrink-0" />
                <span className="text-xs">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center gap-2.5 font-medium">
                <Mail className="w-4 h-4 text-purple shrink-0" />
                <span className="text-xs">kebonagung.tridadi@gmail.com</span>
              </div>
            </div>

            {/* Social Media Links in Footer */}
            <div className="pt-2">
              <span className="block text-xs font-bold text-purple/75 uppercase tracking-wider mb-2.5">
                Media Sosial Resmi
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.tiktok.com/@ktkebonagung?_r=1&_t=ZS-999Sf0NWSnM"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok Karang Taruna Kebonagung"
                  className="w-8 h-8 rounded-lg bg-cream border-2 border-purple text-purple hover:bg-purple hover:text-cream flex items-center justify-center transition-all shadow-xs"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.86-4.47V8.62a8.28 8.28 0 0 0 4.91 1.6V6.77a4.88 4.88 0 0 1-1-.08z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com/@rismmaalmaauun?si=VeKOG18wIFDmNFMH"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube RISMA Masjid Al-Ma'un"
                  className="w-8 h-8 rounded-lg bg-cream border-2 border-purple text-purple hover:bg-purple hover:text-cream flex items-center justify-center transition-all shadow-xs"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/rismma.almaauun?igsi=ejVzeWV1am1rZ2Uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram RISMA Masjid Al-Ma'un"
                  className="w-8 h-8 rounded-lg bg-cream border-2 border-purple text-purple hover:bg-purple hover:text-cream flex items-center justify-center transition-all shadow-xs"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/6281234567890?text=Halo%20Pengurus%20Padukuhan%20Kebonagung,%20saya%20ingin%20bertanya%20mengenai..."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Layanan Warga Kebonagung"
                  className="w-8 h-8 rounded-lg bg-cream border-2 border-purple text-purple hover:bg-purple hover:text-cream flex items-center justify-center transition-all shadow-xs"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-sm font-bold text-purple tracking-wide">
            Copyright © Tim MeRAMU HMTP Universitas Ahmad Dahlan 2026
          </p>

          <div className="flex items-center gap-2 text-xs font-semibold text-purple/80">
            <span>Didedikasikan dengan</span>
            <Heart className="w-3.5 h-3.5 text-purple fill-purple inline" />
            <span>untuk kemajuan Padukuhan Kebonagung</span>
          </div>
        </div>

      </div>

    </footer>
  );
};
