/**
 * Membuat fungsi menghitung umur.
 * Dibuat menggunakan cara Arrow Function.
 *
 * @param {interger} bod (tanggal lahir)
 * @returns {interger} age (umur)
 */

const hitungUmur = (bod) => {
    const year = 2025;
    const age = year - bod;

    return age;
};

// Memanggil fungsi getAge
console.log(hitungUmur(2000));
console.log(hitungUmur(2003));

const getAge = (bod) => 2022 - bod;

// Memanggil fungsi getAge
console.log(getAge(1999));
console.log(getAge(2000));
