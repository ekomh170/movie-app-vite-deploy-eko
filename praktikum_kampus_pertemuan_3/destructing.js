const req = {
    body: {
        name: 'Eko Muchamad Haryono',
        age: 21,
        major: 'Teknik Informatika',
    },
};

// Destructing Array
const family = ['Hadi', 'Yani', 'Rara'];

// Destructing key dari object diatas
const { name, age, major } = req.body;
console.log(name, age, major);

// Tidak Bisa Di Looping
console.log(family[0], family[1], family[2]);

// Bisa di Looping
const [ayah, ibu, adik] = family;
console.log(ayah, ibu, adik);

// tidak menggunakan rest parameter
function sum(a, b) {
    const hasil = a + b;
    return hasil;
}

sum(1, 2);

// menggunakan rest parameter
function sum1(...numbers) {
    let hasil = 0;
    for (const number of numbers) {
        hasil += number;
    }
    return hasil;
}

// hasil dari penjumlahan semua angka yang diinputkan
console.log(sum1(1, 2, 3, 4, 5));
console.log(sum1(1, 2));

// jadi perbedaan antara rest parameter dan parameter biasa adalah
// parameter biasa hanya bisa menerima 2 parameter saja
// sedangkan rest parameter bisa menerima lebih dari 2 parameter
// dan hasil dari rest parameter adalah array

// contoh without spread
const user = {
    name: 'Eko Muchamad Haryono',
    major: 'Informatika',
};

// const newUser = {
//     name: user.name,
//     major: user.major,
//     age: 22,
// };

// menggunakan spread
const newUser = {
    ...user,
    age: 22,
};
