console.log('satu');
console.log('dua');
console.log('tiga');

// karena timeout adalah web API maka akan masuk ke event loop dulu
// lalu menunggu stack kosong terlebih dahulu setelah itu baru masuk ke stack
console.log('empat');
setTimeout(() => {
    console.log('lima');
},2000);
console.log('enam');