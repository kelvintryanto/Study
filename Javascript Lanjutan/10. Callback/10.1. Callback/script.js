// // Callback
// // Synchronous Callback
// function halo(nama) {
//     alert(`Halo, ${nama}`);
// }

// // callback adalah nama parameter, tapi function yang diterima adalah halo
// function tampilkanPesan(callback) {
//     const nama = prompt('Masukkan nama: ');
//     callback(nama);
// }

// // memanggil function yang parameternya adalah function
// tampilkanPesan(halo);

// // bisa juga dibuat seperti di bawah ini
// // Callback
// // Synchronous Callback

// // callback adalah nama parameter, tapi function yang diterima adalah function yang langsung ditulis
// function tampilkanPesan(callback) {
//     const nama = prompt("Masukkan nama: ");
//     callback(nama);
// }

// // memanggil function yang parameternya adalah function yang langsung ditulis
// tampilkanPesan((nama) => alert(`Halo, ${nama}`));

// // di bawah ini juga merupakan synchronous callback
// const mhs = [
//     {
//         nama: "Kelvin Tryanto",
//         nrp: "2011042013",
//         email: "kelvin.tryanto@gmail.com",
//         jurusan: "Teknik Informatika",
//         idDosenWali: 1,
//     },
//     {
//         nama: "Angela Astrid",
//         nrp: "2011042014",
//         email: "angela.astrid@gmail.com",
//         jurusan: "Teknik Informatika",
//         idDosenWali: 2,
//     },
//     {
//         nama: "Bonbon Alamsyah",
//         nrp: "2011042015",
//         email: "bonbon.alamsyah@gmail.com",
//         jurusan: "Teknik Informatika",
//         idDosenWali: 2,
//     },
// ];
// console.log("mulai");
// mhs.forEach((m) => {
//     // bayangkan ada proses mengambil API dari web lain dan selama ini maka
//     // dibutuhkan yang namanya asynchronous ini untuk menjalankan proses selanjutnya
//     for (let i = 0; i < 10000000; i++) {
//         let date = new Date();
//     }
//     console.log(m.nama);
// });
// console.log("selesai");

// //Asynchronous Callback
// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         // state 4 adalah state terakhir
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.response);
//             } else if (xhr.status === 404) {
//                 error();
//             }
//         }
//     };

//     xhr.open("get", url);
//     xhr.send();
// }

// // harus ada function success dan function error
// // jika tidak maka langsung masukkan functionnya di dalam parameter
// // function success() {}
// // function error() {}

// // untuk mengecek asynchronous
// console.log('mulai');
// // panggil functionnya
// getDataMahasiswa(
//     "data/mahasiswa.json",
//     results => {
//         const mhs = JSON.parse(results);
//         mhs.forEach(m => console.log(m.nama));
//     },
//     () => { }
// );
// console.log('selesai');

// daripada menggunakan javascript murni seperti di atas lebih baik menggunakan
// jquery
// jangan menggunakan jquery yang slim, karena jquery slim tidak ada ajax
// gunakan yang minified

// jQuery
console.log("mulai");
$.ajax({
    url: "data/mahasiswa.json",
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error: (e) => {
        console.log(e.responseText);
    },
});
console.log("selesai");
