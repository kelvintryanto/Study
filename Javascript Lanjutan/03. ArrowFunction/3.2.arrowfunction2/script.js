// Konsep this pada Arrow Function

// // Constructor Function
// const Mahasiswa = function () {
//     this.nama = 'Kelvin';
//     this.umur = 31;
//     this.sayHello = function() {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }
// const kelvin = new Mahasiswa();
// console.log(kelvin);
// console.log(kelvin.sayHello());

/// // rubah menjadi arrow function
// const Mahasiswa = function () {
//     this.nama = 'Kelvin';
//     this.umur = 31;
//     this.sayHello = () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }
// const kelvin = new Mahasiswa();
// console.log(kelvin);
// console.log(kelvin.sayHello());
// // hal di atas tidak akan jadi masalah jika bentuknya constructor tapi akan jadi masalah jika objectnya literal

// // Object literal
// const mhs1 = {
//     nama: `Kelvin`,
//     umur: 31,
//     sayHello: function () {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }
// console.log(mhs1.sayHello());

// // Jika Object Literal di atas diubah menjadi arrow function maka hasilnya undefined
// const mhs1 = {
//     nama: `Kelvin`,
//     umur: 31,
//     sayHello: () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//         console.log(this); //yang keluar adalah window
//     }
// }
// console.log(mhs1.sayHello());

// Constructor Function
// const Mahasiswa = function () {
//     this.nama = 'Kelvin';
//     this.umur = 31;
//     this.sayHello = function() {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// jika menggunakan function tidak terbaca karena tidak membaca, kalau menggunakan arrow function maka akan mencari ke lexical scopenya
//     setInterval(() => {
//         console.log(++this.umur);
//     }, 2000);
// }
// const kelvin = new Mahasiswa();
// console.log(kelvin);
// console.log(kelvin.sayHello());


// // cara penggunaannya arrow function
// const box = document.querySelector('.box');
// box.addEventListener('click', function() {
//     this.classList.toggle('size');
//     setTimeout(function() {
//         this.classList.toggle('caption');
//     },600)
// });

// menjadi seperti ini dan mengubah dari caption yang hilang terlebih dahulu
// karena urutannya terbalik
const box = document.querySelector('.box');
box.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu,dua] = [dua,satu];
    }
    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    },600)
});