import React from 'react';
import { Cpu, Sparkles, Award, Layers, Heart } from 'lucide-react';

import penerjunan1 from '../assets/penerjunan1.JPG';
import penerjunan2 from '../assets/penerjunan2.JPG';
import penerjunan3 from '../assets/penerjunan3.JPG';
import penerjunan4 from '../assets/penerjunan4.JPG';

import sosialisasitalastika1 from '../assets/sosialisasitalastika1.jpg';
import sosialisasitalastika2 from '../assets/sosialisasitalastika2.jpg';
import sosialisasitalastika3 from '../assets/sosialisasitalastika3.jpg';
import sosialisasitalastika4 from '../assets/sosialisasitalastika4.jpg';

import talastika1 from '../assets/talastika1.jpg';
import talastika2 from '../assets/talastika2.jpg';
import talastika3 from '../assets/talastika3.JPG';
import talastika4 from '../assets/talastika4.JPG';
import talastika5 from '../assets/talastika5.JPG';
import talastika6 from '../assets/talastika6.JPG';

import vesta1 from '../assets/vesta1.jpg';
import vesta2 from '../assets/vesta2.jpg';
import vesta3 from '../assets/vesta3.JPG';
import vesta4 from '../assets/vesta4.JPG';
import vesta5 from '../assets/vesta5.JPG';
import vesta6 from '../assets/vesta6.JPG';
import vesta7 from '../assets/vesta7.JPG';
import vesta8 from '../assets/vesta8.JPG';
import vesta9 from '../assets/vesta9.JPG';
import vesta10 from '../assets/vesta10.JPG';

import silaturrahimpcm1 from '../assets/silaturrahimpcm1.jpg';
import silaturrahimpcm2 from '../assets/silaturrahimpcm2.JPG';
import silaturrahimpcm3 from '../assets/silaturrahimpcm3.JPG';
import silaturrahimpcm4 from '../assets/silaturrahimpcm4.JPG';

import tpa1 from '../assets/tpa1.JPG';
import tpa2 from '../assets/tpa2.JPG';
import tpa3 from '../assets/tpa3.JPG';
import tpa4 from '../assets/tpa4.JPG';
import tpa5 from '../assets/tpa5.JPG';
import tpa6 from '../assets/tpa6.JPG';
import tpa7 from '../assets/tpa7.JPG';

import kajian1 from '../assets/kajian1.jpg';
import kajian2 from '../assets/kajian2.jpg';
import kajian3 from '../assets/kajian3.jpg';
import kajian4 from '../assets/kajian4.jpg';

import tirakatan1 from '../assets/tirakatan1.jpg';
import tirakatan2 from '../assets/tirakatan2.jpg';
import tirakatan3 from '../assets/tirakatan3.JPG';
import tirakatan4 from '../assets/tirakatan4.JPG';
import tirakatan5 from '../assets/tirakatan5.JPG';
import tirakatan6 from '../assets/tirakatan6.JPG';
import tirakatan7 from '../assets/tirakatan7.JPG';
import tirakatan8 from '../assets/tirakatan8.JPG';
import tirakatan9 from '../assets/tirakatan9.JPG';

import harisehat1 from '../assets/harisehat1.jpg';
import harisehat2 from '../assets/harisehat2.jpg';
import harisehat3 from '../assets/harisehat3.jpg';
import harisehat5 from '../assets/harisehat5.jpg';

import harikemerdekaan1 from '../assets/harikemerdekaan1.jpg';
import harikemerdekaan2 from '../assets/harikemerdekaan2.jpg';
import harikemerdekaan3 from '../assets/harikemerdekaan3.jpg';
import harikemerdekaan4 from '../assets/harikemerdekaan4.jpg';
import harikemerdekaan6 from '../assets/harikemerdekaan6.jpg';
import harikemerdekaan7 from '../assets/harikemerdekaan7.jpg';
import harikemerdekaan8 from '../assets/harikemerdekaan8.jpg';
import harikemerdekaan9 from '../assets/harikemerdekaan9.jpg';
import harikemerdekaan10 from '../assets/harikemerdekaan10.jpg';
import harikemerdekaan11 from '../assets/harikemerdekaan11.JPG';
import harikemerdekaan13 from '../assets/harikemerdekaan13.jpg';
import harikemerdekaan14 from '../assets/harikemerdekaan14.jpg';
import harikemerdekaan15 from '../assets/harikemerdekaan15.jpg';
import harikemerdekaan16 from '../assets/harikemerdekaan16.jpg';
import harikemerdekaan17 from '../assets/harikemerdekaan17.jpg';

