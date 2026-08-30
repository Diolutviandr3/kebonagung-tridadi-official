import React from 'react';
import { 
  Users, 
  Shovel, 
  Sprout, 
  Landmark, 
  BookOpen, 
  HeartHandshake 
} from 'lucide-react';

import royong1 from '../assets/royong1.JPG';
import royong2 from '../assets/royong2.JPG';
import royong3 from '../assets/royong3.JPG';
import royong4 from '../assets/royong4.JPG';
import royong5 from '../assets/royong5.JPG';
import royong6 from '../assets/royong6.JPG';
import royong7 from '../assets/royong7.JPG';

import karangtaruna1 from '../assets/karangtaruna1.jpg';
import karangtaruna2 from '../assets/karangtaruna2.jpg';
import karangtaruna3 from '../assets/karangtaruna3.jpg';
import karangtaruna4 from '../assets/karangtaruna4.jpg';
import karangtaruna5 from '../assets/karangtaruna5.jpg';
import karangtaruna6 from '../assets/karangtaruna6.jpg';
import karangtaruna7 from '../assets/karangtaruna7.jpg';
import karangtaruna8 from '../assets/karangtaruna8.jpg';

import talastika1 from '../assets/talastika1.jpg';
import talastika2 from '../assets/talastika2.jpg';
import talastika3 from '../assets/talastika3.JPG';
import talastika4 from '../assets/talastika4.JPG';
import talastika5 from '../assets/talastika5.JPG';
import talastika6 from '../assets/talastika6.JPG';

import tirakatan1 from '../assets/tirakatan1.jpg';
import tirakatan2 from '../assets/tirakatan2.jpg';
import tirakatan3 from '../assets/tirakatan3.JPG';
import tirakatan4 from '../assets/tirakatan4.JPG';
import tirakatan5 from '../assets/tirakatan5.JPG';
import tirakatan6 from '../assets/tirakatan6.JPG';
import tirakatan7 from '../assets/tirakatan7.JPG';
import tirakatan8 from '../assets/tirakatan8.JPG';
import tirakatan9 from '../assets/tirakatan9.JPG';

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

export interface PhotoDoc {
  id: string;
  title: string;
  caption: string;
  tag: string;
  colorScheme: string;
  iconSymbol: string;
  imageUrl?: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  category: string;
  schedule: string;
  time: string;
  location: string;
  description: string;
  organizer: string;
  icon: React.ReactNode;
  iconBg: string;
  badge: string;
  gallery: PhotoDoc[];
}

