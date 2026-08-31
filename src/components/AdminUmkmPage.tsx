import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Store, 
  Lock, 
  User, 
  Eye, 
  EyeOff, 
  ArrowLeft, 
  Plus, 
  Edit3, 
  Trash2, 
  Check, 
  Sparkles, 
  ExternalLink, 
  Search, 
  X, 
  AlertCircle,
  ShieldCheck,
  LogOut,
  ShoppingBag,
  Camera,
  Upload,
  Link as LinkIcon,
  MessageCircle
} from 'lucide-react';
import { 
  type UmkmProduct, 
  getStoredProducts, 
  fetchProductsFromSupabase,
  addStoredProduct, 
  updateStoredProduct, 
  deleteStoredProduct 
} from '../data/umkmData';
import type { PageType } from './Navbar';

interface AdminUmkmPageProps {
  onNavigate: (page: PageType) => void;
}

const BADGE_PRESETS = [
  'Produk Unggulan',
  'Paling Laris',
  'Khas Dusun',
  'Handmade',
  'Sehat Alami',
  'Segar Tiap Hari',
  'Inovasi 2026',
  'Olahan KWT',
];

const CATEGORY_PRESETS = [
  'Hasil Tani',
  'Olahan Makanan',
  'Kuliner Tradisional',
  'Kerajinan Tangan',
  'Minuman Herbal',
  'Kudapan',
];

