import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar, type PageType } from './components/Navbar';
import { Hero } from './components/Hero';
import { UmkmSection } from './components/UmkmSection';
import { KegiatanSection } from './components/KegiatanSection';
import { LokasiInfoSection } from './components/LokasiInfoSection';
import { AboutSection } from './components/AboutSection';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { MeramuPage } from './components/MeramuPage';
import { AdminUmkmPage } from './components/AdminUmkmPage';
import { ScrollToTop } from './components/ScrollToTop';
import { PwaInstallPrompt } from './components/PwaInstallPrompt';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('beranda');

  // Synchronize initial page and hash changes for direct URL access & browser back/forward
  useEffect(() => {
    const validPages: PageType[] = ['beranda', 'umkm', 'kegiatan', 'lokasi', 'profil', 'meramu', 'admin-umkm'];

    const getPageFromHash = (): PageType => {
      const cleanHash = window.location.hash.replace(/^#\/?/, '') as PageType;
      return validPages.includes(cleanHash) ? cleanHash : 'beranda';
    };

    // Set initial page based on URL hash
    setCurrentPage(getPageFromHash());

    const handleHashChange = () => {
      const newPage = getPageFromHash();
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-cream text-purple font-sans flex flex-col selection:bg-purple selection:text-cream">
      {/* 1. Top Fixed Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
      />

      {/* 2. Main Body Content: Display ONLY the selected page */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="w-full"
          >
            {/* Halaman: Beranda (Hero Section) */}
            {currentPage === 'beranda' && (
              <Hero onNavigate={navigateTo} />
            )}

            {/* Halaman: Produk UMKM */}
            {currentPage === 'umkm' && (
              <UmkmSection onNavigate={navigateTo} />
            )}

            {/* Halaman: Kegiatan Padukuhan (dengan Modal / Pop-up Galeri Bukti Foto) */}
            {currentPage === 'kegiatan' && (
              <KegiatanSection />
            )}

            {/* Halaman: Lokasi & Info (Peta Google Maps Akurat & Kontak Media Sosial) */}
            {currentPage === 'lokasi' && (
              <LokasiInfoSection />
            )}

            {/* Halaman: Profil Wilayah Padukuhan Kebonagung */}
            {currentPage === 'profil' && (
              <>
                <AboutSection />
                <Features onNavigate={navigateTo} />
              </>
            )}

            {/* Halaman: Khusus Tim MeRAMU HMTP UAD 2026 */}
            {currentPage === 'meramu' && (
              <MeramuPage onBackToHome={() => navigateTo('beranda')} />
            )}

            {/* Halaman: Khusus Admin Pengurus UMKM (Login & CRUD Manajemen Produk) */}
            {currentPage === 'admin-umkm' && (
              <AdminUmkmPage onNavigate={navigateTo} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. Bottom Footer Section (Always at the bottom) */}
      <Footer onNavigate={navigateTo} />

      {/* 4. Floating Scroll to Top Button */}
      <ScrollToTop />

      {/* 5. PWA Install Prompt Banner for Mobile Devices */}
      <PwaInstallPrompt />
    </div>
  );
};

export default App;
