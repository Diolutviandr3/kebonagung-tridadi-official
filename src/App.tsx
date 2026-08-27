import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { UmkmSection } from './components/UmkmSection';
import { KegiatanSection } from './components/KegiatanSection';
import { LokasiInfoSection } from './components/LokasiInfoSection';
import { AboutSection } from './components/AboutSection';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { MeramuPage } from './components/MeramuPage';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'meramu'>('landing');

  // Listen to hash changes for direct URL access (e.g. #meramu)
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#meramu') {
        setCurrentView('meramu');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (currentView === 'meramu' && window.location.hash !== '#meramu') {
        setCurrentView('landing');
      }
    };

    if (window.location.hash === '#meramu') {
      setCurrentView('meramu');
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentView]);

  const navigateToMeramu = () => {
    setCurrentView('meramu');
    window.location.hash = 'meramu';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToLanding = (sectionId?: string) => {
    setCurrentView('landing');
    if (sectionId) {
      window.location.hash = sectionId;
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-cream text-purple font-sans flex flex-col selection:bg-purple selection:text-cream">
      {/* Top Fixed / Sticky Navigation Bar */}
      <Navbar
        currentView={currentView}
        onNavigateToMeramu={navigateToMeramu}
        onNavigateToLanding={navigateToLanding}
      />

      {/* View Switcher: Landing Page vs Dedicated Tim MeRAMU Page */}
      {currentView === 'landing' ? (
        <main className="flex-grow">
          {/* 1. Hero Section */}
          <Hero />

          {/* 2. Seksi Produk UMKM Masyarakat */}
          <UmkmSection />

          {/* 3. Seksi Kegiatan Padukuhan */}
          <KegiatanSection />

          {/* 4. Seksi Lokasi dan Informasi (Google Maps Embed & Social Media Links) */}
          <LokasiInfoSection />

          {/* 5. Seksi Profil Wilayah Padukuhan Kebonagung */}
          <AboutSection />

          {/* 6. Seksi Pilar Keunggulan & Potensi */}
          <Features />
        </main>
      ) : (
        <main className="flex-grow">
          {/* Dedicated Full Page for Tim MeRAMU HMTP UAD 2026 */}
          <MeramuPage onBackToHome={() => navigateToLanding('beranda')} />
        </main>
      )}

      {/* Bottom Footer Section */}
      <Footer onNavigateToMeramu={navigateToMeramu} onNavigateToLanding={navigateToLanding} />
    </div>
  );
};

export default App;
