import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Store, ShoppingBag, ArrowRight, Sparkles, ExternalLink, Tag, Search, X, Camera, MessageCircle } from 'lucide-react';
import { getStoredProducts, formatWhatsAppLink, type UmkmProduct } from '../data/umkmData';
import type { PageType } from './Navbar';

interface UmkmSectionProps {
  onNavigate?: (page: PageType) => void;
}

export const UmkmSection: React.FC<UmkmSectionProps> = ({ onNavigate }) => {
  const [productsList, setProductsList] = useState<UmkmProduct[]>(() => getStoredProducts());
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  useEffect(() => {
    const handleUpdate = () => {
      setProductsList(getStoredProducts());
    };
    window.addEventListener('umkm_updated', handleUpdate);
    return () => window.removeEventListener('umkm_updated', handleUpdate);
  }, []);

  const categories = useMemo(() => {
    const cats = ['Semua', ...Array.from(new Set(productsList.map(p => p.category)))];
    return cats;
  }, [productsList]);

  const filteredProducts = useMemo(() => {
    return productsList.filter(p => {
      const matchCategory = selectedCategory === 'Semua' || p.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchQuery = !query || 
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.seller.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.badge.toLowerCase().includes(query);
      return matchCategory && matchQuery;
    });
  }, [productsList, searchQuery, selectedCategory]);

  return (
    <section id="umkm" className="pt-28 sm:pt-32 pb-20 md:pb-28 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
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

        {/* Search & Category Filter Controls */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 justify-between">
            {/* Search Input Box */}
            <div className="relative w-full sm:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-purple/60" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari nama produk, penjual, kategori..."
                className="w-full pl-11 pr-10 py-3 rounded-2xl bg-cream-50/90 border-2 border-purple/20 focus:border-purple focus:ring-2 focus:ring-purple/20 text-purple placeholder:text-purple/40 text-sm font-medium transition-all outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full text-purple/60 hover:text-purple hover:bg-purple/10 transition-colors cursor-pointer"
                  aria-label="Hapus pencarian"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Result Count Badge */}
            <div className="text-xs font-bold text-purple/75 self-end sm:self-center bg-purple/10 px-3.5 py-2 rounded-xl border border-purple/15">
              Menampilkan <span className="text-purple font-extrabold">{filteredProducts.length}</span> dari {productsList.length} Produk
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-purple text-cream shadow-sm'
                    : 'bg-cream-50/80 text-purple/80 border border-purple/20 hover:border-purple/50 hover:bg-purple/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Grid of Product Cards - 2 Columns on Mobile, 3 Columns on Desktop */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group rounded-2xl sm:rounded-3xl bg-cream-50/90 border-2 border-purple/20 hover:border-purple shadow-purple-sm hover:shadow-purple-md transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Product Photo Container */}
                  <div className="relative h-32 sm:h-52 bg-purple-950/20 border-b-2 border-purple/15 overflow-hidden">
                    {product.imageUrl ? (
                      <>
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-purple-950/30 pointer-events-none" />
                      </>
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-purple-900/10 text-purple/40 space-y-1">
                        <Camera className="w-6 h-6 sm:w-8 sm:h-8" />
                        <span className="text-[10px] sm:text-[11px] font-bold">Foto Produk UMKM</span>
                      </div>
                    )}

                    {/* Category & Badge */}
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10">
                      <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-xs font-bold bg-cream text-purple border border-purple/20 shadow-xs backdrop-blur-sm">
                        {product.category}
                      </span>
                    </div>

                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10">
                      <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-xs font-bold bg-purple text-cream shadow-xs flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-cream" />
                        <span>{product.badge}</span>
                      </span>
                    </div>

                    {/* Seller label */}
                    <div className="absolute bottom-1.5 left-2 right-2 sm:bottom-2 sm:left-3 sm:right-3 flex items-center justify-between text-[9px] sm:text-[11px] font-semibold text-purple bg-cream/95 px-2 py-0.5 sm:px-3 sm:py-1 rounded-md sm:rounded-lg backdrop-blur-sm border border-purple/15 z-10">
                      <span className="truncate">Penjual: {product.seller}</span>
                      <span className="text-purple font-bold hidden sm:inline">Kebonagung</span>
                    </div>
                  </div>

                  {/* Product Information */}
                  <div className="p-3 sm:p-6 space-y-1.5 sm:space-y-3">
                    <div className="flex items-start justify-between gap-1 sm:gap-2">
                      <h3 className="font-bold text-xs sm:text-lg text-purple group-hover:text-purple-800 transition-colors leading-snug line-clamp-2">
                        {product.name}
                      </h3>
                    </div>

                    {/* Description - Desktop view */}
                    <p className="text-xs sm:text-sm text-purple/80 leading-relaxed line-clamp-2 text-justify hidden sm:block">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Card Footer with Price and Action Buttons */}
                <div className="px-3 pb-3 sm:px-6 sm:pb-6 pt-1 sm:pt-2">
                  <div className="pt-2.5 sm:pt-4 border-t border-purple/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3">
                    <div>
                      <span className="block text-[8px] sm:text-[10px] font-bold text-purple/60 uppercase tracking-wider">
                        Estimasi Harga
                      </span>
                      <span className="text-xs sm:text-base font-extrabold text-purple leading-tight block">
                        {product.price}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2 w-full sm:w-auto">
                      {/* Direct WhatsApp to Seller/Admin */}
                      <a
                        href={formatWhatsAppLink(product.whatsappNumber, product.name, product.price, product.seller)}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Pesan langsung via WhatsApp ke ${product.whatsappNumber ? product.seller : 'Pengurus Padukuhan'}`}
                        className="inline-flex items-center justify-center gap-1 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold bg-[#25D366] hover:bg-[#20ba5a] text-purple-950 active:scale-95 transition-all shadow-xs w-full sm:w-auto cursor-pointer"
                      >
                        <MessageCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-purple-950 fill-current shrink-0" />
                        <span>WhatsApp</span>
                      </a>

                      {/* Direct E-Commerce Link */}
                      {product.ecommerceUrl && (
                        <a
                          href={product.ecommerceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`Buka etalase produk di ${product.ecommercePlatform || 'Toko Online'}`}
                          className="inline-flex items-center justify-center gap-1 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold bg-purple text-cream hover:bg-purple-800 active:scale-95 transition-all shadow-xs w-full sm:w-auto cursor-pointer"
                        >
                          <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                          <span className="truncate max-w-[70px] sm:max-w-none">{product.ecommercePlatform || 'Toko'}</span>
                          <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-cream/70 shrink-0" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 rounded-3xl bg-cream-50/90 border-2 border-dashed border-purple/25 space-y-4">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-purple/10 flex items-center justify-center text-2xl">
              🔍
            </div>
            <div className="space-y-1 max-w-md mx-auto">
              <h3 className="font-bold text-base text-purple">Produk Tidak Ditemukan</h3>
              <p className="text-xs text-purple/75 leading-relaxed">
                Tidak ada produk UMKM yang sesuai dengan kata kunci "{searchQuery}". Silakan coba kata kunci lain atau reset filter.
              </p>
            </div>
            <button
              type="button"
              onClick={() => { setSearchQuery(''); setSelectedCategory('Semua'); }}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-purple text-cream hover:bg-purple-800 transition-all shadow-sm cursor-pointer"
            >
              Reset Pencarian
            </button>
          </div>
        )}

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
            onClick={() => onNavigate ? onNavigate('admin-umkm') : undefined}
            className="px-5 py-2.5 rounded-xl text-xs font-bold border-2 border-purple text-purple hover:bg-purple hover:text-cream transition-all shrink-0 cursor-pointer"
          >
            Daftar Sekarang (Admin Portal)
          </button>
        </div>

      </div>
    </section>
  );
};
