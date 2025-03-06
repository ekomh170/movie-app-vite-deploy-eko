// =====================================================================
// Program Terkait Daftar Users
// =====================================================================
// Dibuat oleh: Eko Muchamad Haryono
// NIM: 0110223079
// Prodi: Teknik Informatika
// Peminatan: Software Engineering
// Kelas: TI-02 (SE-01)
// Mata Kuliah: Pemrograman Frontend
// Dosen Pengampu: Akhmad Arip, S.Kom.
// Tugas 2 - Pertemuan 3
// =====================================================================

// Import fungsi dari controller.js untuk mengelola data user
import { index, store, destroy } from './controller.mjs';

// 📌 Fungsi utama yang akan dijalankan
const main = () => {
    console.log('Memulai Program Manajemen User...\n');

    // 🆕 Data user baru yang akan ditambahkan
    const newUsers = [
        {
            nama: 'Syifa Hadju',
            umur: 24,
            alamat: 'Jl. Melati, Jakarta',
            email: 'syifa.hadju@gmail.com',
        },
        {
            nama: 'Bintang Emon',
            umur: 28,
            alamat: 'Jl. Kalideres, Jakarta',
            email: 'bintang.emon@gmail.com',
        },
    ];

    console.log('Menambahkan user baru...');
    store(newUsers); // Tambahkan data baru

    console.log('\nMenampilkan daftar user setelah penambahan:');
    index(); // Tampilkan daftar setelah ditambah

    console.log('\n❌ Menghapus user dalam daftar...');
    destroy(1); // Hapus user

    console.log('\nMenampilkan daftar user setelah penghapusan:');
    index(); // Tampilkan daftar setelah dihapus
};

// Jalankan fungsi utama
main();
