import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  ExternalLink,
  Navigation,
  Compass,
  Building
} from 'lucide-react';

// Custom Crisp SVG Icons for Social Media with exact Purple (#453368) styling
const TikTokIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.86-4.47V8.62a8.28 8.28 0 0 0 4.91 1.6V6.77a4.88 4.88 0 0 1-1-.08z" />
  </svg>
);

const YouTubeIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" stroke="none" />
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export const LokasiInfoSection: React.FC = () => {
  const socialLinks = [
    {
      name: 'TikTok Karang Taruna',
      handle: '@ktkebonagung',
      href: 'https://www.tiktok.com/@ktkebonagung?_r=1&_t=ZS-999Sf0NWSnM',
      icon: <TikTokIcon className="w-6 h-6 text-purple group-hover:text-cream transition-colors" />,
      desc: 'Video kreatif, dokumentasi kegiatan pemuda dusun, dan agenda Karang Taruna Kebonagung',
      badge: 'Pemuda Dusun',
    },
    {
      name: 'YouTube Masjid Al-Ma\'un',
      handle: '@rismmaalmaauun',
      href: 'https://youtube.com/@rismmaalmaauun?si=VeKOG18wIFDmNFMH',
      icon: <YouTubeIcon className="w-6 h-6 text-purple group-hover:text-cream transition-colors" />,
      desc: 'Siaran kajian, dokumentasi kegiatan keagamaan, dan syiar dakwah RISMA Masjid Al-Ma\'un',
      badge: 'Kajian & Dakwah',
    },
    {
      name: 'Instagram Padukuhan Kebonagung',
      handle: '@kebonagung.tridadi',
      href: 'https://www.instagram.com/kebonagung.tridadi?igsi=MWo2aGVvc2ZpcDU4NA==',
      icon: <InstagramIcon className="w-6 h-6 text-purple group-hover:text-cream transition-colors" />,
      desc: 'Informasi agenda kajian, poster dakwah, dan kegiatan remaja Islam Masjid Al-Ma\'un',
      badge: 'Remaja Masjid',
    },
    {
      name: 'WhatsApp Layanan Warga',
      handle: '+62 882-1618-6389',
      href: 'https://wa.me/6288216186389?text=Halo%20Karang%20Taruna%20/%20Pengurus%20Kebonagung,%20saya%20ingin%20bertanya%20mengenai...',
      icon: <WhatsAppIcon className="w-6 h-6 text-purple group-hover:text-cream transition-colors" />,
      desc: 'Layanan komunikasi cepat warga dan pemuda Karang Taruna Padukuhan Kebonagung',
      badge: 'Karang Taruna',
    },
  ];

  return (
    <section id="lokasi" className="py-20 md:py-28 bg-cream relative border-t border-purple/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple/10 border border-purple/20 text-xs font-bold text-purple uppercase tracking-wider"
          >
            <Compass className="w-3.5 h-3.5 text-purple" />
            <span>Pusat Keterbukaan Informasi</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple tracking-tight leading-tight"
          >
            Lokasi dan Informasi
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-purple/85 leading-relaxed"
          >
            Temukan lokasi geografis Padukuhan Kebonagung serta akses mudah ke kanal komunikasi dan jejaring sosial resmi kami.
          </motion.p>
        </div>

        {/* Top: Google Maps Embed & Location Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Google Maps Embed Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 rounded-3xl overflow-hidden border-2 border-purple shadow-purple-md bg-cream-50 flex flex-col w-full"
          >
            <div className="p-4 bg-cream-100 border-b-2 border-purple/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-purple" />
                <span className="font-bold text-sm text-purple">Peta Lokasi Padukuhan Kebonagung</span>
              </div>
              <a
                href="https://maps.google.com/?q=Kebonagung%2C+Tridadi%2C+Sleman%2C+Kabupaten+Sleman%2C+Daerah+Istimewa+Yogyakarta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-purple hover:underline"
              >
                <span>Buka di Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-purple" />
              </a>
            </div>

            {/* Responsive iFrame with 100% full width and purple accent border */}
            <div className="relative w-full flex-grow min-h-[360px] sm:min-h-[420px] md:min-h-[460px] bg-cream-muted">
              <iframe
                title="Peta Lokasi Padukuhan Kebonagung, Tridadi, Sleman, Kabupaten Sleman, Daerah Istimewa Yogyakarta"
                src="https://maps.google.com/maps?q=Kebonagung%2C+Tridadi%2C+Sleman%2C+Kabupaten+Sleman%2C+Daerah+Istimewa+Yogyakarta&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[360px] sm:min-h-[420px] md:min-h-[460px] border-0"
                style={{ width: '100%' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Location Key Information Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 rounded-3xl bg-cream-50 border-2 border-purple p-6 sm:p-8 shadow-purple-sm flex flex-col justify-between space-y-6"
          >
            <div className="space-y-5">
              <div className="flex items-center gap-3 border-b-2 border-purple/15 pb-4">
                <div className="w-11 h-11 rounded-2xl bg-purple text-cream flex items-center justify-center font-bold">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-purple">Balai Padukuhan Kebonagung</h3>
                  <p className="text-xs font-semibold text-purple/75">Pusat Administrasi & Musyawarah Warga</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-purple">
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-purple/10 border-2 border-purple text-purple shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-purple" />
                  </div>
                  <div>
                    <span className="block font-bold text-xs uppercase text-purple/70">Alamat Lengkap</span>
                    <p className="text-xs sm:text-sm font-semibold text-purple leading-relaxed">
                      Padukuhan Kebonagung, Kalurahan Tridadi, Kapanewon Sleman, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55511
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-purple/10 border-2 border-purple text-purple shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-purple" />
                  </div>
                  <div>
                    <span className="block font-bold text-xs uppercase text-purple/70">Jam Operasional Layanan</span>
                    <p className="text-xs sm:text-sm font-semibold text-purple">
                      Senin - Sabtu: 08.00 - 16.00 WIB
                    </p>
                    <span className="text-[11px] text-purple/75">Layanan darurat warga tersedia 24 jam via RT/RW</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-purple/10 border-2 border-purple text-purple shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-purple" />
                  </div>
                  <div>
                    <span className="block font-bold text-xs uppercase text-purple/70">Kontak Layanan Warga</span>
                    <p className="text-xs sm:text-sm font-semibold text-purple">
                      +62 882-1618-6389 (Karang Taruna / Humas)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-purple/10 border-2 border-purple text-purple shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-purple" />
                  </div>
                  <div>
                    <span className="block font-bold text-xs uppercase text-purple/70">Email Resmi</span>
                    <p className="text-xs sm:text-sm font-semibold text-purple">
                      kebonagung.tridadi@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t-2 border-purple/15">
              <a
                href="https://maps.google.com/?q=Kebonagung%2C+Tridadi%2C+Sleman%2C+Kabupaten+Sleman%2C+Daerah+Istimewa+Yogyakarta"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold bg-purple text-cream hover:bg-purple-800 transition-all shadow-purple-sm text-sm"
              >
                <Navigation className="w-4 h-4" />
                <span>Petunjuk Arah Menuju Lokasi</span>
              </a>
            </div>
          </motion.div>

        </div>

        {/* Bottom: Clickable Social Media Row */}
        <div className="space-y-6">
          <div className="text-center space-y-1">
            <h3 className="text-2xl font-extrabold text-purple tracking-tight">
              Media Sosial & Saluran Komunikasi Resmi
            </h3>
            <p className="text-sm text-purple/80">
              Ikuti akun resmi kami untuk mendapatkan pengumuman teranyar dan liputan kegiatan padukuhan.
            </p>
          </div>

          {/* Social media cards with border purple (#453368) and icon purple (#453368) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="group p-6 rounded-3xl bg-cream-50/90 border-2 border-purple hover:bg-cream shadow-purple-sm hover:shadow-purple-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    {/* Social icon container with purple (#453368) border and purple icon */}
                    <div className="w-14 h-14 rounded-2xl bg-cream border-2 border-purple shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-purple transition-all duration-300">
                      {social.icon}
                    </div>

                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple/10 text-purple border border-purple/20">
                      {social.badge}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-extrabold text-lg text-purple group-hover:text-purple-800 transition-colors flex items-center gap-1.5">
                      <span>{social.name}</span>
                      <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity text-purple" />
                    </h4>
                    <span className="text-xs font-bold text-purple/70 block mt-0.5">
                      {social.handle}
                    </span>
                    <p className="text-xs text-purple/80 leading-relaxed mt-2">
                      {social.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t-2 border-purple/20 flex items-center justify-between text-xs font-bold text-purple">
                  <span>Kunjungi {social.name}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
