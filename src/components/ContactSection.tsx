import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="kontak" className="py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple/10 border border-purple/20 text-xs font-bold text-purple uppercase tracking-wider">
            Layanan & Kontak
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-purple tracking-tight">
            Hubungi Pengurus Padukuhan Kebonagung
          </h2>
          <p className="text-base text-purple/80">
            Sampaikan pertanyaan, aspirasi, atau keperluan administratif melalui layanan komunikasi warga kami.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-cream-50 border-2 border-purple/15 shadow-purple-sm space-y-6">
              <h3 className="text-xl font-bold text-purple">Informasi Balai Warga</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple text-cream flex items-center justify-center shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-purple">Alamat Balai</h4>
                    <p className="text-xs text-purple/80 leading-relaxed mt-0.5">
                      Padukuhan Kebonagung, Kalurahan Tridadi, Kapanewon Sleman, Kabupaten Sleman, D.I. Yogyakarta 55511
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple text-cream flex items-center justify-center shrink-0 mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-purple">Jam Layanan Aspirasi</h4>
                    <p className="text-xs text-purple/80 leading-relaxed mt-0.5">
                      Senin - Sabtu: 08.00 - 16.00 WIB
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple text-cream flex items-center justify-center shrink-0 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-purple">Kontak Humas Padukuhan</h4>
                    <p className="text-xs text-purple/80 leading-relaxed mt-0.5">
                      +62 812-3456-7890 (Sekretariat Dukuh)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple text-cream flex items-center justify-center shrink-0 mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-purple">Surat Elektronik</h4>
                    <p className="text-xs text-purple/80 leading-relaxed mt-0.5">
                      kebonagung.tridadi@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-purple text-cream text-xs space-y-1">
                <span className="font-bold block">Didukung oleh:</span>
                <span className="text-cream/90">Tim MeRAMU HMTP Universitas Ahmad Dahlan 2026</span>
              </div>
            </div>
          </div>

          {/* Right Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-cream-50 border-2 border-purple/15 shadow-purple-sm">
              <h3 className="text-xl font-bold text-purple mb-6">Formulir Pesan & Aspirasi Warga</h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-purple text-cream text-center space-y-3"
                >
                  <CheckCircle className="w-12 h-12 text-cream mx-auto" />
                  <h4 className="text-lg font-bold">Pesan Terkirim!</h4>
                  <p className="text-xs text-cream/80 max-w-md mx-auto">
                    Terima kasih telah menghubungi Padukuhan Kebonagung. Pengurus padukuhan atau tim humas akan segera menindaklanjuti pesan Anda.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-purple mb-1.5 uppercase">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Budi Santoso"
                        className="w-full px-4 py-3 rounded-xl bg-cream border border-purple/20 text-purple placeholder-purple/40 text-sm focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-purple mb-1.5 uppercase">
                        Nomor WhatsApp / Telp
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="081234567890"
                        className="w-full px-4 py-3 rounded-xl bg-cream border border-purple/20 text-purple placeholder-purple/40 text-sm focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-purple mb-1.5 uppercase">
                      Kategori Keperluan
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-xl bg-cream border border-purple/20 text-purple text-sm focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent transition-all"
                    >
                      <option value="informasi">Informasi Umum Desa</option>
                      <option value="umkm">Pendaftaran & Kolaborasi UMKM</option>
                      <option value="aspirasi">Aspirasi & Saran Warga</option>
                      <option value="meramu">Program MeRAMU HMTP UAD</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-purple mb-1.5 uppercase">
                      Isi Pesan / Saran
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tuliskan pesan atau kebutuhan Anda di sini..."
                      className="w-full px-4 py-3 rounded-xl bg-cream border border-purple/20 text-purple placeholder-purple/40 text-sm focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl font-bold bg-purple text-cream hover:bg-purple-800 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-purple-sm hover:shadow-purple-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim Pesan Sekarang</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