import karangtaruna1 from '../assets/karangtaruna1.jpg';
import karangtaruna2 from '../assets/karangtaruna2.jpg';
import karangtaruna3 from '../assets/karangtaruna3.jpg';
import karangtaruna4 from '../assets/karangtaruna4.jpg';
import karangtaruna5 from '../assets/karangtaruna5.jpg';
import karangtaruna6 from '../assets/karangtaruna6.jpg';
import karangtaruna7 from '../assets/karangtaruna7.jpg';
import karangtaruna8 from '../assets/karangtaruna8.jpg';

export interface MeramuDocPhoto {
  id: string;
  title: string;
  category: 'Pelatihan' | 'Digitalisasi' | 'Kemitraan' | 'Sosial';
  date: string;
  location: string;
  caption: string;
  colorScheme: string;
  iconSymbol: string;
  images?: string[];
}

export interface MeramuProgram {
  num: string;
  title: string;
  subtitle: string;
  desc: string;
  deliverables: string[];
  icon: React.ReactNode;
}

export const meramuCategories = ['Semua', 'Pelatihan', 'Digitalisasi', 'Kemitraan', 'Sosial'] as const;

export const docPhotos: MeramuDocPhoto[] = [
  {
    id: 'meramu-1',
    title: 'Survei Awal & Pemetaan Potensi Pertanian Dusun',
    category: 'Kemitraan',
    date: 'Januari 2026',
    location: 'Lahan Pertanian Kebonagung',
    caption: 'Tim MeRAMU HMTP UAD melakukan observasi komoditas pangan utama dan diskusi bersama Lurah Tridadi beserta PCM Sleman',
    colorScheme: 'from-purple-200 via-cream-200 to-purple-100',
    iconSymbol: '🌾',
  },
  {
    id: 'meramu-2',
    title: 'Focus Group Discussion (FGD) bersama Karang Taruna Kebonagung',
    category: 'Kemitraan',
    date: 'Agustus 2026',
    location: 'Balai Cabai Padukuhan Kebonagung',
    caption: 'Fiksasi rencana kerja program pengabdian di Padukuhan Kebonagung.',
    colorScheme: 'from-cream-200 via-purple-100 to-cream-300',
    iconSymbol: '🗣️',
  },
  {
    id: 'meramu-3',
    title: 'Sosialisasi dan Penerjunan Tim MeRAMU HMTP UAD',
    category: 'Sosial',
    date: '15 Agustus 2026',
    location: 'Aula Kalurahan Tridadi',
    caption: 'Melakukan penerjunan Tim MeRAMU HMTP UAD secara resmi oleh pihak universitas, kalurahan, dan mitra terkait.',
    colorScheme: 'from-purple-100 via-cream-100 to-purple-200',
    iconSymbol: '🤝',
    images: [penerjunan1, penerjunan2, penerjunan3, penerjunan4],
  },
  {
    id: 'meramu-4',
    title: 'Sosialisasi TALASTIKA dan VESTA: Diversifikasi Produk Olahan Talas',
    category: 'Pelatihan',
    date: '21 Agustus 2026',
    location: 'Masjid Al-Huda Kebonagung',
    caption: 'Sosialisasi pengolahan tepung talas dan inovasi camilan sehat bernilai jual tinggi bersama ibu-ibu KWT.',
    colorScheme: 'from-purple-100 via-cream-100 to-purple-200',
    iconSymbol: '🥣',
    images: [sosialisasitalastika1, sosialisasitalastika2, sosialisasitalastika3, sosialisasitalastika4],
  },
  {
    id: 'meramu-5',
    title: 'Pelatihan TALASTIKA: Diversifikasi Produk Tepung Talas',
    category: 'Pelatihan',
    date: '29 Agustus 2026',
    location: 'Balai Lelang Cabai Kebonagung',
    caption: 'Praktik langsung proses pembuatan tepung talas bersama ibu-ibu KWT.',
    colorScheme: 'from-purple-100 via-cream-100 to-purple-200',
    iconSymbol: '🥣',
    images: [talastika1, talastika2, talastika3, talastika4, talastika5, talastika6],
  },
  {
    id: 'meramu-6',
    title: 'Pelatihan VESTA: Pengolahan Produk Turunan Tepung Talas Berupa Nugget dan Beras Analog',
    category: 'Pelatihan',
    date: '29 Agustus 2026',
    location: 'Balai Lelang Cabai Kebonagung',
    caption: 'Praktik langsung pengolahan inovasi nugget serta beras analog berbasis tepung talas bersama ibu-ibu KWT.',
    colorScheme: 'from-purple-100 via-cream-100 to-purple-200',
    iconSymbol: '🥣',
    images: [vesta1, vesta2, vesta3, vesta4, vesta5, vesta6, vesta7, vesta8, vesta9, vesta10],
  },
  {
    id: 'meramu-7',
    title: 'Workshop PRIME: Pendampingan Desain Kemasan & Identitas Merek (Branding)',
    category: 'Pelatihan',
    date: '31 Agustus 2026',
    location: 'Masjid Al-Huda Kebonagung',
    caption: 'Edukasi pembuatan identitas visual produk, label kemasan informatif sesuai regulasi (komposisi, tanggal kedaluwarsa, nilai gizi), serta pemilihan bahan kemasan tahan udara.',
    colorScheme: 'from-cream-300 via-purple-200 to-cream-200',
    iconSymbol: '🧼',
  },
  {
    id: 'meramu-8',
    title: 'Sosialisasi Legalitas Produk Usaha',
    category: 'Pelatihan',
    date: '31 Agustus 2026',
    location: 'Masjid Al-Huda Kebonagung',
    caption: 'Sinergi bersama pelaku UMKM desa dalam memberikan pemahaman dan pendampingan pengurusan izin dasar (NIB) serta sertifikasi produk (P-IRT/Halal) guna meningkatkan nilai jual komoditas lokal seperti olahan talas agar siap bersaing di pasar yang lebih luas.',
    colorScheme: 'from-purple-200 via-cream-100 to-purple-100',
    iconSymbol: '📦',
  },
  {
    id: 'meramu-9',
    title: 'Pengenalan dan Uji Coba Website Resmi Padukuhan Kebonagung',
    category: 'Digitalisasi',
    date: '31 Agustus 2026',
    location: 'Masjid Al-Huda Kebonagung',
    caption: 'Pengenalan dan uji coba website resmi padukuhan untuk mempublikasikan profil dan produk UMKM dusun.',
    colorScheme: 'from-cream-200 via-purple-200 to-cream-100',
    iconSymbol: '💻',
  },
  {
    id: 'meramu-11',
    title: 'Pelatihan Pengelolaan Konten Digital untuk Pemuda Karang Taruna',
    category: 'Digitalisasi',
    date: 'April 2026',
    location: 'Balai Pertemuan Kebonagung',
    caption: 'Bimbingan teknis pengelolaan informasi web, foto dokumentasi, dan promosi media sosial kepada generasi muda padukuhan.',
    colorScheme: 'from-purple-100 via-cream-300 to-purple-200',
    iconSymbol: '📱',
  },
  {
    id: 'meramu-12',
    title: 'Silaturrahmi Bersama Kepala Dukuh dan RT/RW Kebonagung',
    category: 'Sosial',
    date: '11 Agustus 2026',
    location: 'Kebonagung',
    caption: 'Melakukan silaturrahmi dan diskusi santai bersama Kepala Dukuh dan RT/RW untuk mendengar aspirasi dan masukan terkait program pengabdian Tim Meramu HMTP.',
    colorScheme: 'from-cream-100 via-purple-100 to-cream-300',
    iconSymbol: '👶',
  },
  {
    id: 'meramu-13',
    title: 'Silaturrahmi Bersama Pimpinan Cabang Muhammadiyah Sleman dan Pimpinan Ranting Muhammadiyah Tridadi',
    category: 'Sosial',
    date: '11 Agustus 2026',
    location: 'Kebonagung',
    caption: 'Melakukan silaturrahmi dan diskusi santai bersama Pimpinan Cabang Muhammadiyah Sleman dan Pimpinan Ranting Muhammadiyah Tridadi untuk mendengar aspirasi dan masukan terkait program pengabdian Tim Meramu HMTP.',
    colorScheme: 'from-cream-100 via-purple-100 to-cream-300',
    iconSymbol: '🤝',
    images: [silaturrahimpcm1, silaturrahimpcm2, silaturrahimpcm3, silaturrahimpcm4],
  },
  {
    id: 'meramu-14',
    title: 'Serah Terima Peninggalan Fisik & Penutupan Program Pengabdian',
    category: 'Kemitraan',
    date: 'September 2026',
    location: 'Balai Lelang Cabai Padukuhan Kebonagung',
    caption: 'Penyerahan plakat penghargaan, dokumen sistem informasi padukuhan, dan foto bersama Kepala Dukuh serta seluruh perwakilan warga.',
    colorScheme: 'from-purple-200 via-cream-200 to-purple-100',
    iconSymbol: '🎓',
  },
  {
    id: 'meramu-15',
    title: 'Mengajar TPA (Taman Pendidikan Al- Quran)',
    category: 'Sosial',
    date: '14, 15, 21, 22, 28, 29 Agustus dan 4,5 September 2026',
    location: 'Masjid Al-Huda Kebonagung',
    caption: 'Tim MeRAMU HMTP UAD mengisi kegiatan belajar mengajar TPA (Taman Pendidikan Al-Quran) untuk anak-anak usia dini di Padukuhan Kebonagung.',
    colorScheme: 'from-purple-200 via-cream-200 to-purple-100',
    iconSymbol: '🕌',
    images: [tpa1, tpa2, tpa3, tpa4, tpa5, tpa6, tpa7],
  },
  {
    id: 'meramu-16',
    title: 'Kajian Malam Jumat',
    category: 'Sosial',
    date: '13, 20, 27 Agustus dan 3, 10 September 2026',
    location: 'Masjid Al-Huda Kebonagung',
    caption: 'Tim MeRAMU HMTP UAD mengisi kegiatan kajian rutin Malam Jumat di Masjid Al-Huda Kebonagung dengan tema penguatan karakter dan motivasi belajar bagi generasi Islam.',
    colorScheme: 'from-purple-200 via-cream-200 to-purple-100',
    iconSymbol: '📖',
    images: [kajian1, kajian2, kajian3, kajian4],
  },
  {
    id: 'meramu-17',
    title: 'Malam Tirakatan Peringatan HUT RI ke-81',
    category: 'Sosial',
    date: '16 Agustus 2026',
    location: 'Kebonagung',
    caption: 'Tim MeRAMU HMTP UAD turut berpartisipasi dalam kegiatan Malam Tirakatan Peringatan HUT RI ke-81 di Padukuhan Kebonagung.',
    colorScheme: 'from-purple-200 via-cream-200 to-purple-100',
    iconSymbol: '🕯️',
    images: [
      tirakatan1,
      tirakatan2,
      tirakatan3,
      tirakatan4,
      tirakatan5,
      tirakatan6,
      tirakatan7,
      tirakatan8,
      tirakatan9
    ],
  },
  {
    id: 'meramu-18',
    title: 'Hari Sehat Bersama Masyarakat',
    category: 'Sosial',
    date: '17 dan 23 Agustus 2026',
    location: 'Kebonagung',
    caption: 'Tim MeRAMU HMTP UAD turut berpartisipasi dalam kegiatan Hari Sehat Bersama Masyarakat di Padukuhan Kebonagung.',
    colorScheme: 'from-purple-200 via-cream-200 to-purple-100',
    iconSymbol: '🏃',
    images: [harisehat1, harisehat2, harisehat3, harisehat5],
  },
  {
    id: 'meramu-19',
    title: 'Kegiatan Memperingati Hari Kemerdekaan',
    category: 'Sosial',
    date: 'Agustus 2026',
    location: 'Kebonagung',
    caption: 'Tim MeRAMU HMTP UAD turut berpartisipasi aktif dalam memeriahkan dan menyukseskan rangkaian perlombaan peringatan Hari Kemerdekaan RI bersama warga Padukuhan Kebonagung.',
    colorScheme: 'from-purple-200 via-cream-200 to-purple-100',
    iconSymbol: '🇮🇩',
    images: [
      harikemerdekaan1,
      harikemerdekaan2,
      harikemerdekaan3,
      harikemerdekaan4,
      harikemerdekaan6,
      harikemerdekaan7,
      harikemerdekaan8,
      harikemerdekaan9,
      harikemerdekaan10,
      harikemerdekaan11,
      harikemerdekaan13,
      harikemerdekaan14,
      harikemerdekaan15,
      harikemerdekaan16,
      harikemerdekaan17
    ],
  },
  {
    id: 'meramu-20',
    title: 'Silaturrahmi Bersama Karang Taruna dan Kelompok Wanita Tani',
    category: 'Sosial',
    date: 'Agustus 2026',
    location: 'Kebonagung',
    caption: 'Sesi silaturrahmi, diskusi sinergi, dan perumusan program bersama Karang Taruna serta Kelompok Wanita Tani (KWT) Kebonagung.',
    colorScheme: 'from-purple-200 via-cream-200 to-purple-100',
    iconSymbol: '🤝',
    images: [
      karangtaruna1,
      karangtaruna2,
      karangtaruna3,
      karangtaruna4,
      karangtaruna5,
      karangtaruna6,
      karangtaruna7,
      karangtaruna8
    ],
  },
];