export const activities: ActivityItem[] = [
  {
    id: 'act-karang-taruna',
    title: 'Pertemuan Rutinan Karang Taruna',
    category: 'Kepemudaan',
    schedule: '2 Minggu Sekali',
    time: '19.30 - 22.00 WIB',
    location: 'Balai Pertemuan / Rumah Pemuda Bergilir',
    description: 'Wadah musyawarah pemuda-pemudi Padukuhan Kebonagung untuk merencanakan kegiatan kepemudaan, inovasi digital, olahraga, kepanitiaan peringatan hari besar, serta kepedulian sosial lingkungan.',
    organizer: 'Karang Taruna Kebonagung',
    icon: <Users className="w-6 h-6 text-purple" />,
    iconBg: 'from-purple-100 to-cream-200',
    badge: '2 Minggu Sekali',
    gallery: [
      {
        id: 'kt-1',
        title: 'Musyawarah Pemuda Karang Taruna',
        caption: 'Koordinasi rutin kepengurusan pemuda dalam merancang agenda kepemudaan dan program kemasyarakatan.',
        tag: 'Musyawarah',
        colorScheme: 'from-purple-200 via-cream-200 to-purple-100',
        iconSymbol: '👥',
        imageUrl: karangtaruna1,
      },
      {
        id: 'kt-2',
        title: 'Pemaparan Rencana Kerja Pemuda',
        caption: 'Penyusunan kepanitiaan acara dusun dan pembagian tugas kepengurusan.',
        tag: 'Program Kerja',
        colorScheme: 'from-cream-200 via-purple-100 to-cream-300',
        iconSymbol: '📋',
        imageUrl: karangtaruna2,
      },
      {
        id: 'kt-3',
        title: 'Diskusi Sinergi Bersama Mahasiswa UAD',
        caption: 'Kolaborasi pemuda dusun bersama Tim Pengabdian dalam pengembangan sistem informasi desa.',
        tag: 'Kolaborasi',
        colorScheme: 'from-purple-100 via-cream-100 to-purple-200',
        iconSymbol: '🤝',
        imageUrl: karangtaruna3,
      },
      {
        id: 'kt-4',
        title: 'Keakraban & Solidaritas Generasi Muda',
        caption: 'Membangun kebersamaan dan kekompakan pemuda-pemudi demi kemajuan Padukuhan Kebonagung.',
        tag: 'Solidaritas',
        colorScheme: 'from-cream-300 via-purple-200 to-cream-200',
        iconSymbol: '✨',
        imageUrl: karangtaruna4,
      },
      {
        id: 'kt-5',
        title: 'Evaluasi Pelaksanaan Kegiatan',
        caption: 'Sesi refleksi dan evaluasi bersama agar setiap kegiatan dusun berjalan semakin baik dan terorganisir.',
        tag: 'Evaluasi',
        colorScheme: 'from-purple-200 via-cream-100 to-purple-100',
        iconSymbol: '📊',
        imageUrl: karangtaruna5,
      },
      {
        id: 'kt-6',
        title: 'Persiapan Sarana & Prasarana Acara',
        caption: 'Kerjasama pemuda mempersiapkan perlengkapan demi kelancaran agenda padukuhan.',
        tag: 'Gotong Royong',
        colorScheme: 'from-cream-200 via-purple-200 to-cream-100',
        iconSymbol: '🛠️',
        imageUrl: karangtaruna6,
      },
      {
        id: 'kt-7',
        title: 'Aksi Kreativitas Pemuda',
        caption: 'Inisiatif karya dan ide kreatif pemuda dalam memajukan potensi desa.',
        tag: 'Kreativitas',
        colorScheme: 'from-purple-100 via-cream-300 to-purple-200',
        iconSymbol: '💡',
        imageUrl: karangtaruna7,
      },
      {
        id: 'kt-8',
        title: 'Foto Bersama Karang Taruna Kebonagung',
        caption: 'Dokumentasi kekompakan pengurus Karang Taruna Padukuhan Kebonagung.',
        tag: 'Kebersamaan',
        colorScheme: 'from-cream-100 via-purple-100 to-cream-300',
        iconSymbol: '📸',
        imageUrl: karangtaruna8,
      },
    ],
  },
  {
    id: 'act-kerja-bakti',
    title: 'Kerja Bakti Bersih Dusun',
    category: 'Gotong Royong',
    schedule: 'Tiap Minggu',
    time: '06.30 - 09.30 WIB',
    location: 'Lingkungan RT 01 - RT 04 Padukuhan Kebonagung',
    description: 'Aksi gotong royong warga membersihkan drainase saluran irigasi, pemangkasan dahan pohon, perapian bahu jalan dusun, pemilahan sampah, dan perawatan fasilitas umum demi lingkungan yang asri dan sehat.',
    organizer: 'Seluruh Warga & Pengurus RT/RW Kebonagung',
    icon: <Shovel className="w-6 h-6 text-purple" />,
    iconBg: 'from-cream-200 to-purple-100',
    badge: 'Tiap Minggu',
    gallery: [
      {
        id: 'ry-1',
        title: 'Pembersihan Saluran Air & Drainase Lingkungan',
        caption: 'Warga Kebonagung bergotong royong membersihkan endapan lumpur pada saluran air untuk mencegah genangan saat musim hujan.',
        tag: 'Drainase Lancar',
        colorScheme: 'from-cream-200 via-purple-200 to-cream-100',
        iconSymbol: '🌊',
        imageUrl: royong1,
      },
      {
        id: 'ry-2',
        title: 'Perapian Bahu Jalan & Pemotongan Rumput Liar',
        caption: 'Aksi pembersihan rumput liar dan perapian tanaman di sepanjang ruas jalan utama padukuhan.',
        tag: 'Jalan Bersih',
        colorScheme: 'from-purple-100 via-cream-300 to-purple-200',
        iconSymbol: '🌿',
        imageUrl: royong2,
      },
      {
        id: 'ry-3',
        title: 'Pengangkutan & Pemilahan Sampah Lingkungan',
        caption: 'Pengumpulan sampah ranting dan daun kering untuk diolah menjadi kompos organik yang bermanfaat bagi pertanian.',
        tag: 'Peduli Lingkungan',
        colorScheme: 'from-purple-200 via-cream-100 to-purple-100',
        iconSymbol: '♻️',
        imageUrl: royong3,
      },
      {
        id: 'ry-4',
        title: 'Pemeliharaan Fasilitas Umum & Tempat Ibadah',
        caption: 'Kerja bakti membersihkan halaman balai pertemuan, masjid, dan ruang publik padukuhan.',
        tag: 'Fasilitas Umum',
        colorScheme: 'from-cream-100 via-purple-100 to-cream-300',
        iconSymbol: '🧹',
        imageUrl: royong4,
      },
      {
        id: 'ry-5',
        title: 'Perapian Dahan Pohon Peneduh Jalan',
        caption: 'Pemangkasan dahan pohon yang rimbun demi kenyamanan dan keselamatan para pengendara yang melintas.',
        tag: 'Keamanan Lingkungan',
        colorScheme: 'from-purple-200 via-cream-200 to-purple-100',
        iconSymbol: '🌳',
        imageUrl: royong5,
      },
      {
        id: 'ry-6',
        title: 'Kebersamaan Warga Lintas Generasi',
        caption: 'Semangat gotong royong yang melibatkan bapak-bapak, pemuda, hingga lansia dalam menjaga keasrian dusun.',
        tag: 'Guyub Rukun',
        colorScheme: 'from-cream-200 via-purple-100 to-cream-300',
        iconSymbol: '🤝',
        imageUrl: royong6,
      },
      {
        id: 'ry-7',
        title: 'Santap Pagi & Ramah Tamah Warga',
        caption: 'Momen penuh keakraban menikmati teh hangat dan hidangan bersama seusai giat kerja bakti selesai.',
        tag: 'Keakraban Warga',
        colorScheme: 'from-purple-100 via-cream-100 to-purple-200',
        iconSymbol: '☕',
        imageUrl: royong7,
      },
    ],
  },
  {
    id: 'act-kwt',
    title: 'Pertemuan Rutin Kelompok Wanita Tani',
    category: 'Pemberdayaan Wanita',
    schedule: 'Seminggu 3 Kali',
    time: '15.30 - 17.30 WIB',
    location: 'Kebun Bibit & Rumah Kelompok KWT Kebonagung',
    description: 'Kegiatan budidaya tanaman pangan lokal, perawatan kebun bibit sayuran pekarangan, pengolahan diversifikasi produk berbasis tepung talas (TALASTIKA & VESTA), serta arisan kelompok tani wanita.',
    organizer: 'Kelompok Wanita Tani (KWT) Kebonagung',
    icon: <Sprout className="w-6 h-6 text-purple" />,
    iconBg: 'from-purple-200 to-cream-100',
    badge: 'Seminggu 3 Kali',
    gallery: [
      {
        id: 'kwt-1',
        title: 'Praktik Pembuatan Tepung Talas',
        caption: 'Ibu-ibu KWT mempraktikkan proses perendaman, pengeringan, dan penepungan talas berkualitas.',
        tag: 'Tepung Talas',
        colorScheme: 'from-purple-100 via-cream-200 to-purple-200',
        iconSymbol: '🥣',
        imageUrl: talastika1,
      },
      {
        id: 'kwt-2',
        title: 'Pengolahan Produk Nugget & Beras Analog',
        caption: 'Inovasi diversifikasi olahan pangan turunan tepung talas menjadi makanan sehat bergizi tinggi.',
        tag: 'Diversifikasi Pangan',
        colorScheme: 'from-cream-200 via-purple-100 to-cream-100',
        iconSymbol: '👩‍🍳',
        imageUrl: talastika2,
      },
      {
        id: 'kwt-3',
        title: 'Edukasi & Diskusi Ketahanan Pangan Keluarga',
        caption: 'Sesi bertukar pengalaman antar-anggota KWT dalam mengoptimalkan pekarangan rumah tangga.',
        tag: 'Pangan Mandiri',
        colorScheme: 'from-purple-200 via-cream-300 to-purple-100',
        iconSymbol: '🌱',
        imageUrl: talastika3,
      },
      {
        id: 'kwt-4',
        title: 'Pengujian Hasil Olahan Bersama',
        caption: 'Uji rasa dan evaluasi tekstur olahan makanan sebelum diproduksi untuk dipasarkan.',
        tag: 'Uji Kualitas',
        colorScheme: 'from-cream-300 via-purple-200 to-cream-200',
        iconSymbol: '✨',
        imageUrl: talastika4,
      },
      {
        id: 'kwt-5',
        title: 'Pengemasan Higienis Produk KWT',
        caption: 'Pelatihan teknik pengemasan kedap udara dan penempelan label informasi produk.',
        tag: 'Pengemasan',
        colorScheme: 'from-purple-100 via-cream-100 to-purple-200',
        iconSymbol: '📦',
        imageUrl: talastika5,
      },
      {
        id: 'kwt-6',
        title: 'Foto Bersama Pengurus & Anggota KWT',
        caption: 'Kekompakan ibu-ibu Kelompok Wanita Tani Padukuhan Kebonagung.',
        tag: 'Pemberdayaan',
        colorScheme: 'from-cream-100 via-purple-100 to-cream-300',
        iconSymbol: '📸',
        imageUrl: talastika6,
      },
    ],
  },
  {
    id: 'act-merti-dusun',
    title: 'Merti Dusun & Gelar Budaya Tradisi',
    category: 'Seni & Budaya',
    schedule: 'Agenda Tahunan (Bulan Sapar/Rejeb)',
    time: '08.00 WIB - Selesai',
    location: 'Kawasan Padukuhan Kebonagung',
    description: 'Upacara adat wujud syukur berkah bumi, kirab gunungan hasil tani, doa bersama lintas tokoh masyarakat, dan pementasan seni karawitan tradisional serta malam tirakatan warga.',
    organizer: 'Paguyuban Kebudayaan & Tokoh Adat Kebonagung',
    icon: <Landmark className="w-6 h-6 text-purple" />,
    iconBg: 'from-cream-100 to-purple-200',
    badge: 'Tradisi Tahunan',
    gallery: [
      {
        id: 'md-1',
        title: 'Malam Tirakatan & Refleksi Bersama',
        caption: 'Pertemuan khidmat warga dalam rangka menyambut agenda budaya dan mendoakan ketentraman padukuhan.',
        tag: 'Tirakatan',
        colorScheme: 'from-purple-200 via-cream-200 to-purple-100',
        iconSymbol: '🕯️',
        imageUrl: tirakatan1,
      },
      {
        id: 'md-2',
        title: 'Kirab Gunungan Hasil Bumi Kebonagung',
        caption: 'Arak-arakan gunungan sayuran dan hasil panen lokal yang diusung warga berpakaian adat tradisional Jawa.',
        tag: 'Kirab Budaya',
        colorScheme: 'from-cream-200 via-purple-100 to-cream-300',
        iconSymbol: '🌾',
        imageUrl: tirakatan2,
      },
      {
        id: 'md-3',
        title: 'Prosesi Kenduri & Doa Syukur Bersama',
        caption: 'Doa bersama dipimpin sesepuh dusun sebagai ungkapan rasa syukur atas panen yang melimpah.',
        tag: 'Doa Syukur',
        colorScheme: 'from-purple-100 via-cream-100 to-purple-200',
        iconSymbol: '🤲',
        imageUrl: tirakatan3,
      },
      {
        id: 'md-4',
        title: 'Pementasan Seni Karawitan Gamelan',
        caption: 'Tabuhan gending gamelan yang dimainkan secara harmonis oleh paguyuban karawitan Kebonagung.',
        tag: 'Karawitan',
        colorScheme: 'from-cream-300 via-purple-200 to-cream-100',
        iconSymbol: '🎶',
        imageUrl: tirakatan4,
      },
      {
        id: 'md-5',
        title: 'Gelar Pertunjukan Seni Tradisional',
        caption: 'Pentas seni rakyat yang disaksikan ratusan warga dengan penuh suka cita dan kebersamaan.',
        tag: 'Pentas Rakyat',
        colorScheme: 'from-purple-200 via-cream-100 to-purple-100',
        iconSymbol: '🎭',
        imageUrl: tirakatan5,
      },
      {
        id: 'md-6',
        title: 'Kebersamaan Tokoh Adat & Warga',
        caption: 'Sinergi antar-generasi dalam melestarikan warisan adiluhung budaya Jawa di Kebonagung.',
        tag: 'Kearifan Lokal',
        colorScheme: 'from-cream-200 via-purple-200 to-cream-100',
        iconSymbol: '👥',
        imageUrl: tirakatan6,
      },
      {
        id: 'md-7',
        title: 'Pembagian Berkah Hasil Bumi',
        caption: 'Prosesi pembagian gunungan berkah tani kepada seluruh warga sebagai simbol kemakmuran bersama.',
        tag: 'Berkah Tani',
        colorScheme: 'from-purple-100 via-cream-300 to-purple-200',
        iconSymbol: '🌽',
        imageUrl: tirakatan7,
      },
      {
        id: 'md-8',
        title: 'Pentas Musik & Kebudayaan',
        caption: 'Hiburan musik dan kesenian rakyat yang memeriahkan suasana peringatan tradisi dusun.',
        tag: 'Gelar Budaya',
        colorScheme: 'from-cream-100 via-purple-100 to-cream-300',
        iconSymbol: '🎸',
        imageUrl: tirakatan8,
      },
      {
        id: 'md-9',
        title: 'Dokumentasi Penutupan Acara Budaya',
        caption: 'Foto bersama panitia dan tokoh masyarakat di akhir rangkaian acara Merti Dusun Kebonagung.',
        tag: 'Sukses Acara',
        colorScheme: 'from-purple-200 via-cream-200 to-purple-100',
        iconSymbol: '📸',
        imageUrl: tirakatan9,
      },
    ],
  },
  {
    id: 'act-tpa',
    title: 'Taman Pembelajaran Al-Qur\'an (TPA)',
    category: 'Pendidikan & Keagamaan',
    schedule: 'Tiap Malam Sabtu dan Minggu',
    time: '18.30 - 20.00 WIB (Ba\'da Maghrib)',
    location: 'Masjid Al-Ma\'un / Al-Huda Kebonagung',
    description: 'Pembinaan belajar membaca Al-Qur\'an (metode Iqro\' dan Tilawati), hafalan surat pendek juz 30, doa harian, serta penanaman adab dan akhlak mulia bagi anak-anak dan generasi muda dusun.',
    organizer: 'Pengurus TPA & Remaja Masjid Kebonagung',
    icon: <BookOpen className="w-6 h-6 text-purple" />,
    iconBg: 'from-purple-100 to-cream-300',
    badge: 'Tiap Malam Sabtu & Minggu',
    gallery: [
      {
        id: 'tpa-1',
        title: 'Bimbingan Membaca Al-Qur\'an & Iqro\'',
        caption: 'Ustadz dan Ustadzah membimbing santri melafalkan huruf hijaiyah dan tajwid dengan benar.',
        tag: 'Belajar Al-Qur\'an',
        colorScheme: 'from-purple-200 via-cream-100 to-purple-100',
        iconSymbol: '📖',
        imageUrl: tpa1,
      },
      {
        id: 'tpa-2',
        title: 'Hafalan Surat Pendek & Doa Harian',
        caption: 'Santri cilik TPA menghafalkan surat-surat pendek dalam Juz \'Amma serta doa sehari-hari.',
        tag: 'Hafalan Santri',
        colorScheme: 'from-cream-200 via-purple-200 to-cream-100',
        iconSymbol: '🤲',
        imageUrl: tpa2,
      },
      {
        id: 'tpa-3',
        title: 'Praktik Gerakan & Bacaan Sholat Fardhu',
        caption: 'Edukasi tata cara wudhu dan sholat berjamaah yang benar sesuai tuntunan Rasulullah SAW.',
        tag: 'Praktik Sholat',
        colorScheme: 'from-purple-100 via-cream-300 to-purple-200',
        iconSymbol: '🕌',
        imageUrl: tpa3,
      },
      {
        id: 'tpa-4',
        title: 'Kisah Teladan Nabi & Nilai Karakter',
        caption: 'Penyampaian kisah para nabi dan sahabat untuk membangun budi pekerti luhur santri.',
        tag: 'Kisah Nabi',
        colorScheme: 'from-cream-100 via-purple-100 to-cream-300',
        iconSymbol: '🌟',
        imageUrl: tpa4,
      },
      {
        id: 'tpa-5',
        title: 'Belajar Menulis Huruf Arab & Kaligrafi',
        caption: 'Pengenalan kaidah penulisan khat Arab dasar untuk melatih kecermatan dan keindahan seni Islam.',
        tag: 'Kaligrafi Cilik',
        colorScheme: 'from-purple-200 via-cream-200 to-purple-100',
        iconSymbol: '✍️',
        imageUrl: tpa5,
      },
      {
        id: 'tpa-6',
        title: 'Aktivitas Ceria & Games Edukatif Santri',
        caption: 'Kuis interaktif keislaman yang menyenangkan agar santri selalu antusias belajar di masjid.',
        tag: 'Games Edukatif',
        colorScheme: 'from-cream-200 via-purple-100 to-cream-300',
        iconSymbol: '🎨',
        imageUrl: tpa6,
      },
      {
        id: 'tpa-7',
        title: 'Foto Bersama Santri & Pembina TPA',
        caption: 'Dokumentasi santri Taman Pembelajaran Al-Qur\'an Padukuhan Kebonagung.',
        tag: 'Generasi Qur\'ani',
        colorScheme: 'from-purple-100 via-cream-100 to-purple-200',
        iconSymbol: '📸',
        imageUrl: tpa7,
      },
    ],
  },
  {
    id: 'act-pengajian',
    title: 'Pengajian Rutin Masjid Al-Ma\'un',
    category: 'Keagamaan',
    schedule: 'Tiap Malam Jum\'at',
    time: '19.30 WIB - Selesai (Ba\'da Isya)',
    location: 'Masjid Al-Ma\'un Kebonagung',
    description: 'Kajian keislaman rutin, pembacaan surat Yasin, tahlil bersama, dan siraman rohani untuk mempererat tali silaturahmi serta ukhuwah islamiyah seluruh warga jamaah Padukuhan Kebonagung.',
    organizer: 'Takmir Masjid Al-Ma\'un Kebonagung',
    icon: <HeartHandshake className="w-6 h-6 text-purple" />,
    iconBg: 'from-cream-200 to-purple-200',
    badge: 'Tiap Malam Jum\'at',
    gallery: [
      {
        id: 'kj-1',
        title: 'Kajian Rutin & Tausiyah Agama',
        caption: 'Penyampaian siraman rohani oleh penceramah mengenai fiqih ibadah, muamalah, dan akhlak berkeluarga.',
        tag: 'Tausiyah',
        colorScheme: 'from-purple-100 via-cream-200 to-purple-200',
        iconSymbol: '🎙️',
        imageUrl: kajian1,
      },
      {
        id: 'kj-2',
        title: 'Pembacaan Surat Yasin & Dzikir Bersama',
        caption: 'Lantunan ayat suci Al-Qur\'an dan dzikir berjamaah untuk mendoakan keselamatan seluruh warga.',
        tag: 'Dzikir Bersama',
        colorScheme: 'from-cream-200 via-purple-100 to-cream-100',
        iconSymbol: '🤲',
        imageUrl: kajian2,
      },
      {
        id: 'kj-3',
        title: 'Jamaah Khusyuk Mengikuti Pengajian',
        caption: 'Antusiasme jamaah bapak-bapak dan ibu-ibu memadati ruang utama Masjid Al-Ma\'un.',
        tag: 'Jamaah Khusyuk',
        colorScheme: 'from-purple-200 via-cream-300 to-purple-100',
        iconSymbol: '🕌',
        imageUrl: kajian3,
      },
      {
        id: 'kj-4',
        title: 'Ramah Tamah & Mempererat Ukhuwah Islamiyah',
        caption: 'Momen silaturahmi saling bertegur sapa seusai kajian memperkuat kerukunan hidup bermasyarakat.',
        tag: 'Ukhuwah Warga',
        colorScheme: 'from-cream-300 via-purple-200 to-cream-200',
        iconSymbol: '🤝',
        imageUrl: kajian4,
      },
    ],
  },
];
