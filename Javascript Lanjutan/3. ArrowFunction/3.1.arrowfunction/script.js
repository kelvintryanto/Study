// Function Expression
// const tampilNama = function (nama) {
//     return `Halo ${nama}`;
// }
// console.log(tampilNama('Kelvin'));

// // Arrow Function merubah function expression menjadi lebih ringkas
// const tampilNama = (nama) => {
//     return `Halo ${nama}`;
// }
// console.log(tampilNama('Kelvin'));

// // menggunakan 2 argumen
// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// };
// console.log(tampilNama(`Kelvin`, `Malam`));

// // Jika hanya ada 1 argumen, boleh tidak menggunakan tanda kurung
// // implisit return
// const tampilNama = (nama) => `Halo, ${nama}`;
// console.log(tampilNama('Kelvin'));

// // tanpa argumen
// const tampilNama = () => 'Hello World';
// console.log(tampilNama());

let mahasiswa = ["Kelvin Tryanto", "Angela Astrid", "Bonbon"];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);

// // rubah menjadi arrow function
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// untuk property yang sama nilainya dengan namanya cukup tulis satu property saja
let jumlahHuruf = mahasiswa.map(nama => ({ nama, jumlahHuruf: nama.length }));
console.table(jumlahHuruf);