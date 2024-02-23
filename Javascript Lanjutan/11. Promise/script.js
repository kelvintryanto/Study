// //ini versi jQuery sesimple ini
// $.ajax({
//     url: "http://www.omdbapi.com/?apikey=b330443b&s=avengers",
//     success: (movies) => console.log(movies),
//     error: (e) => {
//         console.log(e);
//     },
// });

// jika menggunakan vanilla javascript menggunakan fungsi di bawah ini
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     // state 4 adalah state terakhir
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             console.log(JSON.parse(xhr.response));
//         } else if (xhr.status === 404) {
//             console.log(xhr.responseText);
//         }
//     }
// };

// xhr.open("get", 'http://www.omdbapi.com/?apikey=b330443b&s=avengers');
// xhr.send();

// // ada cara lain menggunakan fetch
// // fetch mengembalikan promise
// // promise adalah object yang merepresentasikan keberhasilan/kegagalan sebuah event yang asynchronous di masa yang akan datang
// fetch("http://www.omdbapi.com/?apikey=b330443b&s=avengers")
//     .then(response => response.json())
//     .then(response => console.log(response));

//contoh 1
// let ditepati = true; //bisa diganti menjadi false jika mau tahu bedanya
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('Janji telah ditepati');
//     } else {
//         reject('Ingkar janji..')
//     }
// });

// janji1
//     .then(response => console.log('OK!' + response))
//     .catch(response => console.log('NOT OK : ' + response));

// // contoh 2
// let ditepati = false;
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve("Ditepati setelah beberapa waktu!");
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             resolve("Tidak ditepati setelah beberapa waktu");
//         }, 2000);
//     }
// });
// console.log("mulai");
// console.log(janji2.then(() => console.log(janji2)));
// janji2
//     .finally(() => console.log("selesai menunggu"))
//     .then((response) => console.log("OK!" + response))
//     .catch((response) => console.log("NOT OK : " + response));
// console.log("selesai");

// Promise.all()
// untuk menjalankan semua promise yang ada
const film = new Promise((resolve) => {
    setTimeout(() => {
        resolve([
            {
                judul: "Avengers",
                sutradara: "Kelvin Tryanto",
                pemeran: "Astrid, Bonbon",
            },
        ]);
    }, 1000);
});

const cuaca = new Promise((resolve) => {
    setTimeout(() => {
        resolve([
            {
                kota: "Jakarta",
                temp: 30,
                kondisi: "Cerah Berawan",
            },
        ]);
    }, 500);
});

// film.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));

// Promise.all([film, cuaca])
//     .then(response => console.log(response));

// atau kalau mau dipecah menjadi 2 array
Promise.all([film, cuaca])
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    })