import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Landmark, ChevronRight, GraduationCap } from 'lucide-react';

export type PageType = 'beranda' | 'umkm' | 'kegiatan' | 'lokasi' | 'profil' | 'meramu' | 'admin-umkm';

interface NavItem {
  id: PageType;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'umkm', label: 'Produk UMKM' },
  { id: 'kegiatan', label: 'Kegiatan' },
  { id: 'lokasi', label: 'Lokasi & Info' },
  { id: 'profil', label: 'Profil Wilayah' },
];

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId: PageType) => {
    // 1. Immediately close mobile menu drawer so screen is not blocked
    setMobileMenuOpen(false);
    // 2. Trigger multi-page navigation
    onNavigate(pageId);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-cream/95 backdrop-blur-md shadow-purple-sm py-3 border-b-2 border-purple/15'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Identity */}
          <button
            type="button"
            onClick={() => handleNavClick('beranda')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-purple/30 rounded-lg p-1 text-left cursor-pointer"
          >
            <motion.div
              whileHover={{ rotate: 5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-xl bg-purple text-cream border-2 border-purple flex items-center justify-center shadow-md shadow-purple/20 transition-all duration-300 group-hover:bg-purple-800"
            >
              <Landmark className="w-5 h-5 text-cream" />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight tracking-tight text-purple group-hover:text-purple-800 transition-colors">
                Padukuhan Kebonagung
              </span>
              <span className="text-xs font-semibold text-purple/75 tracking-wider uppercase">
                Tridadi, Sleman, D.I.Y
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-cream-muted/80 p-1.5 rounded-full border-2 border-purple/15 shadow-inner">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 text-xs lg:text-sm font-bold rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-cream'
                      : 'text-purple/80 hover:text-purple hover:bg-purple/10'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-purple rounded-full shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Special Button for Tim MeRAMU HMTP UAD 2026 (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                if (currentPage === 'meramu') {
                  handleNavClick('beranda');
                } else {
                  handleNavClick('meramu');
                }
              }}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-200 shadow-purple-sm hover:shadow-purple-md group border-2 cursor-pointer ${
                currentPage === 'meramu'
                  ? 'bg-cream text-purple border-purple hover:bg-purple/10'
                  : 'bg-purple text-cream border-purple hover:bg-purple-800 active:scale-95'
              }`}
            >
              <GraduationCap className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>
                {currentPage === 'meramu' ? 'Kembali ke Beranda' : 'Tim MeRAMU UAD 2026'}
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => {
                if (currentPage === 'meramu') {
                  handleNavClick('beranda');
                } else {
                  handleNavClick('meramu');
                }
              }}
              className="md:hidden p-2 rounded-xl bg-purple text-cream text-xs font-bold flex items-center gap-1 border-2 border-purple cursor-pointer active:scale-95 transition-transform"
              aria-label="Tim MeRAMU"
            >
              <GraduationCap className="w-4 h-4" />
              <span>{currentPage === 'meramu' ? 'Beranda' : 'MeRAMU'}</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-purple bg-cream border-2 border-purple hover:bg-purple/10 transition-colors focus:outline-none focus:ring-2 focus:ring-purple/30 cursor-pointer active:scale-95"
              aria-label={mobileMenuOpen ? 'Tutup Menu' : 'Buka Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="lg:hidden bg-cream border-b-2 border-purple/20 shadow-purple-md overflow-hidden relative z-50"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-3">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-bold transition-all text-left cursor-pointer active:scale-[0.98] ${
                      isActive
                        ? 'bg-purple text-cream shadow-sm'
                        : 'text-purple hover:bg-purple/10 active:bg-purple/15'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-cream' : 'text-purple/50'}`} />
                  </button>
                );
              })}

              <div className="pt-4 border-t-2 border-purple/15 space-y-2">
                <button
                  type="button"
                  onClick={() => handleNavClick('meramu')}
                  className={`flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl font-bold active:scale-[0.98] shadow-md transition-all text-center text-sm cursor-pointer ${
                    currentPage === 'meramu'
                      ? 'bg-cream text-purple border-2 border-purple'
                      : 'bg-purple text-cream hover:bg-purple-800'
                  }`}
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Halaman Khusus Tim MeRAMU UAD 2026</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