export const programs: MeramuProgram[] = [
  {
    num: '01',
    title: 'Digitalisasi Sistem Informasi Padukuhan Kebonagung',
    subtitle: 'Membangun Ekosistem Keterbukaan Informasi Desa',
    desc: 'Pengembangan situs web resmi berbasis teknologi modern (React, Tailwind CSS, Framer Motion) untuk menyajikan profil wilayah, katalog UMKM warga, dan keterbukaan agenda kegiatan padukuhan kepada publik.',
    deliverables: [
      'Website Padukuhan Kebonagung yang responsif & ramah perangkat mobile',
      'Etalase digital promosi produk-produk olahan pangan UMKM warga',
    ],
    icon: <Cpu className="w-6 h-6 text-purple" />,
  },
  {
    num: '02',
    title: 'TALASTIKA dan VESTA : Diversifikasi & Inovasi Teknologi Pengolahan Pangan Lokal',
    subtitle: 'Meningkatkan Nilai Tambah Komoditas Hasil Panen',
    desc: 'Penerapan ilmu teknologi pangan dalam mengolah umbi talas menjadi tepung talas berkualitas serta aneka olahan kudapan sehat berdaya simpan lebih lama.',
    deliverables: [
      'Formulasi resep olahan pangan bernilai ekonomi tinggi',
      'Praktik pembuatan tepung talas bebas gluten untuk Kelompok Wanita Tani (KWT)',
      'Uji organoleptik (rasa, aroma, tekstur) produk bersama masyarakat',
    ],
    icon: <Sparkles className="w-6 h-6 text-purple" />,
  },
  {
    num: '03',
    title: 'Standardisasi Higiene, Sanitasi & Keamanan Pangan UMKM',
    subtitle: 'Penerapan Good Manufacturing Practices (GMP)',
    desc: 'Pendampingan pelaku usaha mikro dalam menerapkan prinsip sanitasi pengolahan makanan, higienitas pekerja, serta pencegahan kontaminasi fisik, kimia, dan biologis.',
    deliverables: [
      'Checklist audit kebersihan dapur produksi UMKM binaan',
      'Sosialisasi sertifikasi pangan aman dan izin edar produk',
    ],
    icon: <Award className="w-6 h-6 text-purple" />,
  },
  {
    num: '04',
    title: 'PRIME : Pendampingan Desain Kemasan & Identitas Merek (Branding)',
    subtitle: 'Meningkatkan Daya Saing Pasar Produk Warga',
    desc: 'Pelatihan pembuatan identitas visual produk, label kemasan informatif sesuai regulasi (komposisi, tanggal kedaluwarsa, nilai gizi), serta pemilihan bahan kemasan tahan udara.',
    deliverables: [
      'Desain label kemasan modern untuk 6+ produk UMKM Padukuhan Kebonagung',
      'Penggunaan teknik sealing kemasan yang menjaga kerenyahan makanan',
    ],
    icon: <Layers className="w-6 h-6 text-purple" />,
  },
  {
    num: '05',
    title: 'Sosialisasi Legalitas Produk Usaha',
    subtitle: 'Pemberdayaan UMKM & Peningkatan Daya Saing Potensi Lokal',
    desc: 'Sinergi bersama pelaku UMKM desa dalam memberikan pemahaman dan pendampingan pengurusan izin dasar (NIB) serta sertifikasi produk (P-IRT/Halal) guna meningkatkan nilai jual komoditas lokal seperti olahan talas agar siap bersaing di pasar yang lebih luas.',
    deliverables: [
      'Panduan praktis pendaftaran Nomor Induk Berusaha (NIB)',
      'Leaflet alur pengurusan sertifikasi P-IRT dan Halal untuk produk olahan pangan',
      'Pendampingan langsung pendaftaran legalitas bagi perwakilan pelaku usaha mikro',
    ],
    icon: <Heart className="w-6 h-6 text-purple" />,
  },
];
