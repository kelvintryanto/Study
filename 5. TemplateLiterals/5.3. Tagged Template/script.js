// // Tagged Templates
// const nama = "Kelvin Tryanto";
// const umur = 31;

// function coba(strings, ...values) {
//     let result = '';
//     strings.forEach((str, i) => {
//         result += `${str}${values[i] || ''}`;
//     });
//     return result;
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

// // Tagged Template dengan menggunakan reduce
// const nama = "Kelvin Tryanto";
// const umur = 31;

// function coba(strings, ...values) {
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`;
//     // });
//     // return result;
//     return strings.reduce(
//         (result, str, i) => `${result}${str}${values[i] || ""}`,
//         ""
//     );
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

// highlight (search)
const nama = "Kelvin Tryanto";
const umur = 31;
const email = "kelvin.tryanto@gmail.com";

function highlight(strings, ...values) {
    return strings.reduce(
        (result, str, i) =>
            `${result}${str}<span class='h1'>${values[i] || ""}</span>`,
        ""
    );
}

const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun dan email saya ${email}`;
console.log(str);

document.body.innerHTML = str;
