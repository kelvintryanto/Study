// for..of
// array
// const mhs = ['Kelvin', 'Astrid', 'Bonbon'];

// for biasa
// for (let i = 0; i < mhs.length; i++){
//     console.log(mhs[i]);
// }

// foreach
// mhs.forEach(m => console.log(m));

// for..of
// for (const m of mhs) {
//     console.log(m);
// }

// String
// const nama = 'Kelvin';
// for (const n of nama) {
//     console.log(n);
// }

// const mhs = ['Kelvin', 'Astrid', 'Bonbon'];
// mhs.forEach((m, i) => console.log(`${m} adalah mahasiswa ke-${i + 1}`));

// for (const [i,m] of mhs.entries()){
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }

// // NodeList
// const liNama = document.querySelectorAll('.nama');
// // liNama.forEach(n => console.log(n.textContent));
// for (n of liNama) {
//     console.log(n.innerHTML);
// }

// arguments
// function jumlahkanAngka() {
//     // return [1,2,3,4,5].reduce((acc, i) => acc + i);
//     // arguments.forEach(a=>jumlah+=a);
//     let jumlah = 0;
//     for (a of arguments) {
//         jumlah += a;
//     }
//     return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));



// FOR..IN
const mhs = {
    nama: 'Kelvin',
    umur: 31,
    email: 'kelvin.tryanto@gmail.com'
}

// tidak bisa menggunakan for..of karena objek tidak iterable
// for (m of mhs) {
//     console.log(m);
// }

// mengeluarkan isinya
// for (m in mhs) {
//     console.log(mhs[m]);
// }

// mengeluarkan index pada objek 
for (m in mhs) {
    console.log(m);
}