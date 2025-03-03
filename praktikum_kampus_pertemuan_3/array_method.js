const names = ['Akbar', 'Fajar', 'Pendy', 'Reza'];

// panggil iteration method forEach

names.forEach(function (name) {
    console.log(`Name ${name}`);
});

const formatedName = names.map(function (name) {
    return `Mr/Mrs ${name}`;
});

console.log(formatedName);
