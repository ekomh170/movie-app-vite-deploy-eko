// deklarasi variable
const name = 'Eko Muchamad Haryono';
const major = 'Informatika';
const bod = '2003';

const greeting = `hello, my name is ${name}, Umur saya ${
    2023 - bod
} tahun, saya kuliah di ${major}`;

console.log(greeting);

console.log(name, major);

// kondisional
const results = 85;

// if: membuat satu kondisi
if (results > 90) {
    console.log('Grade : A');
    // else if: membuat kondisi kedua
} else if (results > 80) {
    console.log('Grade : B');
} else if (results > 70) {
    console.log('Grade : C');
}
// else: membuat kondisi terakhir
else {
    console.log('Grade : D');
}

// ternary
const age = 23;
age > 21 ? console.log('Dewasa') : console.log('Belum Dewasa');

// looping
// for
console.log('perulangan 1');
console.log('perulangan 2');

for (i = 1; i < 11; i++) {
    console.log(`Perulangan While ke - ${i}`);
}

// While loop
let i1 = 1;
while (i1 < 11) {
    console.log(`Perulangan While ke - ${i1}`);
    i1++; // Perbaikan variabel yang di-increment
}

// Fungsi untuk menghitung umur
function umur(bod) {
    const year = 2022;
    return year - bod;
}

console.log(umur(1997));
console.log(umur(2004));

// Fungsi ekspresi
const eksAge = function (bod1) {
    const year = 2022;
    return year - bod1;
};

console.log(eksAge(1967));
console.log(eksAge(2005));

// Arrow function
const arrAge = (bod2) => 2022 - bod2;

console.log(arrAge(2000));

// Array
const fruits = ['apel', 'mangga', 'jeruk'];
console.log(fruits);

// Object
const person = {
    name: 'Eko Muchamad Haryono',
    age: 21,
    major: 'Teknik Informatika',
};

console.log(person.name, person['age']);

// Array of Object
const people = [
    {
        name: 'Eko Muchamad Haryono',
        age: 21,
        major: 'Teknik Informatika',
    },
    {
        name: 'Budi',
        age: 22,
        major: 'Teknik Informatika',
    },
];

console.log(people[0].name, people[1].name);
