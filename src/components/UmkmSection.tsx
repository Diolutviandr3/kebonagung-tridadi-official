import React from 'react';
import { motion } from 'framer-motion';
import { Store, ShoppingBag, ArrowRight, Sparkles, ExternalLink, Tag } from 'lucide-react';
import { products } from '../data/umkmData';

interface UmkmSectionProps {
  onNavigate?: (page: 'beranda' | 'umkm' | 'kegiatan' | 'lokasi' | 'profil' | 'meramu') => void;
}

export const UmkmSection: React.FC<UmkmSectionProps> = ({ onNavigate }) => {
  return (
    <section id="umkm" className="pt-28 sm:pt-32 pb-20 md:pb-28 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple/10 border border-purple/20 text-xs font-bold text-purple uppercase tracking-wider"
            >
              <Store className="w-3.5 h-3.5 text-purple" />
              <span>Pemberdayaan Ekonomi Lokal</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple tracking-tight leading-tight"
            >
              Produk UMKM Masyarakat
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-purple/85 leading-relaxed text-justify"
            >
              Dukung produk lokal karya warga Padukuhan Kebonagung. Setiap pembelian berkontribusi langsung pada kemandirian ekonomi keluarga dan kemajuan padukuhan.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 shrink-0"
          >
            <button
              type="button"
              onClick={() => onNavigate ? onNavigate('lokasi') : undefined}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-purple text-cream font-bold text-sm hover:bg-purple-800 active:scale-95 transition-all shadow-purple-sm hover:shadow-purple-md group cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Hubungi Sentra UMKM</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>

        {/* Responsive Grid of Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group rounded-3xl bg-cream-50/90 border-2 border-purple/20 hover:border-purple shadow-purple-sm hover:shadow-purple-md transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Product Image Placeholder Box */}
                <div className={`relative h-48 bg-gradient-to-br ${product.imageBg} border-b-2 border-purple/15 flex flex-col items-center justify-center p-4 overflow-hidden group-hover:scale-[1.02] transition-transform duration-300`}>
                  {/* Subtle decorative pattern inside placeholder */}
                  <div className="absolute inset-0 bg-dots-pattern opacity-40" />
                  
                  {/* Category & Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-cream/90 text-purple border border-purple/20 shadow-sm backdrop-blur-sm">
                      {product.category}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple text-cream shadow-sm flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-cream" />
                      <span>{product.badge}</span>
                    </span>
                  </div>

                  {/* Placeholder Art / Icon */}
                  <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-2">
                    <div className="w-16 h-16 rounded-2xl bg-cream border-2 border-purple/20 shadow-sm flex items-center justify-center text-3xl group-hover:rotate-6 transition-transform">
                      {product.iconName}
                    </div>
                    <span className="text-xs font-bold text-purple/80 uppercase tracking-wider">
                      Foto Produk UMKM
                    </span>
                  </div>

                  {/* Seller label */}
                  <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] font-semibold text-purple/75 bg-cream/80 px-3 py-1 rounded-lg backdrop-blur-sm border border-purple/10">
                    <span className="truncate">Penjual: {product.seller}</span>
                    <span className="text-purple font-bold">Kebonagung</span>
                  </div>
                </div>

                {/* Product Information */}
                <div className="p-6 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-lg text-purple group-hover:text-purple-800 transition-colors leading-snug">
                      {product.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-purple/80 leading-relaxed line-clamp-3 text-justify">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer with Price and Action */}
              <div className="px-6 pb-6 pt-2">
                <div className="pt-4 border-t border-purple/15 flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] font-bold text-purple/60 uppercase tracking-wider">
                      Estimasi Harga
                    </span>
                    <span className="text-base font-extrabold text-purple">
                      {product.price}
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/6288216186389?text=${encodeURIComponent(`Halo Pengurus UMKM Kebonagung, saya tertarik ingin memesan / menanyakan produk: ${product.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-purple text-cream hover:bg-purple-800 active:scale-95 transition-all shadow-sm group-hover:shadow-md cursor-pointer"
                  >
                    <span>Pesan / Tanya</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom Notice / Collaboration info */}
        <div className="mt-12 p-6 rounded-2xl bg-cream-muted/70 border border-purple/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple text-cream flex items-center justify-center shrink-0">
              <Tag className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-purple">Warga Kebonagung Ingin Memasarkan Produk?</h4>
              <p className="text-xs text-purple/75">Daftarkan produk UMKM keluarga Anda melalui pengurus padukuhan atau tim pendamping MeRAMU UAD secara gratis.</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onNavigate ? onNavigate('lokasi') : undefined}
            className="px-5 py-2.5 rounded-xl text-xs font-bold border-2 border-purple text-purple hover:bg-purple hover:text-cream transition-all shrink-0 cursor-pointer"
          >
            Daftar Sekarang
          </button>
        </div>

      </div>
    </section>
  );
};
