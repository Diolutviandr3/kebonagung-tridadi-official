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
    gallery: [],
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
        title: 'Kerja Bakti Bersih Dusun',
        caption: 'Dokumentasi kegiatan aksi gotong royong dan kerja bakti warga dalam menjaga kebersihan serta keasrian lingkungan Padukuhan Kebonagung.',
        tag: 'Kerja Bakti',
        colorScheme: 'from-cream-200 via-purple-200 to-cream-100',
        iconSymbol: '🧹',
        imageUrl: royong1,
      },
      {
        id: 'ry-2',
        title: 'Kerja Bakti Bersih Dusun',
        caption: 'Dokumentasi kegiatan aksi gotong royong dan kerja bakti warga dalam menjaga kebersihan serta keasrian lingkungan Padukuhan Kebonagung.',
        tag: 'Kerja Bakti',
        colorScheme: 'from-purple-100 via-cream-300 to-purple-200',
        iconSymbol: '🧹',
        imageUrl: royong2,
      },
      {
        id: 'ry-3',
        title: 'Kerja Bakti Bersih Dusun',
        caption: 'Dokumentasi kegiatan aksi gotong royong dan kerja bakti warga dalam menjaga kebersihan serta keasrian lingkungan Padukuhan Kebonagung.',
        tag: 'Kerja Bakti',
        colorScheme: 'from-purple-200 via-cream-100 to-purple-100',
        iconSymbol: '🧹',
        imageUrl: royong3,
      },
      {
        id: 'ry-4',
        title: 'Kerja Bakti Bersih Dusun',
        caption: 'Dokumentasi kegiatan aksi gotong royong dan kerja bakti warga dalam menjaga kebersihan serta keasrian lingkungan Padukuhan Kebonagung.',
        tag: 'Kerja Bakti',
        colorScheme: 'from-cream-100 via-purple-100 to-cream-300',
        iconSymbol: '🧹',
        imageUrl: royong4,
      },
      {
        id: 'ry-5',
        title: 'Kerja Bakti Bersih Dusun',
        caption: 'Dokumentasi kegiatan aksi gotong royong dan kerja bakti warga dalam menjaga kebersihan serta keasrian lingkungan Padukuhan Kebonagung.',
        tag: 'Kerja Bakti',
        colorScheme: 'from-purple-200 via-cream-200 to-purple-100',
        iconSymbol: '🧹',
        imageUrl: royong5,
      },
      {
        id: 'ry-6',
        title: 'Kerja Bakti Bersih Dusun',
        caption: 'Dokumentasi kegiatan aksi gotong royong dan kerja bakti warga dalam menjaga kebersihan serta keasrian lingkungan Padukuhan Kebonagung.',
        tag: 'Kerja Bakti',
        colorScheme: 'from-cream-200 via-purple-100 to-cream-300',
        iconSymbol: '🧹',
        imageUrl: royong6,
      },
      {
        id: 'ry-7',
        title: 'Kerja Bakti Bersih Dusun',
        caption: 'Dokumentasi kegiatan aksi gotong royong dan kerja bakti warga dalam menjaga kebersihan serta keasrian lingkungan Padukuhan Kebonagung.',
        tag: 'Kerja Bakti',
        colorScheme: 'from-purple-100 via-cream-100 to-purple-200',
        iconSymbol: '🧹',
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
    gallery: [],
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
    gallery: [],
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
        title: 'Taman Pembelajaran Al-Qur\'an (TPA)',
        caption: 'Dokumentasi kegiatan belajar membaca Al-Qur\'an, hafalan surat pendek, dan pembinaan karakter santri di Masjid Padukuhan Kebonagung.',
        tag: 'TPA Santri',
        colorScheme: 'from-purple-200 via-cream-100 to-purple-100',
        iconSymbol: '📖',
        imageUrl: tpa1,
      },
      {
        id: 'tpa-2',
        title: 'Taman Pembelajaran Al-Qur\'an (TPA)',
        caption: 'Dokumentasi kegiatan belajar membaca Al-Qur\'an, hafalan surat pendek, dan pembinaan karakter santri di Masjid Padukuhan Kebonagung.',
        tag: 'TPA Santri',
        colorScheme: 'from-cream-200 via-purple-200 to-cream-100',
        iconSymbol: '📖',
        imageUrl: tpa2,
      },
      {
        id: 'tpa-3',
        title: 'Taman Pembelajaran Al-Qur\'an (TPA)',
        caption: 'Dokumentasi kegiatan belajar membaca Al-Qur\'an, hafalan surat pendek, dan pembinaan karakter santri di Masjid Padukuhan Kebonagung.',
        tag: 'TPA Santri',
        colorScheme: 'from-purple-100 via-cream-300 to-purple-200',
        iconSymbol: '📖',
        imageUrl: tpa3,
      },
      {
        id: 'tpa-4',
        title: 'Taman Pembelajaran Al-Qur\'an (TPA)',
        caption: 'Dokumentasi kegiatan belajar membaca Al-Qur\'an, hafalan surat pendek, dan pembinaan karakter santri di Masjid Padukuhan Kebonagung.',
        tag: 'TPA Santri',
        colorScheme: 'from-cream-100 via-purple-100 to-cream-300',
        iconSymbol: '📖',
        imageUrl: tpa4,
      },
      {
        id: 'tpa-5',
        title: 'Taman Pembelajaran Al-Qur\'an (TPA)',
        caption: 'Dokumentasi kegiatan belajar membaca Al-Qur\'an, hafalan surat pendek, dan pembinaan karakter santri di Masjid Padukuhan Kebonagung.',
        tag: 'TPA Santri',
        colorScheme: 'from-purple-200 via-cream-200 to-purple-100',
        iconSymbol: '📖',
        imageUrl: tpa5,
      },
      {
        id: 'tpa-6',
        title: 'Taman Pembelajaran Al-Qur\'an (TPA)',
        caption: 'Dokumentasi kegiatan belajar membaca Al-Qur\'an, hafalan surat pendek, dan pembinaan karakter santri di Masjid Padukuhan Kebonagung.',
        tag: 'TPA Santri',
        colorScheme: 'from-cream-200 via-purple-100 to-cream-300',
        iconSymbol: '📖',
        imageUrl: tpa6,
      },
      {
        id: 'tpa-7',
        title: 'Taman Pembelajaran Al-Qur\'an (TPA)',
        caption: 'Dokumentasi kegiatan belajar membaca Al-Qur\'an, hafalan surat pendek, dan pembinaan karakter santri di Masjid Padukuhan Kebonagung.',
        tag: 'TPA Santri',
        colorScheme: 'from-purple-100 via-cream-100 to-purple-200',
        iconSymbol: '📖',
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
        title: 'Pengajian Rutin Masjid Al-Ma\'un',
        caption: 'Dokumentasi kegiatan pengajian rutin, kajian keislaman, doa bersama, dan silaturahmi jamaah di Masjid Al-Ma\'un Kebonagung.',
        tag: 'Pengajian Rutin',
        colorScheme: 'from-purple-100 via-cream-200 to-purple-200',
        iconSymbol: '🕌',
        imageUrl: kajian1,
      },
      {
        id: 'kj-2',
        title: 'Pengajian Rutin Masjid Al-Ma\'un',
        caption: 'Dokumentasi kegiatan pengajian rutin, kajian keislaman, doa bersama, dan silaturahmi jamaah di Masjid Al-Ma\'un Kebonagung.',
        tag: 'Pengajian Rutin',
        colorScheme: 'from-cream-200 via-purple-100 to-cream-100',
        iconSymbol: '🕌',
        imageUrl: kajian2,
      },
      {
        id: 'kj-3',
        title: 'Pengajian Rutin Masjid Al-Ma\'un',
        caption: 'Dokumentasi kegiatan pengajian rutin, kajian keislaman, doa bersama, dan silaturahmi jamaah di Masjid Al-Ma\'un Kebonagung.',
        tag: 'Pengajian Rutin',
        colorScheme: 'from-purple-200 via-cream-300 to-purple-100',
        iconSymbol: '🕌',
        imageUrl: kajian3,
      },
      {
        id: 'kj-4',
        title: 'Pengajian Rutin Masjid Al-Ma\'un',
        caption: 'Dokumentasi kegiatan pengajian rutin, kajian keislaman, doa bersama, dan silaturahmi jamaah di Masjid Al-Ma\'un Kebonagung.',
        tag: 'Pengajian Rutin',
        colorScheme: 'from-cream-300 via-purple-200 to-cream-200',
        iconSymbol: '🕌',
        imageUrl: kajian4,
      },
    ],
  },
];
