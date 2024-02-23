// Rest Parameter

// function myFunc() {
//     // return `a=${a}, b=${b}, myArgs=${myArgs}`;
//     // bentuk array
//     // return myArgs;
//     // tidak dalam bentuk array
//     return [...arguments];
// }

// console.log(myFunc(1, 2, 3, 4, 5));

// function jumlahkan(...angka) {
//     let total = 0;
//     for (const a of angka) {
//         total += a;
//     }
//     return total;
// }

// console.log(jumlahkan(1, 2, 3, 4, 5));

// function jumlahkan(...angka) {
//     // let total = 0;
//     // for (const a of angka) {
//     //     total += a;
//     // }
//     // return total;
//     return angka.reduce((a, b) => a + b);
// }
// console.log(jumlahkan(1, 2, 3, 4, 5));

// array destructuring
// const kelompok1 = ["Kelvin", "Astrid", "Bonbon", "Tanu", "Andri", "David"];
// // memecah seperti di bawah adalah cara konvensional
// // const ketua = kelompok1[0];
// // const wakil = kelompok1[1];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota);


// object destructuring
// const team = {
//     pm: 'Kelvin',
//     frontEnd1: 'Astrid',
//     frontEnd2: 'Bonbon',
//     backEnd: 'Tanu',
//     ux: 'Andri',
//     devOps: 'Nadya'
// };
// const { pm, ...myTeam } = team;
// console.log(myTeam);

// filtering
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type);
}

console.log(filterBy('string', 1, 2, 'Kelvin', false, 10, true, 'Astrid'));