const PHOTO_PRESETS = [
  { label: 'Beras Organik', url: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80' },
  { label: 'Keripik / Olahan', url: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=600&q=80' },
  { label: 'Sambal & Masakan', url: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80' },
  { label: 'Anyaman & Kerajinan', url: 'https://images.unsplash.com/photo-1615865417491-9941019fbc00?auto=format&fit=crop&w=600&q=80' },
  { label: 'Wedang & Herbal', url: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80' },
  { label: 'Jajan Pasar & Kue', url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80' },
];

const PLATFORM_PRESETS = [
  'Shopee',
  'Tokopedia',
  'TikTok Shop',
  'GoFood',
  'GrabFood',
  'Toko Online',
  'Lainnya',
];

export const AdminUmkmPage: React.FC<AdminUmkmPageProps> = ({ onNavigate }) => {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('kebonagung_admin_auth') === 'true';
  });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Dashboard State
  const [productsList, setProductsList] = useState<UmkmProduct[]>([]);
  const [activeTab, setActiveTab] = useState<'create' | 'list'>('create');
  const [adminSearch, setAdminSearch] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Form State (New Product)
  const [formName, setFormName] = useState('');
  const [formCategory, setFormCategory] = useState(CATEGORY_PRESETS[0]);
  const [formCustomCategory, setFormCustomCategory] = useState('');
  const [formPrice, setFormPrice] = useState('');
  const [formSeller, setFormSeller] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [formBadge, setFormBadge] = useState(BADGE_PRESETS[0]);
  const [formCustomBadge, setFormCustomBadge] = useState('');
  const [formImageUrl, setFormImageUrl] = useState(PHOTO_PRESETS[0].url);
  const [photoInputMode, setPhotoInputMode] = useState<'upload' | 'url' | 'presets'>('upload');
  const [formWhatsapp, setFormWhatsapp] = useState('');
  const [formEcommerceUrl, setFormEcommerceUrl] = useState('');
  const [formEcommercePlatform, setFormEcommercePlatform] = useState('');

  // Edit Modal State
  const [editingProduct, setEditingProduct] = useState<UmkmProduct | null>(null);

  // Delete Confirmation State
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // Load products
  const reloadProducts = () => {
    setProductsList(getStoredProducts());
  };

  useEffect(() => {
    reloadProducts();
    fetchProductsFromSupabase().then(data => {
      if (data && data.length > 0) {
        setProductsList(data);
      }
    });
    const handleUpdate = () => reloadProducts();
    window.addEventListener('umkm_updated', handleUpdate);
    return () => window.removeEventListener('umkm_updated', handleUpdate);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Helper to handle client-side photo compression
  const processImageFile = (file: File, callback: (dataUrl: string) => void) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const maxDimension = 800;
        let width = img.width;
        let height = img.height;
        if (width > height) {
          if (width > maxDimension) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          }
        } else {
          if (height > maxDimension) {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const dataUrl = canvas.toDataURL('image/jpeg', 0.82);
          callback(dataUrl);
        }
      };
      if (e.target?.result) {
        img.src = e.target.result as string;
      }
    };
    reader.readAsDataURL(file);
  };

  // Handle Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() === 'admin' && password === 'kebonagung2026') {
      setIsAuthenticated(true);
      sessionStorage.setItem('kebonagung_admin_auth', 'true');
      setLoginError('');
      showToast('Selamat datang, Admin UMKM Kebonagung!');
    } else {
      setLoginError('Username atau kata sandi yang Anda masukkan salah.');
    }
  };

  // Handle Logout
  const handleLogout = () => {
    sessionStorage.removeItem('kebonagung_admin_auth');
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
  };

  // Handle Create Product
  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formPrice.trim() || !formSeller.trim() || !formDescription.trim()) {
      showToast('Mohon lengkapi semua kolom yang wajib diisi.');
      return;
    }

    if (formEcommerceUrl.trim() && !formEcommercePlatform.trim()) {
      showToast('Mohon pilih Platform E-Commerce karena Anda mengisi link produk/toko online.');
      return;
    }

    const finalCategory = formCategory === 'custom' ? (formCustomCategory || 'Lainnya') : formCategory;
    const finalBadge = formBadge === 'custom' ? (formCustomBadge || 'Produk Warga') : formBadge;

    addStoredProduct({
      name: formName.trim(),
      category: finalCategory,
      price: formPrice.trim(),
      seller: formSeller.trim(),
      description: formDescription.trim(),
      badge: finalBadge,
      imageUrl: formImageUrl || PHOTO_PRESETS[0].url,
      whatsappNumber: formWhatsapp.trim() || undefined,
      ecommerceUrl: formEcommerceUrl.trim() || undefined,
      ecommercePlatform: formEcommerceUrl.trim() ? (formEcommercePlatform.trim() || 'Toko Online') : undefined,
    });

    setFormName('');
    setFormPrice('');
    setFormSeller('');
    setFormDescription('');
    setFormCustomCategory('');
    setFormCustomBadge('');
    setFormWhatsapp('');
    setFormEcommerceUrl('');
    setFormEcommercePlatform('');
    showToast(`Produk "${formName}" berhasil ditambahkan!`);
    setActiveTab('list');
  };

  // Handle Edit Submit
  const handleUpdateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;

    if (editingProduct.ecommerceUrl?.trim() && !editingProduct.ecommercePlatform?.trim()) {
      showToast('Mohon pilih Platform E-Commerce karena link produk/toko online diisi.');
      return;
    }

    const cleanedProduct: UmkmProduct = {
      ...editingProduct,
      ecommercePlatform: editingProduct.ecommerceUrl?.trim() 
        ? (editingProduct.ecommercePlatform?.trim() || 'Toko Online') 
        : undefined,
    };

    updateStoredProduct(cleanedProduct);
    setEditingProduct(null);
    showToast(`Perubahan produk "${editingProduct.name}" berhasil disimpan!`);
  };

  // Handle Delete
  const handleDeleteProduct = (id: string) => {
    const target = productsList.find(p => p.id === id);
    deleteStoredProduct(id);
    setDeletingId(null);
    showToast(`Produk "${target?.name || ''}" berhasil dihapus.`);
  };

  // Filtered Products for Admin List
  const filteredProducts = productsList.filter(p => {
    const q = adminSearch.toLowerCase().trim();
    if (!q) return true;
    return (
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.seller.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.badge.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-cream text-purple pt-24 pb-20 selection:bg-purple selection:text-cream">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 right-6 z-50 px-5 py-3 rounded-2xl bg-purple text-cream shadow-2xl border-2 border-cream/30 flex items-center gap-3 text-sm font-bold"
          >
            <Check className="w-4 h-4 text-green-300" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Banner / Breadcrumb */}
      <div className="bg-cream-100/90 border-b-2 border-purple/15 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => onNavigate('umkm')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-purple text-cream hover:bg-purple-800 transition-all shadow-sm group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Kembali ke Halaman UMKM</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold text-purple/75">
            <span>Beranda</span>
            <span>/</span>
            <span>UMKM</span>
            <span>/</span>
            <span className="text-purple font-bold">Portal Admin UMKM</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {!isAuthenticated ? (
          /* 1. LOGIN SCREEN */
          <div className="max-w-md mx-auto my-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="p-8 sm:p-10 rounded-3xl bg-cream-50/90 border-2 border-purple shadow-purple-lg space-y-6"
            >
              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-purple text-cream flex items-center justify-center shadow-purple-sm">
                  <Lock className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-purple tracking-tight">
                    Login Pengurus UMKM
                  </h2>
                  <p className="text-xs text-purple/75 mt-1 leading-relaxed">
                    Masuk untuk mengelola katalog produk, harga, dan pendaftaran UMKM warga Padukuhan Kebonagung.
                  </p>
                </div>
              </div>

              {loginError && (
                <div className="p-3.5 rounded-xl bg-red-100 border border-red-300 text-red-800 text-xs flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{loginError}</span>
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-purple uppercase tracking-wider">
                    Username
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-purple/50" />
                    <input
                      type="text"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Masukkan username admin"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-cream border-2 border-purple/20 focus:border-purple focus:ring-2 focus:ring-purple/20 text-sm font-medium text-purple outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-purple uppercase tracking-wider">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-purple/50" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Masukkan password"
                      className="w-full pl-10 pr-11 py-3 rounded-xl bg-cream border-2 border-purple/20 focus:border-purple focus:ring-2 focus:ring-purple/20 text-sm font-medium text-purple outline-none transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-purple/60 hover:text-purple cursor-pointer"
                      aria-label="Tampilkan password"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-purple text-cream font-bold text-sm hover:bg-purple-800 active:scale-95 transition-all shadow-purple-sm hover:shadow-purple-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Masuk ke Dashboard</span>
                </button>
              </form>
            </motion.div>
          </div>
        ) : (
          /* 2. ADMIN DASHBOARD */
          <div className="space-y-8">
            {/* Top Dashboard Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-3xl bg-cream-50 border-2 border-purple shadow-purple-sm">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple text-cream text-xs font-bold shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Administrator Padukuhan</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-purple tracking-tight">
                  Manajemen & Pendaftaran Produk UMKM
                </h1>
                <p className="text-xs sm:text-sm text-purple/80">
                  Kelola katalog produk, ubah informasi harga/penjual, dan daftarkan usaha baru warga Kebonagung.
                </p>
              </div>

              <div className="flex items-center gap-2.5 flex-wrap">
                <button
                  type="button"
                  onClick={() => onNavigate('umkm')}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-purple/10 text-purple border border-purple/20 hover:bg-purple/20 text-xs font-bold transition-all cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Lihat Halaman Publik</span>
                </button>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-red-600 text-cream hover:bg-red-700 text-xs font-bold transition-all shadow-xs cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Keluar</span>
                </button>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-3 border-b-2 border-purple/15 pb-3">
              <button
                type="button"
                onClick={() => setActiveTab('create')}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'create'
                    ? 'bg-purple text-cream shadow-purple-sm'
                    : 'bg-cream-50 text-purple/80 hover:bg-purple/10 border border-purple/20'
                }`}
              >
                <Plus className="w-4 h-4" />
                <span>Tambah Produk Baru</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('list')}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === 'list'
                    ? 'bg-purple text-cream shadow-purple-sm'
                    : 'bg-cream-50 text-purple/80 hover:bg-purple/10 border border-purple/20'
                }`}
              >
                <Store className="w-4 h-4" />
                <span>Daftar & Edit Produk ({productsList.length})</span>
              </button>
            </div>

            {/* TAB CONTENT 1: CREATE NEW PRODUCT */}
            {activeTab === 'create' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Form Input Column */}
                <div className="lg:col-span-7">
                  <div className="p-6 sm:p-8 rounded-3xl bg-cream-50 border-2 border-purple shadow-purple-sm space-y-6">
                    <div className="space-y-1 border-b border-purple/15 pb-4">
                      <h3 className="text-xl font-extrabold text-purple flex items-center gap-2">
                        <Plus className="w-5 h-5 text-purple" />
                        <span>Formulir Produk UMKM Baru</span>
                      </h3>
                      <p className="text-xs text-purple/75">
                        Isi informasi produk dengan lengkap untuk ditampilkan di etalase web padukuhan.
                      </p>
                    </div>

                    <form onSubmit={handleCreateProduct} className="space-y-5">
                      {/* Product Name */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-purple uppercase tracking-wider">
                          Nama Produk <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          placeholder="Contoh: Keripik Talas Gurih Renyah"
                          className="w-full px-4 py-3 rounded-xl bg-cream border-2 border-purple/20 focus:border-purple focus:ring-2 focus:ring-purple/20 text-sm font-medium text-purple outline-none transition-all"
                        />
                      </div>

                      {/* Category & Badge */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="block text-xs font-bold text-purple uppercase tracking-wider">
                            Kategori Produk <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={formCategory}
                            onChange={(e) => setFormCategory(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-cream border-2 border-purple/20 focus:border-purple text-sm font-medium text-purple outline-none transition-all cursor-pointer"
                          >
                            {CATEGORY_PRESETS.map((cat) => (
                              <option key={cat} value={cat}>{cat}</option>
                            ))}
                            <option value="custom">+ Kategori Lainnya...</option>
                          </select>
                          {formCategory === 'custom' && (
                            <input
                              type="text"
                              required
                              value={formCustomCategory}
                              onChange={(e) => setFormCustomCategory(e.target.value)}
                              placeholder="Tulis nama kategori baru..."
                              className="w-full mt-2 px-4 py-2.5 rounded-xl bg-cream border border-purple/30 text-xs font-medium text-purple outline-none"
                            />
                          )}
                        </div>

                        <div className="space-y-1.5">
                          <label className="block text-xs font-bold text-purple uppercase tracking-wider">
                            Badge / Label <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={formBadge}
                            onChange={(e) => setFormBadge(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-cream border-2 border-purple/20 focus:border-purple text-sm font-medium text-purple outline-none transition-all cursor-pointer"
                          >
                            {BADGE_PRESETS.map((b) => (
                              <option key={b} value={b}>{b}</option>
                            ))}
                            <option value="custom">+ Label Lainnya...</option>
                          </select>
                          {formBadge === 'custom' && (
                            <input
                              type="text"
                              required
                              value={formCustomBadge}
                              onChange={(e) => setFormCustomBadge(e.target.value)}
                              placeholder="Tulis nama label/badge..."
                              className="w-full mt-2 px-4 py-2.5 rounded-xl bg-cream border border-purple/30 text-xs font-medium text-purple outline-none"
                            />
                          )}
                        </div>
                      </div>

                      {/* Price & Seller */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="block text-xs font-bold text-purple uppercase tracking-wider">
                            Estimasi Harga <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={formPrice}
                            onChange={(e) => setFormPrice(e.target.value)}
                            placeholder="Contoh: Rp 15.000 / bks"
                            className="w-full px-4 py-3 rounded-xl bg-cream border-2 border-purple/20 focus:border-purple focus:ring-2 focus:ring-purple/20 text-sm font-medium text-purple outline-none transition-all"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="block text-xs font-bold text-purple uppercase tracking-wider">
                            Penjual / Unit Usaha <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={formSeller}
                            onChange={(e) => setFormSeller(e.target.value)}
                            placeholder="Contoh: Dapur Bu Sugeng (RT 02)"
                            className="w-full px-4 py-3 rounded-xl bg-cream border-2 border-purple/20 focus:border-purple focus:ring-2 focus:ring-purple/20 text-sm font-medium text-purple outline-none transition-all"
                          />
                        </div>
                      </div>

                      {/* Product Photo Input */}
                      <div className="space-y-3 p-4 rounded-2xl bg-cream border-2 border-purple/20">
                        <div className="flex items-center justify-between">
                          <label className="block text-xs font-bold text-purple uppercase tracking-wider flex items-center gap-1.5">
                            <Camera className="w-4 h-4 text-purple" />
                            <span>Foto Produk UMKM</span>
                          </label>
                          <div className="flex items-center gap-1">
                            <button
                              type="button"
                              onClick={() => setPhotoInputMode('upload')}
                              className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                                photoInputMode === 'upload' ? 'bg-purple text-cream' : 'bg-purple/10 text-purple hover:bg-purple/20'
                              }`}
                            >
                              Upload File
                            </button>
                            <button
                              type="button"
                              onClick={() => setPhotoInputMode('url')}
                              className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                                photoInputMode === 'url' ? 'bg-purple text-cream' : 'bg-purple/10 text-purple hover:bg-purple/20'
                              }`}
                            >
                              Link URL
                            </button>
                            <button
                              type="button"
                              onClick={() => setPhotoInputMode('presets')}
                              className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                                photoInputMode === 'presets' ? 'bg-purple text-cream' : 'bg-purple/10 text-purple hover:bg-purple/20'
                              }`}
                            >
                              Pilihan Cepat
                            </button>
                          </div>
                        </div>

                        {photoInputMode === 'upload' && (
                          <div className="space-y-2">
                            <label className="flex flex-col items-center justify-center border-2 border-dashed border-purple/30 rounded-xl p-4 cursor-pointer hover:bg-purple/5 transition-all">
                              <Upload className="w-6 h-6 text-purple/60 mb-1" />
                              <span className="text-xs font-bold text-purple">Pilih Foto dari Perangkat (HP / Laptop)</span>
                              <span className="text-[10px] text-purple/60">JPG, PNG, atau WEBP (Otomatis dioptimasi)</span>
                              <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    processImageFile(file, (dataUrl) => setFormImageUrl(dataUrl));
                                  }
                                }}
                              />
                            </label>
                          </div>
                        )}

                        {photoInputMode === 'url' && (
                          <div className="space-y-1.5">
                            <div className="relative">
                              <LinkIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-purple/50" />
                              <input
                                type="url"
                                value={formImageUrl}
                                onChange={(e) => setFormImageUrl(e.target.value)}
                                placeholder="https://contoh-link-foto.com/gambar.jpg"
                                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-cream-50 border border-purple/20 text-xs font-medium text-purple outline-none"
                              />
                            </div>
                          </div>
                        )}

                        {photoInputMode === 'presets' && (
                          <div className="grid grid-cols-3 gap-2">
                            {PHOTO_PRESETS.map((preset) => (
                              <button
                                key={preset.label}
                                type="button"
                                onClick={() => setFormImageUrl(preset.url)}
                                className={`p-2 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center gap-1.5 ${
                                  formImageUrl === preset.url
                                    ? 'bg-purple text-cream border-purple shadow-sm'
                                    : 'bg-cream-50 text-purple border-purple/20 hover:bg-purple/10'
                                }`}
                              >
                                <img src={preset.url} alt={preset.label} className="w-12 h-10 object-cover rounded-lg" />
                                <span className="text-[10px] font-bold truncate w-full">{preset.label}</span>
                              </button>
                            ))}
                          </div>
                        )}

                        {/* Current Image Preview Thumbnail */}
                        {formImageUrl && (
                          <div className="flex items-center gap-3 p-2 rounded-xl bg-purple/5 border border-purple/10">
                            <img src={formImageUrl} alt="Pratinjau" className="w-14 h-14 object-cover rounded-lg border border-purple/20 shrink-0" />
                            <div className="min-w-0 flex-1">
                              <span className="text-[11px] font-bold text-purple block truncate">Foto Produk Terpilih</span>
                              <span className="text-[10px] text-purple/60 block truncate">{formImageUrl.startsWith('data:') ? 'Foto dari perangkat lokal' : formImageUrl}</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => setFormImageUrl('')}
                              className="p-1 rounded-lg text-purple/60 hover:text-purple hover:bg-purple/10 cursor-pointer"
                              title="Hapus foto"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        )}
                      </div>

                      {/* WhatsApp & E-Commerce Integration */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-cream border-2 border-purple/20">
                        <div className="space-y-1 sm:col-span-2">
                          <span className="block text-xs font-extrabold text-purple uppercase tracking-wider flex items-center gap-1.5">
                            <MessageCircle className="w-4 h-4 text-green-600" />
                            <span>Integrasi Pemesanan Langsung (WhatsApp & E-Commerce)</span>
                          </span>
                          <p className="text-[11px] text-purple/70">
                            Hubungkan tombol belanja langsung ke WhatsApp penjual asli atau toko online (Shopee/Tokopedia/Grab/GoFood/dll).
                          </p>
                        </div>

                        {/* WhatsApp Number */}
                        <div className="space-y-1.5">
                          <label className="block text-xs font-bold text-purple uppercase tracking-wider">
                            Nomor WhatsApp Penjual
                          </label>
                          <input
                            type="text"
                            value={formWhatsapp}
                            onChange={(e) => setFormWhatsapp(e.target.value)}
                            placeholder="Contoh: 081234567890 (Opsional)"
                            className="w-full px-4 py-2.5 rounded-xl bg-cream-50 border-2 border-purple/20 focus:border-purple text-xs font-medium text-purple outline-none"
                          />
                          <span className="text-[10px] text-purple/60 block">
                            *Jika kosong, otomatis dialihkan ke WhatsApp padukuhan.
                          </span>
                        </div>

                        {/* E-Commerce Platform */}
                        <div className="space-y-1.5">
                          <label className="block text-xs font-bold text-purple uppercase tracking-wider flex items-center justify-between">
                            <span>Platform E-Commerce</span>
                            {formEcommerceUrl.trim() ? (
                              <span className="text-[10px] text-red-500 font-bold">*Wajib diisi</span>
                            ) : (
                              <span className="text-[10px] text-purple/60 font-normal lowercase">(opsional)</span>
                            )}
                          </label>
                          <select
                            value={formEcommercePlatform}
                            onChange={(e) => setFormEcommercePlatform(e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl bg-cream-50 border-2 border-purple/20 focus:border-purple text-xs font-medium text-purple outline-none cursor-pointer"
                          >
                            <option value="">-- Pilih Platform (Opsional) --</option>
                            {PLATFORM_PRESETS.map((pl) => (
                              <option key={pl} value={pl}>{pl}</option>
                            ))}
                          </select>
                        </div>

                        {/* E-Commerce URL */}
                        <div className="space-y-1.5 sm:col-span-2">
                          <label className="block text-xs font-bold text-purple uppercase tracking-wider">
                            Link Produk / Toko Online (URL)
                          </label>
                          <div className="relative">
                            <LinkIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-purple/50" />
                            <input
                              type="url"
                              value={formEcommerceUrl}
                              onChange={(e) => setFormEcommerceUrl(e.target.value)}
                              placeholder="Contoh: https://shopee.co.id/toko-kebonagung (Opsional)"
                              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-cream-50 border-2 border-purple/20 focus:border-purple text-xs font-medium text-purple outline-none"
                            />
                          </div>
                          <span className="text-[10px] text-purple/60 block">
                            *Pengunjung dapat langsung meng-klik untuk membeli di e-commerce tersebut.
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-bold text-purple uppercase tracking-wider">
                          Deskripsi Produk <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          required
                          rows={3}
                          value={formDescription}
                          onChange={(e) => setFormDescription(e.target.value)}
                          placeholder="Jelaskan keunggulan produk, bahan baku lokal, atau keistimewaan rasanya..."
                          className="w-full px-4 py-3 rounded-xl bg-cream border-2 border-purple/20 focus:border-purple focus:ring-2 focus:ring-purple/20 text-sm font-medium text-purple outline-none transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 rounded-2xl bg-purple text-cream font-bold text-sm hover:bg-purple-800 active:scale-95 transition-all shadow-purple-sm hover:shadow-purple-md cursor-pointer flex items-center justify-center gap-2"
                      >
                        <Plus className="w-5 h-5" />
                        <span>Simpan & Terbitkan Produk UMKM</span>
                      </button>
                    </form>
                  </div>
                </div>

                {/* Live Preview Column */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="sticky top-28 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-purple uppercase tracking-wider">
                      <Sparkles className="w-4 h-4 text-purple" />
                      <span>Pratinjau Tampilan Kartu (Live Preview)</span>
                    </div>

                    {/* Preview Card */}
                    <div className="rounded-3xl bg-cream-50/90 border-2 border-purple shadow-purple-md flex flex-col justify-between overflow-hidden">
                      <div>
                        {/* Product Photo Container */}
                        <div className="relative h-52 bg-purple-950/20 border-b-2 border-purple/15 overflow-hidden">
                          {formImageUrl ? (
                            <>
                              <img
                                src={formImageUrl}
                                alt={formName || 'Pratinjau Produk'}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-purple-950/30 pointer-events-none" />
                            </>
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center bg-purple-900/10 text-purple/40 space-y-1">
                              <Camera className="w-8 h-8" />
                              <span className="text-[11px] font-bold">Foto Produk UMKM</span>
                            </div>
                          )}

                          <div className="absolute top-3 left-3 z-10">
                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-cream text-purple border border-purple/20 shadow-sm backdrop-blur-sm">
                              {formCategory === 'custom' ? (formCustomCategory || 'Kategori') : formCategory}
                            </span>
                          </div>

                          <div className="absolute top-3 right-3 z-10">
                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple text-cream shadow-sm flex items-center gap-1">
                              <Sparkles className="w-3 h-3 text-cream" />
                              <span>{formBadge === 'custom' ? (formCustomBadge || 'Badge') : formBadge}</span>
                            </span>
                          </div>

                          <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] font-semibold text-purple bg-cream/90 px-3 py-1 rounded-lg backdrop-blur-sm border border-purple/15 z-10">
                            <span className="truncate">Penjual: {formSeller || 'Nama Penjual'}</span>
                            <span className="text-purple font-bold">Kebonagung</span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-3">
                          <h3 className="font-bold text-lg text-purple leading-snug">
                            {formName || 'Nama Produk UMKM Anda'}
                          </h3>
                          <p className="text-xs sm:text-sm text-purple/80 leading-relaxed text-justify">
                            {formDescription || 'Deskripsi produk UMKM akan tampil di bagian ini dengan format yang rapi dan menarik bagi pengunjung.'}
                          </p>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="px-6 pb-6 pt-2">
                        <div className="pt-4 border-t border-purple/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                          <div>
                            <span className="block text-[10px] font-bold text-purple/60 uppercase tracking-wider">
                              Estimasi Harga
                            </span>
                            <span className="text-base font-extrabold text-purple">
                              {formPrice || 'Rp 0'}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-[#25D366] text-purple-950 shadow-xs">
                              <MessageCircle className="w-3.5 h-3.5 fill-current" />
                              <span>WhatsApp</span>
                            </div>

                            {formEcommerceUrl && (
                              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-purple text-cream shadow-xs">
                                <ShoppingBag className="w-3.5 h-3.5" />
                                <span>{formEcommercePlatform || 'E-Commerce'}</span>
                                <ExternalLink className="w-3 h-3 text-cream/70" />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT 2: MANAGE & EDIT PRODUCTS LIST */}
            {activeTab === 'list' && (
              <div className="space-y-6">
                {/* Search & Counter */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 justify-between">
                  <div className="relative w-full sm:max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-purple/60" />
                    <input
                      type="text"
                      value={adminSearch}
                      onChange={(e) => setAdminSearch(e.target.value)}
                      placeholder="Cari produk yang ingin diedit atau dihapus..."
                      className="w-full pl-11 pr-10 py-3 rounded-2xl bg-cream-50 border-2 border-purple/20 focus:border-purple text-sm font-medium text-purple outline-none transition-all"
                    />
                    {adminSearch && (
                      <button
                        type="button"
                        onClick={() => setAdminSearch('')}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-purple/60 hover:text-purple cursor-pointer"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  <div className="text-xs font-bold text-purple/75 self-end sm:self-center bg-purple/10 px-4 py-2 rounded-xl border border-purple/15">
                    Total: <span className="text-purple font-extrabold">{filteredProducts.length}</span> Produk Terdaftar
                  </div>
                </div>

                {/* Table / Grid for Admin List */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((p) => (
                    <div
                      key={p.id}
                      className="p-5 rounded-3xl bg-cream-50 border-2 border-purple shadow-purple-sm flex flex-col justify-between space-y-4 hover:shadow-purple-md transition-all"
                    >
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-14 h-14 rounded-2xl bg-purple/10 border-2 border-purple/20 overflow-hidden shrink-0">
                              {p.imageUrl ? (
                                <img src={p.imageUrl} alt={p.name} className="w-full h-full object-cover" />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-purple/40">
                                  <Camera className="w-6 h-6" />
                                </div>
                              )}
                            </div>
                            <div className="min-w-0 flex-1">
                              <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-purple text-cream inline-block">
                                {p.category}
                              </span>
                              <h4 className="font-extrabold text-base text-purple leading-snug mt-1 truncate">
                                {p.name}
                              </h4>
                            </div>
                          </div>
                        </div>

                        <p className="text-xs text-purple/80 line-clamp-2 text-justify">
                          {p.description}
                        </p>

                        <div className="pt-2 border-t border-purple/15 flex items-center justify-between text-xs font-semibold text-purple/75">
                          <span>Penjual: <strong>{p.seller}</strong></span>
                          <span className="text-purple font-extrabold">{p.price}</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="pt-2 border-t border-purple/15 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setEditingProduct({ ...p })}
                          className="flex-1 py-2.5 rounded-xl bg-purple text-cream hover:bg-purple-800 text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>Edit Produk</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setDeletingId(p.id)}
                          className="p-2.5 rounded-xl bg-red-100 text-red-700 hover:bg-red-200 border border-red-300 text-xs font-bold transition-all cursor-pointer"
                          title="Hapus Produk"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* 3. EDIT PRODUCT MODAL */}
      <AnimatePresence>
        {editingProduct && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/80 backdrop-blur-sm overflow-y-auto"
            onClick={() => setEditingProduct(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-xl w-full bg-cream-50 rounded-3xl border-2 border-purple shadow-2xl p-6 sm:p-8 space-y-6 my-auto max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between border-b border-purple/15 pb-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-extrabold text-purple flex items-center gap-2">
                    <Edit3 className="w-5 h-5 text-purple" />
                    <span>Edit Informasi Produk</span>
                  </h3>
                  <p className="text-xs text-purple/75">
                    Perubahan akan langsung tersimpan dan tayang di halaman UMKM.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setEditingProduct(null)}
                  className="p-2 rounded-xl bg-cream border border-purple/20 text-purple hover:bg-purple hover:text-cream transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleUpdateProduct} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-purple uppercase tracking-wider">
                    Nama Produk
                  </label>
                  <input
                    type="text"
                    required
                    value={editingProduct.name}
                    onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-cream border-2 border-purple/20 focus:border-purple text-sm font-medium text-purple outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-purple uppercase tracking-wider">
                      Kategori
                    </label>
                    <input
                      type="text"
                      required
                      value={editingProduct.category}
                      onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-cream border-2 border-purple/20 focus:border-purple text-sm font-medium text-purple outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-purple uppercase tracking-wider">
                      Badge / Label
                    </label>
                    <input
                      type="text"
                      required
                      value={editingProduct.badge}
                      onChange={(e) => setEditingProduct({ ...editingProduct, badge: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-cream border-2 border-purple/20 focus:border-purple text-sm font-medium text-purple outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-purple uppercase tracking-wider">
                      Estimasi Harga
                    </label>
                    <input
                      type="text"
                      required
                      value={editingProduct.price}
                      onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-cream border-2 border-purple/20 focus:border-purple text-sm font-medium text-purple outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-purple uppercase tracking-wider">
                      Penjual / RT
                    </label>
                    <input
                      type="text"
                      required
                      value={editingProduct.seller}
                      onChange={(e) => setEditingProduct({ ...editingProduct, seller: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-cream border-2 border-purple/20 focus:border-purple text-sm font-medium text-purple outline-none"
                    />
                  </div>
                </div>

                {/* Edit Product Photo */}
                <div className="space-y-3 p-4 rounded-2xl bg-cream border-2 border-purple/20">
                  <label className="block text-xs font-bold text-purple uppercase tracking-wider flex items-center gap-1.5">
                    <Camera className="w-4 h-4 text-purple" />
                    <span>Foto Produk UMKM</span>
                  </label>

                  <div className="space-y-2">
                    <label className="flex flex-col items-center justify-center border-2 border-dashed border-purple/30 rounded-xl p-3 cursor-pointer hover:bg-purple/5 transition-all">
                      <Upload className="w-5 h-5 text-purple/60 mb-1" />
                      <span className="text-xs font-bold text-purple">Pilih Foto Baru dari Perangkat</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            processImageFile(file, (dataUrl) => setEditingProduct({ ...editingProduct, imageUrl: dataUrl }));
                          }
                        }}
                      />
                    </label>

                    <div className="relative">
                      <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple/50" />
                      <input
                        type="url"
                        value={editingProduct.imageUrl || ''}
                        onChange={(e) => setEditingProduct({ ...editingProduct, imageUrl: e.target.value })}
                        placeholder="Atau tempel link URL foto online..."
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-cream-50 border border-purple/20 text-xs font-medium text-purple outline-none"
                      />
                    </div>

                    {editingProduct.imageUrl && (
                      <div className="flex items-center gap-2.5 p-2 rounded-xl bg-purple/5 border border-purple/10">
                        <img src={editingProduct.imageUrl} alt="Pratinjau" className="w-12 h-12 object-cover rounded-lg border border-purple/20 shrink-0" />
                        <span className="text-[11px] font-semibold text-purple truncate flex-1">Foto aktif saat ini</span>
                        <button
                          type="button"
                          onClick={() => setEditingProduct({ ...editingProduct, imageUrl: '' })}
                          className="p-1 rounded-lg text-purple/60 hover:text-purple hover:bg-purple/10 cursor-pointer"
                          title="Hapus foto"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Edit WhatsApp & E-Commerce Integration */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-cream border-2 border-purple/20">
                  <div className="space-y-1 sm:col-span-2">
                    <span className="block text-xs font-extrabold text-purple uppercase tracking-wider flex items-center gap-1.5">
                      <MessageCircle className="w-4 h-4 text-green-600" />
                      <span>Kontak Pemesanan (WhatsApp & Toko Online)</span>
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-purple uppercase tracking-wider">
                      Nomor WhatsApp Penjual
                    </label>
                    <input
                      type="text"
                      value={editingProduct.whatsappNumber || ''}
                      onChange={(e) => setEditingProduct({ ...editingProduct, whatsappNumber: e.target.value })}
                      placeholder="Contoh: 081234567890 (Opsional)"
                      className="w-full px-4 py-2.5 rounded-xl bg-cream-50 border-2 border-purple/20 focus:border-purple text-xs font-medium text-purple outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-purple uppercase tracking-wider flex items-center justify-between">
                      <span>Platform E-Commerce</span>
                      {editingProduct.ecommerceUrl?.trim() ? (
                        <span className="text-[10px] text-red-500 font-bold">*Wajib diisi</span>
                      ) : (
                        <span className="text-[10px] text-purple/60 font-normal lowercase">(opsional)</span>
                      )}
                    </label>
                    <select
                      value={editingProduct.ecommercePlatform || ''}
                      onChange={(e) => setEditingProduct({ ...editingProduct, ecommercePlatform: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-cream-50 border-2 border-purple/20 focus:border-purple text-xs font-medium text-purple outline-none cursor-pointer"
                    >
                      <option value="">-- Pilih Platform (Opsional) --</option>
                      {PLATFORM_PRESETS.map((pl) => (
                        <option key={pl} value={pl}>{pl}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="block text-xs font-bold text-purple uppercase tracking-wider">
                      Link Toko Online / E-Commerce (URL)
                    </label>
                    <div className="relative">
                      <LinkIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-purple/50" />
                      <input
                        type="url"
                        value={editingProduct.ecommerceUrl || ''}
                        onChange={(e) => setEditingProduct({ ...editingProduct, ecommerceUrl: e.target.value })}
                        placeholder="Contoh: https://shopee.co.id/toko-kebonagung (Opsional)"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-cream-50 border-2 border-purple/20 focus:border-purple text-xs font-medium text-purple outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-purple uppercase tracking-wider">
                    Deskripsi Produk
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={editingProduct.description}
                    onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-cream border-2 border-purple/20 focus:border-purple text-sm font-medium text-purple outline-none resize-none"
                  />
                </div>

                <div className="pt-3 border-t border-purple/15 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setEditingProduct(null)}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold text-purple/80 hover:bg-purple/10 transition-colors cursor-pointer"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-purple text-cream font-bold text-xs hover:bg-purple-800 transition-all shadow-sm cursor-pointer"
                  >
                    Simpan Perubahan
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 4. DELETE CONFIRMATION MODAL */}
      <AnimatePresence>
        {deletingId && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/80 backdrop-blur-sm"
            onClick={() => setDeletingId(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-md w-full bg-cream-50 rounded-3xl border-2 border-purple shadow-2xl p-6 sm:p-8 space-y-5 text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-red-100 border border-red-300 text-red-600 flex items-center justify-center">
                <Trash2 className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-extrabold text-purple">
                  Hapus Produk UMKM?
                </h3>
                <p className="text-xs text-purple/75 leading-relaxed">
                  Apakah Anda yakin ingin menghapus produk ini dari etalase? Tindakan ini dapat dibatalkan melalui tombol reset jika diperlukan.
                </p>
              </div>
              <div className="pt-2 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setDeletingId(null)}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-purple/80 bg-cream border border-purple/20 hover:bg-purple/10 transition-colors cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteProduct(deletingId)}
                  className="px-6 py-2.5 rounded-xl bg-red-600 text-cream font-bold text-xs hover:bg-red-700 transition-all shadow-sm cursor-pointer"
                >
                  Ya, Hapus Produk
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default AdminUmkmPage;