// Nama : Eko Muchamad Haryono
// NIM : 0110223079
// Prodi : Teknik Informatika
// Peminatan : Software Engineering
// Kelas Peminatan : SE-01
// Kelas : TI-02
// Semester : 4 (Empat)
// Mata Kuliah : Pemrograman Frontend
// Dosen Pengampu : Akhmad Arip, S.Kom.

// Tugas 1 - Pertemuan 2
// Program untuk menghitung gaji karyawan berdasarkan golongan dan status pernikahan
// Gaji pokok dan tunjangan karyawan berbeda-beda berdasarkan golongan dan status pernikahan

// Data Karyawan (Nama, Golongan, Status Pernikahan)
const dataKaryawan = [
    {
        namaKaryawan: 'Deva Amanda Putri',
        golKaryawan: 'C',
        statusKaryawan: 'NIKAH',
    },
    {
        namaKaryawan: 'Eko Muchamad Haryono',
        golKaryawan: 'A',
        statusKaryawan: 'BELUM',
    },
    {
        namaKaryawan: 'Liza Misya Zora',
        golKaryawan: 'B',
        statusKaryawan: 'BELUM',
    },
    {
        namaKaryawan: 'Rizky Putra',
        golKaryawan: 'C',
        statusKaryawan: 'NIKAH',
    },
    {
        namaKaryawan: 'Dian Pratiwi',
        golKaryawan: 'A',
        statusKaryawan: 'NIKAH',
    },
    {
        namaKaryawan: 'Rizki Ramadhan',
        golKaryawan: 'B',
        statusKaryawan: 'NIKAH',
    },
    {
        namaKaryawan: 'Ayu Lestari',
        golKaryawan: 'C',
        statusKaryawan: 'BELUM',
    },
    {
        namaKaryawan: 'Rizal Fauzi',
        golKaryawan: 'A',
        statusKaryawan: 'NIKAH',
    },
    {
        namaKaryawan: 'Siti Rahma',
        golKaryawan: 'B',
        statusKaryawan: 'NIKAH',
    },
    {
        namaKaryawan: 'Dewi Kurniatin',
        golKaryawan: 'C',
        statusKaryawan: 'NIKAH',
    },
];

// Gaji Pokok Berdasarkan Golongan
const gajiPokokKaryawan = {
    golKaryawanA: 10000000,
    golKaryawanB: 8000000,
    golKaryawanC: 5000000,
};

// Tunjangan Berdasarkan Golongan
const tunjanganKaryawan = {
    golKaryawanA: 2000000,
    golKaryawanB: 1500000,
    golKaryawanC: 1000000,
};

// Fungsi menghitung total gaji berdasarkan golongan dan status pernikahan
function hitungGaji(karyawan) {
    // Ambil gaji pokok sesuai golongan
    let gaji = gajiPokokKaryawan[`golKaryawan${karyawan.golKaryawan}`];

    // Cek tunjangan: jika menikah, ambil sesuai golongan; jika belum, 0
    let tnj =
        karyawan.statusKaryawan === 'NIKAH'
            ? tunjanganKaryawan[`golKaryawan${karyawan.golKaryawan}`]
            : 0;

    // Kembalikan data karyawan dengan tambahan gaji, tunjangan, dan total gaji
    return {
        ...karyawan,
        gaji,
        tunjangan: tnj,
        total: gaji + tnj,
    };
}

// Looping dengan for
for (let i = 0; i < dataKaryawan.length; i++) {
    let hasil = hitungGaji(dataKaryawan[i]);

    console.log(`=== Karyawan ${i + 1} ===`);
    console.log(`Nama: ${hasil.namaKaryawan}`);
    console.log(`Golongan: ${hasil.golKaryawan}`);
    console.log(`Status: ${hasil.statusKaryawan}`);
    console.log(`Gaji Pokok: Rp ${hasil.gaji.toLocaleString()}`);
    console.log(`Tunjangan: Rp ${hasil.tunjangan.toLocaleString()}`);
    console.log(`Total Gaji: Rp ${hasil.total.toLocaleString()}`);
    console.log('-------------------');
}
