// ambil semua elemen video
const videos = Array.from(document.querySelectorAll("[data-duration]"));

// pilih yang javascript lanjutan
const jsLanjutan = videos
    .filter((video) => video.textContent.includes(`JAVASCRIPT LANJUTAN`))

    // ambil durasi masing-masing video
    .map((item) => item.dataset.duration)

    // ubah durasi menjadi float, ubah menit menjadi detik
    .map((waktu) => {
        // pecah 11:18 menjadi menit dan detik lalu kalikan dengan detik
        const partWaktu = waktu
            .split(":")
            .map((partWaktu) => parseFloat(partWaktu));
        console.log(partWaktu);
        return partWaktu[0] * 60 + partWaktu[1];
    })

    // jumlahkan durasi video
    .reduce((total, detik) => total + detik);

// ubah formatnya menjadi jam menit detik
const jam = Math.floor(jsLanjutan / 3600);
const menit = Math.floor((jsLanjutan - jam * 3600) / 60);
const detik = jsLanjutan - jam * 3600 - menit * 60;

// simpan di dalam dom
console.log(videos);
console.log(jsLanjutan);

const jumlahVideo = document.querySelector(".jumlah-video");
jumlahVideo.textContent = videos.filter((video) =>
    video.textContent.includes(`JAVASCRIPT LANJUTAN`)
).length + ` Video`;

let totalDurasi = document.querySelector(".total-durasi");
totalDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;
