import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, Sprout, Building2, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const highlights = [
    "Kawasan agraris dan permukiman yang seimbang serta ramah lingkungan",
    "Kegiatan kemasyarakatan aktif: KWT, Karang Taruna, dan PKK",
    "Potensi UMKM kuliner, kerajinan, dan produk olahan hasil tani",
    "Didukung kolaborasi program pemberdayaan Tim MeRAMU HMTP UAD 2026",
  ];

  return (
    <section id="profil" className="py-20 bg-cream-100/80 border-t border-b border-purple/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Info Cards */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 rounded-3xl bg-cream border-2 border-purple/15 shadow-purple-sm space-y-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-purple text-cream flex items-center justify-center font-bold">
                  <Sprout className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-2xl text-purple">Asri & Subur</h3>
                <p className="text-xs text-purple/75 leading-relaxed">
                  Lahan pertanian hijau yang menyangga ketahanan pangan lokal di Sleman.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 rounded-3xl bg-purple text-cream shadow-purple-md space-y-3 mt-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-cream text-purple flex items-center justify-center font-bold">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-2xl text-cream">Guyub Rukun</h3>
                <p className="text-xs text-cream/80 leading-relaxed">
                  Semangat gotong royong warga yang terjaga turun-temurun.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 rounded-3xl bg-purple text-cream shadow-purple-md space-y-3 -mt-2"
              >
                <div className="w-12 h-12 rounded-2xl bg-cream text-purple flex items-center justify-center font-bold">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-2xl text-cream">Inovatif</h3>
                <p className="text-xs text-cream/80 leading-relaxed">
                  Mendorong digitalisasi desa untuk kemudahan informasi dan promosi UMKM.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 rounded-3xl bg-cream border-2 border-purple/15 shadow-purple-sm space-y-3 mt-2"
              >
                <div className="w-12 h-12 rounded-2xl bg-purple text-cream flex items-center justify-center font-bold">
                  <span className="text-xl">🌿</span>
                </div>
                <h3 className="font-extrabold text-2xl text-purple">Harmonis</h3>
                <p className="text-xs text-purple/75 leading-relaxed">
                  Kenyamanan hidup bertetangga dengan kearifan adat istiadat Jawa.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Text Description */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple/10 border border-purple/20 text-xs font-bold text-purple uppercase tracking-wider">
              Profil Wilayah
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-purple tracking-tight leading-snug">
              Membangun Padukuhan yang Maju, Sejahtera, dan Berkelanjutan
            </h2>

            <p className="text-base text-purple/85 leading-relaxed">
              Padukuhan Kebonagung terletak di wilayah strategis Kalurahan Tridadi, Kapanewon Sleman, Daerah Istimewa Yogyakarta. Dengan lanskap pedesaan yang tenang dan posisi yang dekat dengan pusat pemerintahan kabupaten Sleman, Kebonagung memadukan kenyamanan hunian tradisional dengan kemudahan aksesibilitas modern.
            </p>

            <p className="text-base text-purple/85 leading-relaxed">
              Melalui program sinergi dan inisiatif digital bersama <strong>Tim MeRAMU HMTP Universitas Ahmad Dahlan 2026</strong>, Padukuhan Kebonagung terus bertransformasi mengoptimalkan seluruh potensi sosial, ekonomi, dan budaya masyarakat.
            </p>

            {/* Checklist Highlights */}
            <div className="pt-2 space-y-3">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-purple/90">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#keunggulan"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple text-cream font-bold text-sm hover:bg-purple-800 transition-all shadow-purple-sm hover:shadow-purple-md"
              >
                <span>Pelajari Keunggulan Kami</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
