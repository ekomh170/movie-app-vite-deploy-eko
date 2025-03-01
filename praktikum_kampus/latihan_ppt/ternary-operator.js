const age = 22;

// ternary operator with console.log
if (age > 21) {
    console.log('Dewasa');
} else {
    console.log('Belum dewasa');
}

// ternary operator with assignment
age > 21 ? console.log('Dewasa') : console.log('Belum dewasa');

// ternary operator with assignment and variable
const status = age > 21 ? 'Dewasa' : 'Belum dewasa';
console.log(status);
