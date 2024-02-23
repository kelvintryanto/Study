// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

// console.log(nama);
// var nama = 'Kelvin';

// creation phase pada Global Context
// nama var = undefined
// nama function = fn()
// hal di atas disebut hoisting

// selain itu JS mendefinisikan seperti di bawah ini walaupun kita tidak menuliskannya
// console.log(window);
// window = global object
// this = window

// var nama = "Kelvin";
// var umur = 31;

// function sayHello() {
//     console.log(`Halo, nama saya ${nama}, saya umur ${umur} tahun`);
// }

// function sayHello() {
//     return `Halo, nama saya ${nama}, saya umur ${umur} tahun`;
// }

// function membuat local Execution Context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments yang ada di dalam fungsi parameter
// hoistingnya local

// var nama = "Kelvin";
// var username = "@kelvin.tryanto";

// // local hoisting
// function cetakURL(username) {
//     var instagramURL = "http://instagram.com/";
//     return instagramURL + username;
// }

// console.log(cetakURL(username));

// // contoh lain local hoisting
// function a() {
//     console.log("ini a");

//     function b() {
//         console.log("ini b");

//         function c() {
//             console.log("ini c");
//         }

//         c();
//     }

//     b();
// }

// a();
// // hasilnya
// // ini a
// // ini b
// // ini c

// // contoh hoisting dan scope
// var nama = "Kelvin";
// var username = "@kelvin.tryanto";

// // // local hoisting & scope
// function cetakURL(username) {
//     var instagramURL = "https://instagram.com/";
//     return instagramURL + username;
// }

// console.log(cetakURL('@astridangela'));
// hasilnya akan menjadi https://instagram.com/@astridangela
// karena scope nya menerima parameter @astridangela

// // CONTOH LAIN
// var nama = "Kelvin";
// var username = "@kelvin.tryanto";

// // local hoisting & scope
// function cetakURL() {
//     var instagramURL = "https://instagram.com/";
//     return instagramURL + username;
// }

// console.log(cetakURL('@astridangela'));
// // hasilnya adalah https://instagram.com/@kelvin.tryanto
