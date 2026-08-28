import React from 'react';
import { motion } from 'framer-motion';
import { Wheat, Store, UsersRound, Landmark, ShieldAlert, HeartHandshake } from 'lucide-react';

interface FeatureCard {
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
}

export const Features: React.FC = () => {
  const features: FeatureCard[] = [
    {
      title: 'Pertanian & Ketahanan Pangan',
      category: 'Sektor Agraris',
      description: 'Lahan sawah dan kebun produktif yang dikelola oleh kelompok tani dengan pendekatan ramah lingkungan dan hasil panen berkualitas.',
      icon: <Wheat className="w-6 h-6" />,
    },
    {
      title: 'Pengembangan UMKM Warga',
      category: 'Ekonomi Kreatif',
      description: 'Dukungan terhadap produk olahan lokal, kerajinan rumahan, dan warung tradisional untuk meningkatkan kemandirian ekonomi keluarga.',
      icon: <Store className="w-6 h-6" />,
    },
    {
      title: 'Kegiatan Pemuda & Karang Taruna',
      category: 'Generasi Muda',
      description: 'Wadah kreativitas anak muda Kebonagung dalam bidang olahraga, kebudayaan, inovasi teknologi, dan kepedulian sosial.',
      icon: <UsersRound className="w-6 h-6" />,
    },
    {
      title: 'Pelestarian Budaya & Tradisi',
      category: 'Kearifan Lokal',
      description: 'Menjaga tradisi Jawa seperti Merti Dusun, kenduri, seni karawitan, dan kegiatan keagamaan yang mempererat tali silaturahmi.',
      icon: <Landmark className="w-6 h-6" />,
    },
    {
      title: 'Posyandu & Kesehatan Warga',
      category: 'Layanan Sosial',
      description: 'Pelayanan kesehatan berkala bagi balita dan lansia guna menjamin kesejahteraan dan kualitas hidup seluruh warga padukuhan.',
      icon: <HeartHandshake className="w-6 h-6" />,
    },
    {
      title: 'Keamanan Lingkungan (Siskamling)',
      category: 'Ketertiban Dusun',
      description: 'Sistem keamanan swadaya yang tertib dan pos ronda aktif untuk menjamin ketenangan hidup bermasyarakat sepanjang hari.',
      icon: <ShieldAlert className="w-6 h-6" />,
    },
  ];

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

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group p-8 rounded-3xl bg-cream-50/70 border-2 border-purple/15 hover:border-purple hover:shadow-purple-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-purple text-cream flex items-center justify-center shadow-md shadow-purple/15 group-hover:scale-110 group-hover:bg-purple-800 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-purple/60 px-3 py-1 rounded-full bg-purple/5 border border-purple/10">
                    {feature.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-purple mb-3 group-hover:text-purple-800 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm text-purple/80 leading-relaxed text-justify">
                  {feature.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-purple/10 flex items-center gap-2 text-xs font-bold text-purple group-hover:translate-x-1 transition-transform">
                <span>Pelajari lebih lanjut</span>
                <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
