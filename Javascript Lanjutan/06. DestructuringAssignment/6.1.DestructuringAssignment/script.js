// Destructuring Variable / Assignment

// Destructuring Array

// const perkenalan = ['Halo', 'nama', 'saya', 'Kelvin Tryanto'];

// const [salam, satu, dua, nama] = perkenalan;
// console.log(dua);

// skipping items
// const [salam, , , nama] = perkenalan;
// console.log(dua);

// // swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// //return value pada function
// function coba() {
//     return [1, 2];
// }

// const [a,b] = coba();
// console.log(a,b);

// // Rest Parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);

// Destructuring Object
// const mhs = {
//     nama: 'Kelvin Tryanto',
//     umur: 31
// }
// const { nama, umur } = mhs;
// console.log(nama);
// console.log(umur);

// assignment tanpa deklarasi object
// ({ nama, umur } = {
//     nama: "Kelvin Tryanto",
//     umur: 31,
// });
// console.log(nama);


// assign ke variable baru
// const mhs = {
//     nama: 'Kelvin Tryanto',
//     umur: 31
// }
// const { nama:n, umur:u } = mhs;
// console.log(n);
// console.log(u);

// // memberikan default value
// const mhs = {
//     nama: 'Kelvin Tryanto',
//     umur: 31,
//     email: 'kelvin@gmail.com'
// }
// const { nama:n, umur:u, email:e='kelvin.tryanto@gmail.com' } = mhs;
// console.log(n);
// console.log(u);
// console.log(e);

// // Rest Parameter
// const mhs = {
//     nama: 'Kelvin Tryanto',
//     umur: 31,
//     email: 'kelvin@gmail.com'
// };

// const { nama, ...value } = mhs;
// console.log(value);

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
    id: 123,
    nama: 'Kelvin Tryanto',
    umur: 31,
    email: 'kelvin.tryanto@gmail.com'
}

function getIdMhs({id, nama}) {
    return id + nama;
}

console.log(getIdMhs(mhs));