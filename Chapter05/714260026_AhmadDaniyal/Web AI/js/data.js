/* =====================================================
   FILE INI = SEMUA ISI WEBSITE.
   Ubah teks, foto, dan link di sini saja.
   Foto taruh di folder img/, lalu tulis nama filenya.
   ===================================================== */
const DATA = {
  nama: "Ahmad Daniyal Bukhori",
  foto: "img/profil.jpg",                // <-- FOTO PROFIL
  kampus: "Mechatronics & Automation Technician",   // teks kecil di bawah nama pada kartu hero
  peran: ["Mechatronics Technician", "Automation & PLC Control", "Industrial Maintenance", "3D Printing & Fabrication"],
  deskripsi: "Lulusan Mechatronics dengan pengalaman langsung di perawatan mesin industri, sistem kontrol PLC, dan robotika. Teliti, mengutamakan keselamatan kerja, dan siap berkontribusi di operasional industri yang andal.",

  keahlian: [
    { judul: "Automation & Control", ikon: "🤖", daftar: ["PLC Control Systems", "Electronics Technology"] },
    { judul: "Machinery & Tools",    ikon: "⚙️", daftar: ["Toyota Textile Machinery", "Excavator Mechanics", "CNC Lathe Workshop"] },
    { judul: "Design & Fabrication", ikon: "📐", daftar: ["AutoCAD Technical Drawing", "3D Printing & Repair"] }
  ],

  pengalaman: [
    { tahun: "2025 - 2026", judul: "Textile Maintenance Operator", tempat: "PT. Bina Nusantara Prima",
      uraian: "Kontrak satu tahun di bidang perawatan teknis dan pengecekan rutin mesin tekstil industri. Merawat, memeriksa, dan memperbaiki mesin tekstil Toyota (JAT 610, 710, 810, 910), serta membantu menjaga efisiensi mesin, menekan downtime, dan menjaga standar kualitas." },
    { tahun: "2025", judul: "Heavy Equipment Mechanic Trainee", tempat: "PT. Bukit Makmur Mandiri Utama (BUMA)",
      uraian: "Peserta terpilih program pelatihan teknis BUMA SCHOOL, berfokus pada mekanik alat berat dan protokol keselamatan." },
    { tahun: "2024 (6 bulan)", judul: "Field Industrial Intern (PKL)", tempat: "PT. Chakra Tunggal Elektrindo",
      uraian: "Praktik langsung pada desain panel listrik, pengujian komponen, dan pemasangan kabel kontrol." }
  ],

  pendidikan: [
    { tahun: "2022 - 2025", judul: "Mechatronics Engineering", tempat: "SMK Negeri 2 Cimahi" },
    { tahun: "2019 - 2022", judul: "Sekolah Menengah Pertama", tempat: "SMP Negeri 6 Cimahi" },
    { tahun: "2013 - 2019", judul: "Sekolah Dasar", tempat: "SD Negeri 2 Cimahi" }
  ],

  prestasi: [
    { judul: "Juara 2 - Lomba 3D Printing Tingkat Regional", tempat: "Robotics Community, SMK Negeri 2 Cimahi" }
  ],

  // <-- FOTO SERTIFIKAT: taruh file di img/sertifikat/ lalu tulis nama filenya
  sertifikat: [
    { judul: "Juara 2 Lomba 3D Printing",   penerbit: "Tingkat Regional", tahun: "", gambar: "img/sertifikat/sertifikat1.jpg" },
    { judul: "BUMA SCHOOL",                 penerbit: "PT. BUMA",         tahun: "2025", gambar: "img/sertifikat/sertifikat2.jpg" },
    { judul: "Sertifikat PKL",              penerbit: "PT. Chakra Tunggal Elektrindo", tahun: "2024", gambar: "img/sertifikat/sertifikat3.jpg" }
  ],

  // <-- FOTO PROYEK: taruh file di img/proyek/ (link boleh dikosongkan "")
  proyek: [
    { judul: "R&D Specialist - Robotics Community", uraian: "Merancang dan membuat prototipe robot digital dan analog di SMK Negeri 2 Cimahi (2022-2024).", tag: ["Robotics", "Prototype"], gambar: "img/proyek/proyek1.jpg", link: "" },
    { judul: "Alat Latih PLC Machine-Handling", uraian: "Membuat alat peraga latih untuk siswa pada kontrol PLC machine-handling.", tag: ["PLC", "Fabrication"], gambar: "img/proyek/proyek2.jpg", link: "" },
    { judul: "Perakitan & Perawatan 3D Printer", uraian: "Merakit, mengkalibrasi, dan merawat 3D printer.", tag: ["3D Printing", "Kalibrasi"], gambar: "img/proyek/proyek3.jpg", link: "" },
    { judul: "Delegasi Pramuka - Peran Saka 2023", uraian: "Mewakili sekolah di acara Peran Saka Jawa Barat 2023 yang diadakan Saka Bahari, Lanal Bandung.", tag: ["Pramuka", "Organisasi"], gambar: "img/proyek/proyek4.jpg", link: "" }
  ],

  kontak: {
    email: "ahmaddaniyalbukhori@gmail.com",
    whatsapp: "6282218973436",
    instagram: "https://instagram.com/a_dnyl66",
    github: "",                          // kosongkan jika tidak ada
    linkedin: "",                        // kosongkan jika tidak ada
    lokasi: "Cimahi Utara, Kota Cimahi, Jawa Barat"
  }
};
