// Cara untuk membuat Object pada javascript
// 1. Object Literal
// PROBLEM: tidak efektif untuk objek yang jumlahnya banyak
// let mahasiswa1 = {
//     nama: 'Kelvin',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }

// let mahasiswa2 = {
//     nama: 'Astrid',
//     energi: 20,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }

// 2. Function Declaration

// const methodMahasiswa = {
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },
//     main: function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     },
//     tidur: function (jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, selamat tidur!`);
//     }
// }

// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     mahasiswa.makan = methodMahasiswa.makan;
//     mahasiswa.main = methodMahasiswa.main;

//     return mahasiswa;
// }

// let kelvin = Mahasiswa(`Kelvin`, 10);
// let astrid = Mahasiswa(`Astrid`, 20);

// 3. Constructor Function(keyword new)
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     };

//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     };
// }

// let kelvin = new Mahasiswa(`Kelvin`, 10);
// let astrid = new Mahasiswa(`Astrid`, 20);

// Prototype
// function Mahasiswa(nama, energi) {
//     // let this = Object.create(Mahasiswa.prototype);
//     this.nama = nama;
//     this.energi = energi;
//     // return this
// }

// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
// }

// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat bermain!`;
// }

// Mahasiswa.prototype.tidur = function (jam) {
//     this.energi += jam * 2;
//     return `Halo ${this.nama}, selamat tidur!`;
// }

// Prototype versi class
class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi;
        return `Halo ${this.nama}, selamat makan!`;
    }

    main(jam) {
        this.energi -= jam;
        return `Halo ${this.nama}, selamat bermain!`;
    }

    tidur(jam) {
        this.energi += jam * 2;
        return `Halo ${this.nama}, selamat tidur!`;
    }
}

let kelvin = new Mahasiswa(`kelvin`, 10);

// 4. Object.create
