// Destructuring

// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b, a / b];
// }

// const jumlah = kalkulasi(2, 3)[0];
// const kali = kalkulasi(2, 3)[1];

// const [jumlah, kali] = kalkulasi(2, 3);
// console.log(jumlah);
// console.log(kali);

// urutan destructuring sangat berpengaruh
// const [tambah, kurang, kali, bagi = "tidak ada"] = kalkulasi(2, 3);
// console.log(bagi);

// Destructuring Function
// supaya urutan tidak berpengaruh, maka ganti menjadi object
// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a + b,
//         bagi: a / b,
//     };
// }

// const { bagi, tambah, kali, kurang } = kalkulasi(2, 3);
// console.log(kurang);


// Destructurinig function arguments
// const mhs1 = {
//     nama: 'Kelvin Tryanto',
//     umur: 31,
//     email: 'kelvin.tryanto@gmail.com'
// }
// function cetakMhs(nama, umur) {
//     return `Halo, nama saya ${nama}, saya berumur ${umur} tahun`
// }
// console.log(cetakMhs(mhs1.nama, mhs1.umur));

// // atau menggunakan object
// const mhs1 = {
//     nama: 'Kelvin Tryanto',
//     umur: 31,
//     email: 'kelvin.tryanto@gmail.com'
// }
// function cetakMhs(mhs) {
//     return `Halo, nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun`
// }
// console.log(cetakMhs(mhs1));

// // bisa melakukan destructuring di function declarationnya
// const mhs1 = {
//     nama: 'Kelvin Tryanto',
//     umur: 31,
//     email: 'kelvin.tryanto@gmail.com'
// }
// function cetakMhs({nama,umur}) {
//     return `Halo, nama saya ${nama}, saya berumur ${umur} tahun`
// }
// console.log(cetakMhs(mhs1));


// Object yang kompleks
const mhs1 = {
    nama: 'Kelvin Tryanto',
    umur: 31,
    email: 'kelvin.tryanto@gmail.com',
    nilai: {
        tugas: 80,
        uts: 85,
        uas: 75
    }
}
function cetakMhs({nama,umur,nilai:{tugas,uts,uas}}) {
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun dan nilai uas saya adalah ${uas}`
}
console.log(cetakMhs(mhs1));