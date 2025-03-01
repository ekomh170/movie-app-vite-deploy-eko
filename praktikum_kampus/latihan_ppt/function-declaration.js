/**
 * Membuat function menghitung umur.
 * Dibuat menggunakan cara Function Declaration.
 *
 * @param {interger} bod (tanggal lahir)
 * @returns {interger} age (umur)
 */

function getAge(bod) {
    const year = 2025;
    const age = year - bod;

    return age;
}

// Memanggil fungsi getAge
console.log(getAge(2002));
console.log(getAge(2003));
