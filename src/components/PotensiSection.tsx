import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Sparkles, MapPin, CheckCircle, ArrowUpRight } from 'lucide-react';

export const PotensiSection: React.FC = () => {
  const products = [
    {
      name: 'Beras & Hasil Tani Kebonagung',
      category: 'Hasil Pertanian',
      desc: 'Padi dan palawija segar langsung dari sawah petani lokal Kebonagung dengan metode tanam alami.',
      badge: 'Produk Segar',
    },
    {
      name: 'Olahan Makanan Tradisional',
      category: 'Kuliner UMKM',
      desc: 'Aneka camilan, keripik, getuk, dan panganan khas racikan ibu-ibu PKK padukuhan.',
      badge: 'Khas Dusun',
    },
    {
      name: 'Kerajinan Tangan & Anyaman',
      category: 'Kriya & Seni',
      desc: 'Kreativitas warga dalam mengolah bahan ramah lingkungan menjadi pernak-pernik bernilai seni.',
      badge: 'Handmade',
    },
  ];

  return (
    <section id="potensi" className="py-24 bg-cream-100/90 border-t border-purple/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple/10 border border-purple/20 text-xs font-bold text-purple uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Etalase Potensi</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-purple tracking-tight">
              Karya Warga & Potensi Unggulan
            </h2>
            <p className="text-base text-purple/80">
              Mendorong kemandirian ekonomi keluarga melalui promosi UMKM dan pemberdayaan produk lokal Kebonagung, Tridadi.
            </p>
          </div>

          <a
            href="#kontak"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple text-cream font-bold text-sm hover:bg-purple-800 transition-all shadow-sm shrink-0"
          >
            <span>Daftarkan UMKM Warga</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-cream border-2 border-purple/15 p-6 shadow-purple-sm hover:shadow-purple-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple/10 text-purple">
                    {item.category}
                  </span>
                  <span className="text-xs font-semibold text-purple/70">
                    {item.badge}
                  </span>
                </div>

                <div className="h-40 rounded-2xl bg-cream-50 border border-purple/10 flex flex-col items-center justify-center p-6 text-center mb-6 group-hover:bg-purple/5 transition-colors">
                  <ShoppingBag className="w-12 h-12 text-purple/70 mb-2" />
                  <span className="text-sm font-bold text-purple">{item.name}</span>
                </div>

                <h3 className="text-lg font-bold text-purple mb-2">
                  {item.name}
                </h3>
                <p className="text-xs text-purple/80 leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-purple/10 flex items-center justify-between text-xs text-purple font-semibold">
                <span className="flex items-center gap-1.5 text-purple/80">
                  <MapPin className="w-3.5 h-3.5 text-purple" /> Kebonagung, Tridadi
                </span>
                <span className="flex items-center gap-1 text-purple">
                  <CheckCircle className="w-3.5 h-3.5" /> Tersedia
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Banner Sinergi Tim MeRAMU HMTP UAD 2026 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl bg-purple text-cream p-8 sm:p-10 shadow-purple-lg flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="space-y-3 text-center md:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-cream text-purple font-extrabold text-xs tracking-wider uppercase">
              Program Inisiatif 2026
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-cream">
              Program Digitalisasi & Pemberdayaan Padukuhan Kebonagung
            </h3>
            <p className="text-sm sm:text-base text-cream/80 max-w-2xl">
              Kolaborasi strategis bersama Tim MeRAMU Himpunan Mahasiswa Teknik Pangan (HMTP) Universitas Ahmad Dahlan dalam memajukan sistem informasi desa dan potensi pangan lokal.
            </p>
          </div>

          <a
            href="#profil"
            className="px-6 py-3.5 rounded-xl font-bold bg-cream text-purple hover:bg-cream-100 active:scale-95 transition-all text-sm whitespace-nowrap shadow-md"
          >
            Lihat Rincian Program
          </a>
        </motion.div>

      </div>
    </section>
  );
};
