// // 1. HTML Fragments
// const mhs = {
//     nama: "Kelvin Tryanto",
//     umur: 31,
//     nrp: "2011042013",
//     email: "kelvin.tryanto@gmail.com",
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
// </div>`;

// document.body.innerHTML = el;

// // 2. Looping
// const mhs = [
//     {
//         nama: "Kelvin Tryanto",
//         email: "kelvin.tryanto@gmail.com",
//     },
//     {
//         nama: "Angela Astrid",
//         email: "angela.astrid@gmail.com",
//     },
//     {
//         nama: "Bonbon",
//         email: "bonbon@gmail.com",
//     },
// ];

// const el = `<div class="mhs">
//     ${mhs
//         .map(
//             (m) =>
//                 `<ul>
//                     <li>${m.nama}</li>
//                     <li>${m.email}</li>
//                 </ul>`
//         )
//         .join("")}
// </div>`;

// document.body.innerHTML = el;

// // 3. conditions
// // ternary
// const lagu = {
//     judul: "Kau Adalah",
//     penyanyi: "Isyana Sarasvati",
//     feat: "Rayi Putra",
// };

// const el = `<div class="lagu">
// <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ""}</li>
//     </ul>
// </div>`;

// document.body.innerHTML = el;

// 4. nested
// HTML Fragments bersarang
const mhs = {
    nama: "Kelvin Tryanto",
    semester: 5,
    mataKuliah: [
        "Rekayasa Web",
        "Algoritma",
        "Analisis dan Perancangan Sistem Informasi",
        "Pemrograman Sistem Interaktif",
    ],
};

function cetakMataKuliah(mataKuliah) {
    return `
    <ol>
            ${mataKuliah.map((mk) => `<li>${mk}</li>`).join("")}
        </ol>
    `;
}

const el = `<div class="mhs">
        <h2>${mhs.nama}</h2>
        <span class="semester">Semester : ${mhs.semester}</span>
        <h4>Mata Kuliah: </h4>
        ${cetakMataKuliah(mhs.mataKuliah)}
    </div>`;

document.body.innerHTML = el;
