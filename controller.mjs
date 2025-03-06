// =====================================================================
// Controller Data Users
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

// 📌 Import data User dari file data.js
import users from './data.mjs';

// fungsi untuk menampilkan seluruh data User
const index = () => {
    console.log('Daftar User Saat Ini:');

    // Looping data menggunakan map() untuk menampilkan daftar user
    users.map((user, index) => {
        console.log(
            `${index + 1}. ${user.nama} | ${user.umur} Tahun | ${
                user.alamat
            } | ${user.email}`
        );
    });

    console.log('--------------------------------');
};

// 📌 Fungsi untuk menambahkan data baru ke dalam daftar User
const store = (newUsers) => {
    users.push(...newUsers); // Menambahkan data dengan spread operator
    console.log(`✅ Berhasil menambahkan ${newUsers.length} User baru!`);
};

// 📌 Fungsi untuk menghapus User berdasarkan indeks
const destroy = (index) => {
    // Pastikan indeks yang dimasukkan valid
    if (index >= 0 && index < users.length) {
        const removedUser = users.splice(index, 1); // Hapus data sesuai indeks
        console.log(`User ${removedUser[0].nama} telah dihapus dari daftar.`);
    } else {
        console.log(
            'Oops! Indeks tidak valid. Coba lagi dengan angka yang benar.'
        );
    }
};

// Ekspor fungsi-fungsi ini supaya bisa digunakan di file lain
export { index, store, destroy };
