import React from 'react';
import { motion } from 'framer-motion';
import { Wheat, Store, UsersRound, Landmark, ShieldAlert, HeartHandshake } from 'lucide-react';
import type { PageType } from './Navbar';

interface FeatureCard {
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  targetPage: PageType;
  actionLabel: string;
}

interface FeaturesProps {
  onNavigate?: (page: PageType) => void;
}

export const Features: React.FC<FeaturesProps> = ({ onNavigate }) => {
  const features: FeatureCard[] = [
    {
      title: 'Pertanian & Ketahanan Pangan',
      category: 'Sektor Agraris',
      description: 'Lahan sawah subur dan budidaya talas produktif yang dikelola oleh kelompok tani dengan pendekatan ramah lingkungan dan hasil panen berkualitas.',
      icon: <Wheat className="w-6 h-6" />,
      targetPage: 'meramu',
      actionLabel: 'Lihat Inovasi Pangan',
    },
    {
      title: 'Pengembangan UMKM Warga',
      category: 'Ekonomi Kreatif',
      description: 'Dukungan terhadap produk olahan lokal, kerajinan rumahan, dan warung tradisional untuk meningkatkan kemandirian ekonomi keluarga.',
      icon: <Store className="w-6 h-6" />,
      targetPage: 'umkm',
      actionLabel: 'Buka Etalase UMKM',
    },
    {
      title: 'Kegiatan Pemuda & Karang Taruna',
      category: 'Generasi Muda',
      description: 'Wadah kreativitas anak muda Kebonagung dalam bidang olahraga, kebudayaan, inovasi teknologi, dan kepedulian sosial lingkungan.',
      icon: <UsersRound className="w-6 h-6" />,
      targetPage: 'kegiatan',
      actionLabel: 'Lihat Kegiatan Pemuda',
    },
    {
      title: 'Pelestarian Budaya & Tradisi',
      category: 'Kearifan Lokal',
      description: 'Menjaga tradisi Jawa seperti Merti Dusun, kenduri, seni karawitan, dan kegiatan keagamaan yang mempererat tali silaturahmi warga.',
      icon: <Landmark className="w-6 h-6" />,
      targetPage: 'kegiatan',
      actionLabel: 'Lihat Tradisi & Budaya',
    },
    {
      title: 'Posyandu & Kesehatan Warga',
      category: 'Layanan Sosial',
      description: 'Pelayanan kesehatan berkala bagi balita dan lansia guna menjamin kesejahteraan dan kualitas hidup seluruh warga padukuhan.',
      icon: <HeartHandshake className="w-6 h-6" />,
      targetPage: 'lokasi',
      actionLabel: 'Informasi & Layanan',
    },
    {
      title: 'Keamanan Lingkungan (Siskamling)',
      category: 'Ketertiban Dusun',
      description: 'Sistem keamanan swadaya yang tertib dan pos ronda aktif untuk menjamin ketenangan hidup bermasyarakat sepanjang hari.',
      icon: <ShieldAlert className="w-6 h-6" />,
      targetPage: 'lokasi',
      actionLabel: 'Kontak & Pos Keamanan',
    },
  ];

  const handleCardClick = (targetPage: PageType) => {
    if (onNavigate) {
      onNavigate(targetPage);
    } else {
      window.location.hash = targetPage;
    }
  };

  return (
    <section id="keunggulan" className="py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple/10 border border-purple/20 text-xs font-bold text-purple uppercase tracking-wider"
          >
            Keunggulan & Potensi
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-purple tracking-tight"
          >
            Pilar Utama Kemajuan Padukuhan
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-purple/80 leading-relaxed"
          >
            Berbagai potensi unggulan dan inisiatif aktif masyarakat Padukuhan Kebonagung untuk menciptakan lingkungan yang harmonis, sehat, dan produktif.
          </motion.p>
        </div>

        {/* Feature Cards Grid - 2 Columns on Mobile, 3 Columns on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => handleCardClick(feature.targetPage)}
              className="group p-3.5 sm:p-8 rounded-2xl sm:rounded-3xl bg-cream-50/70 border-2 border-purple/15 hover:border-purple hover:bg-cream hover:shadow-purple-md transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-6 gap-1.5">
                  <div className="w-9 h-9 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-purple text-cream flex items-center justify-center shadow-xs sm:shadow-md shadow-purple/15 group-hover:scale-110 group-hover:bg-purple-800 transition-all duration-300 [&>svg]:w-4.5 [&>svg]:h-4.5 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
                    {feature.icon}
                  </div>
                  <span className="text-[9px] sm:text-xs font-bold uppercase tracking-wider text-purple/60 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-purple/5 border border-purple/10 truncate max-w-[55%] sm:max-w-none">
                    {feature.category}
                  </span>
                </div>

                <h3 className="text-xs sm:text-xl font-bold text-purple mb-1.5 sm:mb-3 group-hover:text-purple-800 transition-colors leading-snug line-clamp-2">
                  {feature.title}
                </h3>

                <p className="text-[11px] sm:text-sm text-purple/80 leading-relaxed text-justify line-clamp-3 sm:line-clamp-none">
                  {feature.description}
                </p>
              </div>

              <div className="pt-2.5 sm:pt-6 mt-2.5 sm:mt-6 border-t border-purple/10 flex items-center justify-between text-[10px] sm:text-xs font-bold text-purple group-hover:text-purple-900">
                <span className="truncate">{feature.actionLabel}</span>
                <span className="group-hover:translate-x-1.5 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
