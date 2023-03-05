// --- Membangun web service dengan nodejs ---
// mater ini akan membahas webservice menggunakan js
// materi yang akan dibahas adalah sbb :
// - membangun web service menggunakan nodejs native
// - mengenal nodejs http framework
// - membangun web service menggunakan hapi.js( framework)
// - membangun RESTful API sederhana

// --membangun web server
// sebelum membuat web server, buat terlebih dahulu proyek nodejs dengan nama nodejs-web-server
// lalu jalankan perintah
// npm init --y // --y digunakan utk prompt jawaban ya sd finish
// setelah melakukan perintah diatas, akan muncul berkas packaage-json
// selanjutnya buat file bernama server.js dalam 1 folder yg sama
// tuliskan kode berikut:
// console.log('halo kita akan membuat server);
// kemudian buka berkas package.json dan tambahkan runner script berikut
/** -- ini runner script
 * 
 * scripts": {
    "test": "echo \"Error: no test specified\" && exit 1", // baris ini bisa dihapus
    "start": "node server.js"
}
 */
// sebenarnya anda bisa menghapus runner script test karena script tsb tidak kita gunakan
// jadi runner script yang perlu hanya nilai start saja
// lalu jalankan kode berikut di terminal
// npm run start
// output : halo, kita akan belajar membuat server