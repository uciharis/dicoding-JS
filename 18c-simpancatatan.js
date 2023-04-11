// --- Menyimpan catatan ---

//kriteria -1 adalah web server harus bs simpan catatan yang ditambahkan dari aplikasi client

//saat ini, aplikasi client blm bs menambahkan catatan. ketika menekan tombol simpan catatan maka
// akan muncul pesan error "failed to fetch"

//kita akan membuat fungsi simpan catatan berjalan dg baik
// agar web server bs menyimpan catatan, kita perlu menediakan route dg path '/notes' dan metod 'POST'
// silahkan buka routes.js dan tulis kode route pertama dg ketentuan sbb:

/** -- routes.js
 * 
 * const routes = [
 * {
 *  method : 'POST',
 *  path : '/notes',
 * handler : ()=>{},
 * },
 * ];
 * 
 * module.exports = routes;
 */

// utk fungsi handler, kita akan buat berkas yg terpisah.
// tk sekarang, kita kosongkan dulu

// jangan lupa kita perlu mengeksport kode routes menjadi module routes agar dapat digunakan
// di server.js

// sblum menuliskan fungsi handler, kita buat dlu array utk menampung objek catatan pada berkas notes.js

/** -- notes.js --
 * 
 * const notes = [];
 * module.exports = notes;
 * 
 */

// lanjut kita buat fungsi handler utk route, buka handler js dan buat fungsi
// dg nama addNoteHandler
/** -- handler.js--
 * 
 * const addNoteHandler = (request,h)=>{
 * 
 * };
 * 
 * module.exports = {addNoteHandler};
 */

// masih ingatkan bahwa fungsi handler pada Hapi memiliki 2 parameter.
// jangan lupa menambahkan parameter tsb setiap kali membuat fungsi handler
// lalu kita eksport fungsi handler ini , kita gunakan objek literas dg tujuan utk memudahkan eksport lebih dari 1 nilai pada 
// berkas JS
/**
 * const addNoteHandler = (request, h) => {
 * 
 * };
 * module.exports = {addNoteHandler};
 */

// selanjutnya adalah tuliskan logika utk simpan catatan dari client ke dalam array notes
// client kirim data catatan (title, tags, body) dan disimpan dalam bentuk JSON lewat body request
// kita perlu mendapatkan body request dari Hapi menggunakan properti request.payload utk mengambil data
/**
 * const addNoteHandler = (request, h)=>{
 * const {title, tags, body} = request.payload;
 * } ;
 */

// selain itu, objek notes yang perlu kita simpan harus memiliki struktur seperti ini
/**
 * {
 * id: string,
 * title: string,
 * 
 * createdAt : string,
 * updatedAt: string,
 * tags: array of string,
 * body: string,
 * },
 */
// kita hanya mendapatkan nilai title, tags, body dari client, itu berarti sisanya kita perlu olah sendiri
// mari kita pikirkan dari properti id terlebih dulu
// kriteria menyebutkan, properti id merupakan string dan unik, sehingga perlu menggunakan bantuan library pihak ke-3
// nanoid merupakan library yg populer utk menangani hal ini. silahkan pasang library dng perintah
/**
 * npm instal nanoid@3.x.x
 */
// nb: gunakan versi 3.x.x karena versi terbaru tidak kompatibel dg format module CommonJS

//lalu, panggil metod nanoid() dan memberikan parameter number yang merpakan ukuran dr stringnya

/**
 * const addNoteHandler = (request,h) => {
 * const {title, tags, body} = request.payload;
 * const id = nanoid(16);
 * }
 */
// jgn lupa import nanoid dar packagenya

/**
 * const {nanoid} = require('nanoid');
 * const addNoteHandler = (request, h)=>{
 * 
 * const {title, tags, body} = request.payload;
 * 
 * const id = nanoid(16);
 * }
 */

// sekarang kamu sudah memiliki nilai properti id

// selanjutnya adalah properti createdAt dan updatedAt, 
// karena kasus sekarang adalah menambah catatan baru, maka nilai kedua properti tsb harusnya sama.
// jadi bisa secara mudah memberikan nilai new Date().toISOString();
/**
 * const addNoteHandler = (request, h)=> {
 * const {title,tags, body}= request.payload;
 * 
 * const id = nanoid(16);
 * const createdAt = new Date ().toISOString();
 * const updatedAt = creadetAt;
 * }
 */

// kita sudah punya properti dari objek catatan secara lengkap
// sekarang saatnya kita masukkin nilai tsb ke dalam array ntes pake metod push()

