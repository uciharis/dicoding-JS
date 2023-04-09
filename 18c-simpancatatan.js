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