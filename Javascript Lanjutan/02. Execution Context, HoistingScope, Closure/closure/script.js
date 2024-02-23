// function init() {
//     // let nama = "Kelvin";
//     function tampilNama(nama) {
//         console.log(nama);
//     }
//     return tampilNama;
// }
// let panggilNama = init();
// panggilNama('Astrid');
// panggilNama('Kelvin');

// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(
//             `Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`
//         );
//     };
// }

// let selamatPagi = ucapkanSalam("Pagi");
// let selamatSiang = ucapkanSalam("Siang");
// let selamatMalam = ucapkanSalam("Malam");

// selamatPagi('Kelvin');

// console.dir(selamatMalam);

let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    }
})();

counter = 100;

console.log(add()); //1
console.log(add()); //2
console.log(add()); //3
console.log(add()); //4
