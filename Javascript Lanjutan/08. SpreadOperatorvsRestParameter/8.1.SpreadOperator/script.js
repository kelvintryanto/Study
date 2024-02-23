// Spread Operator
// memecah iterables menjadi single element
// gunanya untuk meggabungkan, mengcopy array, dan memisahkan array

// const mhs = ['Kelvin', 'Astrid', 'Bonbon'];
// console.log(...mhs[0]);


// kapan menggunakan spread operator?
// menggabungkan 2 array
// const mhs = ['Kelvin', 'Astrid', 'Bonbon'];
// const dosen = ['Tanu', 'Andri', 'David'];
// // ini adalah spread operator
// const orang = [...mhs, ...dosen];

// // jangan pakai metode di bawah
// const orang = [mhs,dosen]

// pakai concat juga bisa tapi tidak dapat menyelipkan element
// const orang = mhs.concat(dosen);

// const orang = [...mhs, 'Rinto', ...dosen];

// console.log(orang);


// meng-copy array
// const mhs = ['Kelvin', 'Astrid', 'Bonbon'];
// bukan copy tapi mereferensi menggunakan =
// const mhs1 = mhs;
// mhs1[0] = 'Tanu';

// // pakai spread operator
// const mhs = ['Kelvin', 'Astrid', 'Bonbon'];
// const mhs1 = [...mhs];
// mhs1[0] = 'Tanu';
// console.log(mhs1);
// console.log(mhs);

// const liMhs = document.querySelectorAll('ul li');
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++){
//     mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);
// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;
