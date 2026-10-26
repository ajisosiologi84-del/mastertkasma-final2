export interface OptionItem {
  key: string;
  label: string;
}

export interface SubjectPresets {
  category: string;
  konteksLokalOptions: OptionItem[];
  stimulusOptions: OptionItem[];
  defaultSelectedKonteks: string[];
  defaultSelectedStimulus: string[];
}

export function getSubjectPresets(subjectName: string = ''): SubjectPresets {
  const s = (subjectName || '').toLowerCase().trim();

  // 1. Matematika & Matematika Tingkat Lanjut
  if (s.includes('matematika')) {
    return {
      category: 'Eksakta / Matematika',
      konteksLokalOptions: [
        { key: 'Ekonomi & Finansial', label: '💰 Ekonomi, Perbankan & Finansial ID' },
        { key: 'Sains & Teknologi Tradisional', label: '⚙️ Etno-Matematika & Rancang Bangun' },
        { key: 'Statistik Demografi', label: '📊 Sensus Demografi & Data BPS ID' },
        { key: 'Geografis & Lingkungan', label: '🗺️ Pemetaan Topografi & Geospasial' },
        { key: 'Transportasi & Logistik', label: '🚚 Logistik, Transportasi & Rute ID' },
        { key: 'Pertanian & Pangan', label: '🌾 Produksi Pertanian & Ketahanan Pangan' },
        { key: 'Profil Pelajar Pancasila', label: '🇮🇩 Profil Pelajar Pancasila & Bernalar Kritis' },
        { key: 'Kehidupan Sehari-hari', label: '🏠 Realitas Masalah Sehari-hari' },
      ],
      stimulusOptions: [
        { key: 'Data/Tabel', label: '📊 Tabel Matriks Data & Distribusi' },
        { key: 'Grafik/Diagram', label: '📈 Grafik Fungsi, Tren & Diagram Batang/Lingkaran' },
        { key: 'Geometri/Spasial', label: '📐 Gambar Geometri Spasial & Bangun Ruang' },
        { key: 'Pemodelan Matematika', label: '🧮 Pemodelan Persamaan & Skenario Masalah' },
        { key: 'Kasus Nyata', label: '🔍 Studi Kasus Optimasi & Peluang' },
        { key: 'Diagram Alur', label: '🔀 Diagram Alur (Flowchart) & Algoritma' },
      ],
      defaultSelectedKonteks: ['Ekonomi & Finansial', 'Statistik Demografi', 'Kehidupan Sehari-hari'],
      defaultSelectedStimulus: ['Data/Tabel', 'Grafik/Diagram', 'Pemodelan Matematika', 'Kasus Nyata'],
    };
  }

  // 2. Fisika
  if (s.includes('fisika')) {
    return {
      category: 'Sains Fisika',
      konteksLokalOptions: [
        { key: 'Teknologi Tradisional', label: '⚙️ Etno-Fisika & Alat Tradisional ID' },
        { key: 'Energi Terbarukan ID', label: '⚡ PLTA, Geothermal & Energi Surya ID' },
        { key: 'Kebencanaan Geologis', label: '🌋 Mitigasi Gempa & Gelombang Tsunami' },
        { key: 'Otomotif & Transportasi', label: '🚗 Transportasi Kereta Cepat & Otomotif' },
        { key: 'Kelautan & Maritim', label: '🌊 Fisika Gelombang Laut & Kapal Maritim' },
        { key: 'Profil Pelajar Pancasila', label: '🇮🇩 Profil Pelajar Pancasila & Inovasi' },
      ],
      stimulusOptions: [
        { key: 'Grafik/Diagram', label: '📈 Grafik Hubungan Variabel & Kinematika' },
        { key: 'Skema Alat/Sketsa', label: '🛠️ Skema Rangkaian Listrik & Alat Fisika' },
        { key: 'Data/Tabel', label: '📊 Tabel Hasil Eksperimen & Pengukuran' },
        { key: 'Kasus Nyata', label: '🔍 Skenario Permasalahan Fisika Terapan' },
        { key: 'Vektor & Diagram Gaya', label: '🏹 Diagram Bebas Gaya & Vektor' },
        { key: 'Teks Bacaan', label: '📖 Artikel Penelitian Teknologi Fisika' },
      ],
      defaultSelectedKonteks: ['Energi Terbarukan ID', 'Kebencanaan Geologis', 'Teknologi Tradisional'],
      defaultSelectedStimulus: ['Grafik/Diagram', 'Skema Alat/Sketsa', 'Data/Tabel', 'Kasus Nyata'],
    };
  }

  // 3. Kimia
  if (s.includes('kimia')) {
    return {
      category: 'Sains Kimia',
      konteksLokalOptions: [
        { key: 'Kekayaan Alam & Tambang', label: '💎 Sumber Daya Tambang & Mineral ID' },
        { key: 'Pangan & Fermentasi', label: '🌾 Kimia Pangan, Tempe & Industri Lokal' },
        { key: 'Lingkungan & Polusi', label: '🌿 Pengolahan Limbah & Pencemaran Lingkungan' },
        { key: 'Farmasi & Herbal ID', label: '💊 Obat Tradisional, Jamu & Bahan Alam' },
        { key: 'Industri Kimia ID', label: '🏭 Industri Pupuk, Semen & Minyak Bumi ID' },
        { key: 'Profil Pelajar Pancasila', label: '🇮🇩 Profil Pelajar Pancasila & Kepedulian' },
      ],
      stimulusOptions: [
        { key: 'Data/Tabel', label: '📊 Tabel Data Reaksi & Konsentrasi pH' },
        { key: 'Struktur Molekul', label: '🧪 Diagram Struktur Kimia & Ikatan' },
        { key: 'Grafik/Diagram', label: '📈 Kurva Titrasi & Grafik Laju Reaksi' },
        { key: 'Skema Laboratorium', label: '🔬 Skema Apparatus Laboratorium Kimia' },
        { key: 'Kasus Nyata', label: '🔍 Studi Kasus Lingkungan & Bahan Kimia' },
        { key: 'Berita/Artikel', label: '📰 Artikel Isu Kimia & Lingkungan Aktual' },
      ],
      defaultSelectedKonteks: ['Lingkungan & Polusi', 'Pangan & Fermentasi', 'Kekayaan Alam & Tambang'],
      defaultSelectedStimulus: ['Data/Tabel', 'Struktur Molekul', 'Grafik/Diagram', 'Kasus Nyata'],
    };
  }

  // 4. Biologi
  if (s.includes('biologi')) {
    return {
      category: 'Sains Biologi',
      konteksLokalOptions: [
        { key: 'Biodiversitas Nusantara', label: '🐅 Keanekaragaman Hayati & Fauna Endemik ID' },
        { key: 'Ekologi & Hutan Hujan', label: '🌿 Ekosistem Hutan Mangrove & Tropis' },
        { key: 'Kesehatan Masyarakat', label: '🏥 Isu Kesehatan, Epidemiologi & Vaksin ID' },
        { key: 'Bioteknologi Lokal', label: '🧬 Bioteknologi Pangan & Pertanian ID' },
        { key: 'Kearifan Ekologis', label: '🏛️ Kearifan Lokal Konservasi Alam' },
        { key: 'Profil Pelajar Pancasila', label: '🇮🇩 Profil Pelajar Pancasila & Pelestarian' },
      ],
      stimulusOptions: [
        { key: 'Gambar/Ilustrasi', label: '🖼️ Gambar Anatomi, Daur Hidup & Sel' },
        { key: 'Data/Tabel', label: '📊 Tabel Data Hasil Observasi / Genetika' },
        { key: 'Grafik/Diagram', label: '📈 Diagram Jaring Makanan & Tren Populasi' },
        { key: 'Kasus Nyata', label: '🔍 Studi Kasus Gangguan Organ / Ekosistem' },
        { key: 'Diagram Alur Daur', label: '🔄 Diagram Daur Biogeokimia / Metabolisme' },
        { key: 'Berita/Artikel', label: '📰 Artikel Riset Kesehatan & Lingkungan' },
      ],
      defaultSelectedKonteks: ['Biodiversitas Nusantara', 'Kesehatan Masyarakat', 'Ekologi & Hutan Hujan'],
      defaultSelectedStimulus: ['Gambar/Ilustrasi', 'Data/Tabel', 'Grafik/Diagram', 'Kasus Nyata'],
    };
  }

  // 5. Sosiologi
  if (s.includes('sosiologi')) {
    return {
      category: 'Sosiologi & Masyarakat',
      konteksLokalOptions: [
        { key: 'Budaya Nusantara', label: '🎭 Budaya Nusantara (Adat, Tradisi & Nilai)' },
        { key: 'Kehidupan Sosial', label: '👥 Kehidupan Sosial, Interaksi & Komunitas' },
        { key: 'Disrupsi Digital Sosial', label: '📱 Interaksi Virtual, Sosmed & Perubahan Sosial' },
        { key: 'Isu Kontemporer', label: '📢 Masalah Sosial, Konflik & Realitas Empiris' },
        { key: 'Keragaman Etnis', label: '🌈 Keragaman Etnis, Multikultural & Inklusivitas' },
        { key: 'Ekonomi Rakyat', label: '💰 Stratifikasi Sosial & Ekonomi Masyarakat' },
        { key: 'Profil Pelajar Pancasila', label: '🇮🇩 Profil Pelajar Pancasila & Harmoni Sosial' },
      ],
      stimulusOptions: [
        { key: 'Kasus Nyata', label: '🔍 Skenario Kasus Realitas Sosial / Etnografi' },
        { key: 'Data/Tabel', label: '📊 Tabel Data Demografi & Survei Sosial' },
        { key: 'Berita/Artikel', label: '📰 Artikel Berita / Opini Fenomena Sosial' },
        { key: 'Cerita Pendek', label: '📚 Anekdot / Cerita Skenario Kehidupan' },
        { key: 'Pernyataan Tokoh', label: '🎙️ Transkrip Wawancara & Kutipan Tokoh' },
        { key: 'Gambar/Ilustrasi', label: '🖼️ Foto Dokumenter / Infografis Sosial' },
      ],
      defaultSelectedKonteks: ['Budaya Nusantara', 'Kehidupan Sosial', 'Disrupsi Digital Sosial', 'Isu Kontemporer'],
      defaultSelectedStimulus: ['Kasus Nyata', 'Data/Tabel', 'Berita/Artikel', 'Pernyataan Tokoh'],
    };
  }

  // 6. Ekonomi
  if (s.includes('ekonomi')) {
    return {
      category: 'Ekonomi & Bisnis',
      konteksLokalOptions: [
        { key: 'Ekonomi Rakyat', label: '💰 Ekonomi Rakyat, UMKM & Pasar Tradisional' },
        { key: 'Kebijakan Fiskal Moneter', label: '🏦 Kebijakan Bank Indonesia, Tax & Inflasi' },
        { key: 'Pasar Digital & E-Commerce', label: '🛒 Marketplace, Start-up & Fintech ID' },
        { key: 'Perdagangan Internasional', label: '🌾 Ekspor-Impor & Potensi Komoditas ID' },
        { key: 'Keuangan Inklusif', label: '💳 Koperasi, Literasi Keuangan & Investasi' },
        { key: 'Profil Pelajar Pancasila', label: '🇮🇩 Profil Pelajar Pancasila & Kemandirian' },
      ],
      stimulusOptions: [
        { key: 'Data/Tabel', label: '📊 Tabel Kurva Permintaan-Penawaran & Neraca' },
        { key: 'Grafik/Diagram', label: '📈 Grafik Tren Laju Inflasi, PDB & Saham' },
        { key: 'Dokumen Resmi', label: '📜 Laporan Keuangan, Slip / Dokumen Bisnis' },
        { key: 'Kasus Nyata', label: '🔍 Studi Kasus Perilaku Konsumen & Produsen' },
        { key: 'Berita/Artikel', label: '📰 Berita Isu Ekonomi Makro / Mikro' },
        { key: 'Peta/Denah', label: '🗺️ Peta Distribusi Komoditas Ekonomi' },
      ],
      defaultSelectedKonteks: ['Ekonomi Rakyat', 'Kebijakan Fiskal Moneter', 'Pasar Digital & E-Commerce'],
      defaultSelectedStimulus: ['Data/Tabel', 'Grafik/Diagram', 'Dokumen Resmi', 'Kasus Nyata'],
    };
  }

  // 7. Geografi
  if (s.includes('geografi')) {
    return {
      category: 'Geografi & Kebumi-an',
      konteksLokalOptions: [
        { key: 'Geografis Indonesia', label: '🗺️ Kewilayahan, Keanekaragaman Geospasial ID' },
        { key: 'Kebencanaan Geologis', label: '🌋 Vulkanologi, Mitigasi Bencana & Gempa ID' },
        { key: 'Demografi & Urbanisasi', label: '👥 Dinamika Kependudukan & Migrasi ID' },
        { key: 'Konservasi & Ekologi', label: '🌿 Pemanfaatan Sumber Daya Alam & Hutan' },
        { key: 'Tata Ruang Wilayah', label: '🏗️ Pengembangan Wilayah & Poros Maritim' },
        { key: 'Profil Pelajar Pancasila', label: '🇮🇩 Profil Pelajar Pancasila & Cinta Tanah Air' },
      ],
      stimulusOptions: [
        { key: 'Peta/Denah', label: '🗺️ Peta Geospasial, Peta Tematik & Kontur' },
        { key: 'Gambar/Ilustrasi', label: '🖼️ Citra Satelit, Foto Udara & Infografis' },
        { key: 'Data/Tabel', label: '📊 Tabel Data Demografi & Iklim' },
        { key: 'Grafik/Diagram', label: '📈 Diagram Piramida Penduduk & Klimatograf' },
        { key: 'Kasus Nyata', label: '🔍 Studi Kasus Bencana Alam / Tata Ruang' },
        { key: 'Berita/Artikel', label: '📰 Artikel Berita Geografi & Lingkungan' },
      ],
      defaultSelectedKonteks: ['Geografis Indonesia', 'Kebencanaan Geologis', 'Demografi & Urbanisasi'],
      defaultSelectedStimulus: ['Peta/Denah', 'Gambar/Ilustrasi', 'Data/Tabel', 'Kasus Nyata'],
    };
  }

  // 8. Sejarah
  if (s.includes('sejarah')) {
    return {
      category: 'Sejarah & Kebangsaan',
      konteksLokalOptions: [
        { key: 'Perjuangan Kemerdekaan', label: '🇮🇩 Peristiwa Proklamasi & Perjuangan RI' },
        { key: 'Kerajaan Nusantara', label: '🏰 Kerajaan Hindu-Buddha & Islam Nusantara' },
        { key: 'Pergerakan Nasional', label: '🕊️ Sumpah Pemuda, Sumpah Palapa & Organisasi' },
        { key: 'Sejarah Lokal Daerah', label: '🏛️ Peristiwa Sejarah Lokal di Berbagai Daerah' },
        { key: 'Diplomasi Internasional', label: '🌍 Konferensi Asia Afrika & KAA/GNB' },
        { key: 'Profil Pelajar Pancasila', label: '🇮🇩 Profil Pelajar Pancasila & Nasionalisme' },
      ],
      stimulusOptions: [
        { key: 'Dokumen Resmi', label: '📜 Arsip Historis, Surat Proklamasi & Naskah' },
        { key: 'Gambar/Ilustrasi', label: '🖼️ Foto Historis, Peta Sejarah & Diorama' },
        { key: 'Pernyataan Tokoh', label: '🎙️ Transkrip Kesaksian & Pidato Tokoh' },
        { key: 'Teks Bacaan', label: '📖 Narasi Kronologis & Biografi Tokoh' },
        { key: 'Data/Tabel', label: '📊 Tabel Timeline Peristiwa & Perbandingan Era' },
        { key: 'Kasus Nyata', label: '🔍 Studi Kasus Dampak Peristiwa Sejarah' },
      ],
      defaultSelectedKonteks: ['Perjuangan Kemerdekaan', 'Pergerakan Nasional', 'Kerajaan Nusantara'],
      defaultSelectedStimulus: ['Dokumen Resmi', 'Gambar/Ilustrasi', 'Pernyataan Tokoh', 'Teks Bacaan'],
    };
  }

  // 9. Antropologi
  if (s.includes('antropologi')) {
    return {
      category: 'Antropologi & Etnografi',
      konteksLokalOptions: [
        { key: 'Budaya Nusantara', label: '🎭 Tradisi, Ritus & Sistem Kekerabatan ID' },
        { key: 'Teknologi Tradisional', label: '⚙️ Etno-Sains, Arsitektur & Senjata Adat' },
        { key: 'Kearifan Lokal', label: '🏛️ Sistem Kepercayaan & Konservasi Adat' },
        { key: 'Keragaman Etnis', label: '🌈 Bahasa Daerah, Seni Tradisional & Folklore' },
        { key: 'Bahasa & Dialek', label: '🗣️ Keanekaragaman Dialek & Bahasa Ibu' },
        { key: 'Profil Pelajar Pancasila', label: '🇮🇩 Profil Pelajar Pancasila & Kebhinekaan' },
      ],
      stimulusOptions: [
        { key: 'Kasus Nyata', label: '🔍 Catatan Etnografi & Studi Kasus Adat' },
        { key: 'Gambar/Ilustrasi', label: '🖼️ Foto Artefak, Pakaian Adat & Rumah Adat' },
        { key: 'Pernyataan Tokoh', label: '🎙️ Wawancara Pemangku Adat & Antropolog' },
        { key: 'Cerita Pendek', label: '📚 Mitos, Legenda & Cerita Rakyat' },
        { key: 'Data/Tabel', label: '📊 Matriks Suku Bangsa & Peta Persebaran' },
        { key: 'Teks Bacaan', label: '📖 Artikel Kajian Budaya & Antropologi' },
      ],
      defaultSelectedKonteks: ['Budaya Nusantara', 'Teknologi Tradisional', 'Kearifan Lokal', 'Keragaman Etnis'],
      defaultSelectedStimulus: ['Kasus Nyata', 'Gambar/Ilustrasi', 'Pernyataan Tokoh', 'Cerita Pendek'],
    };
  }

  // 10. Pendidikan Pancasila / PPKN
  if (s.includes('pancasila') || s.includes('ppkn') || s.includes('kewarganegaraan')) {
    return {
      category: 'Pancasila & Kebangsaan',
      konteksLokalOptions: [
        { key: 'Nilai-Nilai Pancasila', label: '🏛️ Pengamalan Sila-Sila Pancasila' },
        { key: 'Konstitusi & UUD 1945', label: '📜 Penegakan Hukum, Hak & Kewajiban' },
        { key: 'Bhineka Tunggal Ika', label: '🌈 Integrasi Nasional & Toleransi' },
        { key: 'NKRI & Wawasan Nusantara', label: '🇮🇩 Kedaulatan Wilayah & Pertahanan' },
        { key: 'Isu Kebijakan Publik', label: '📢 Demokrasi, Pemilu & Transparansi' },
        { key: 'Profil Pelajar Pancasila', label: '🇮🇩 Profil Pelajar Pancasila & Karakter' },
      ],
      stimulusOptions: [
        { key: 'Dokumen Resmi', label: '📜 Pasal UUD 1945, Undang-Undang & Regulasi' },
        { key: 'Kasus Nyata', label: '🔍 Studi Kasus Pelanggaran Hak & Kewajiban' },
        { key: 'Berita/Artikel', label: '📰 Artikel Isu Demokrasi & Kebijakan Publik' },
        { key: 'Pernyataan Tokoh', label: '🎙️ Pernyataan Tokoh Kebangsaan & Etika' },
        { key: 'Data/Tabel', label: '📊 Tabel Matriks Indikator Kebijakan' },
        { key: 'Gambar/Ilustrasi', label: '🖼️ Poster Kampanye Kebangsaan & Karikatur' },
      ],
      defaultSelectedKonteks: ['Nilai-Nilai Pancasila', 'Konstitusi & UUD 1945', 'Bhineka Tunggal Ika'],
      defaultSelectedStimulus: ['Dokumen Resmi', 'Kasus Nyata', 'Berita/Artikel', 'Pernyataan Tokoh'],
    };
  }

  // 11. Bahasa (Indonesia, Inggris, atau Asing)
  if (s.includes('bahasa') || s.includes('inggris') || s.includes('indonesia') || s.includes('jepang') || s.includes('mandarin') || s.includes('korea') || s.includes('jerman') || s.includes('prancis') || s.includes('arab')) {
    const isForeign = s.includes('jepang') || s.includes('mandarin') || s.includes('korea') || s.includes('jerman') || s.includes('prancis') || s.includes('arab');
    const isEnglish = s.includes('inggris');
    return {
      category: isForeign ? 'Bahasa Asing' : isEnglish ? 'Bahasa Inggris' : 'Bahasa Indonesia & Literasi',
      konteksLokalOptions: [
        { key: 'Kebahasaan & Diksi', label: '🗣️ Aksesibilitas Diksi, Ragam Bahasa & Literasi' },
        { key: 'Sastra & Budaya', label: '📚 Sastra Nusantara, Karya Puisi & Cerpen' },
        { key: 'Isu Kontemporer & Media', label: '📢 Literasi Digital, Opini Media & Artikel' },
        { key: 'Komunikasi Lintas Budaya', label: '🌍 Komunikasi Lintas Budaya & Etiket' },
        { key: 'Kehidupan Remaja & Sekolah', label: '🎒 Kehidupan Sekolah, Hobi & Karir' },
        { key: 'Profil Pelajar Pancasila', label: '🇮🇩 Profil Pelajar Pancasila & Etika Berbahasa' },
      ],
      stimulusOptions: [
        { key: 'Teks Informasi', label: '📖 Teks Informasi Tunggal/Jamak (Artikel, Prosedur, Sains)' },
        { key: 'Teks Fiksi', label: '📚 Teks Fiksi (Cerpen, Puisi, Drama, Anekdot)' },
        { key: 'Berita/Artikel', label: '📰 Artikel Tajuk Rencana, Opini & Berita' },
        { key: 'Dialog/Percakapan', label: '💬 Transkrip Percakapan & Wawancara' },
        { key: 'Gambar/Infografis', label: '🖼️ Infografis Iklan, Poster & Brosur' },
        { key: 'Surat/Dokumen Resmi', label: '📜 Surat Resmi, Email & Dokumen Komunikasi' },
      ],
      defaultSelectedKonteks: ['Kebahasaan & Diksi', 'Sastra & Budaya', 'Isu Kontemporer & Media'],
      defaultSelectedStimulus: ['Teks Informasi', 'Teks Fiksi', 'Berita/Artikel', 'Dialog/Percakapan'],
    };
  }

  // 12. Kewirausahaan (PKK / Produk Kreatif)
  if (s.includes('kewirausahaan') || s.includes('pkk') || s.includes('produk') || s.includes('projek kreatif')) {
    return {
      category: 'Kewirausahaan & Vokasi',
      konteksLokalOptions: [
        { key: 'Ekonomi UMKM', label: '💰 Rintisan UMKM & Usaha Kreatif Indonesia' },
        { key: 'Kerajinan & Produk Lokal', label: '🛍️ Produk Kerajinan & Kuliner Nusantara' },
        { key: 'Digital Marketing ID', label: '🚀 Promosi Medsos, Marketplace & E-Commerce ID' },
        { key: 'Bahan Baku Lokal', label: '🌾 Potensi Bahan Baku & Sumber Daya Daerah' },
        { key: 'Etika Bisnis & HAKI', label: '📜 Hak Kekayaan Intelektual & Etika Usaha' },
        { key: 'Profil Pelajar Pancasila', label: '🇮🇩 Profil Pelajar Pancasila & Kemandirian' },
      ],
      stimulusOptions: [
        { key: 'Business Plan', label: '📋 Proposal Usaha, Business Model Canvas & SWOT' },
        { key: 'Data/Tabel BEP', label: '📊 Tabel Analisis HPP, BEP & Laporan Keuangan' },
        { key: 'Gambar/Infografis', label: '🖼️ Desain Kemasan, Poster & Flayer Promosi' },
        { key: 'Grafik/Diagram', label: '📈 Grafik Penjualan & Proyeksi Pasar' },
        { key: 'Kasus Nyata', label: '🔍 Skenario Permasalahan Operasional & Pelanggan' },
        { key: 'Dokumen Resmi', label: '📜 Legalitas Usaha & Kontrak Kerja Sama' },
      ],
      defaultSelectedKonteks: ['Ekonomi UMKM', 'Digital Marketing ID', 'Kerajinan & Produk Lokal'],
      defaultSelectedStimulus: ['Business Plan', 'Data/Tabel BEP', 'Gambar/Infografis', 'Kasus Nyata'],
    };
  }

  // Fallback Generik
  return {
    category: 'Umum TKA SMA',
    konteksLokalOptions: [
      { key: 'Budaya Nusantara', label: '🎭 Budaya Nusantara (Adat & Seni)' },
      { key: 'Geografis Indonesia', label: '🗺️ Geografis & Kewilayahan ID' },
      { key: 'Kehidupan Sosial', label: '👥 Kehidupan Sosial & Kemasyarakatan' },
      { key: 'Ekonomi Rakyat', label: '💰 Ekonomi Rakyat, Pasar & UMKM' },
      { key: 'Teknologi Tradisional', label: '⚙️ Etno-Sains & Teknologi Tradisional' },
      { key: 'Kearifan Lokal', label: '🏛️ Kearifan Lokal & Ekologi' },
      { key: 'Keragaman Etnis', label: '🌈 Keragaman Etnis & Inklusivitas' },
      { key: 'Profil Pelajar Pancasila', label: '🇮🇩 Profil Pelajar Pancasila & Karakter' },
      { key: 'Isu Kontemporer', label: '📢 Isu Kontemporer & Realitas Empiris' },
      { key: 'Kebahasaan Diksi', label: '🗣️ Aksesibilitas Diksi & Bahasa ID' },
    ],
    stimulusOptions: [
      { key: 'Teks Bacaan', label: '📖 Teks Bacaan Naratif/Sains' },
      { key: 'Gambar/Ilustrasi', label: '🖼️ Gambar / Infografis' },
      { key: 'Data/Tabel', label: '📊 Data Statistik / Tabel Empiris' },
      { key: 'Grafik/Diagram', label: '📈 Grafik / Diagram Tren' },
      { key: 'Kasus Nyata', label: '🔍 Kasus Nyata / Skenario Masalah' },
      { key: 'Cerita Pendek', label: '📚 Cerita Pendek / Anekdot' },
      { key: 'Berita/Artikel', label: '📰 Artikel Berita / Opini Media' },
      { key: 'Peta/Denah', label: '🗺️ Peta Geospasial / Denah' },
      { key: 'Dokumen Resmi', label: '📜 Dokumen / Regulasi Kebijakan' },
      { key: 'Pernyataan Tokoh', label: '🎙️ Wawancara / Pernyataan Tokoh' },
    ],
    defaultSelectedKonteks: ['Budaya Nusantara', 'Kehidupan Sosial', 'Kearifan Lokal'],
    defaultSelectedStimulus: ['Teks Bacaan', 'Data/Tabel', 'Kasus Nyata'],
  };
}
