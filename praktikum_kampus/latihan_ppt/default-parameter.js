/**
 * Membuat fungsi menghitung umur.
 * Dibuat menggunakan cara Arrow Function.
 *
 * @param {interger} bod (tanggal lahir)
 * @returns {interger} age (umur)
 */

const getAge = (bod = 1999) => {
    const year = 2025;
    const age = year - bod;

    return age;
};

// Memanggil fungsi getAge
console.log(getAge());
console.log(getAge(2003));
