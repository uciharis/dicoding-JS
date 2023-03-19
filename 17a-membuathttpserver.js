// --- membuat http server ---
// utk membuat hppt server menggunakan hapi,kita tidak lagi menggunakan core module http secara langsung
// kita dapat membuat server melalui modul pihak ke tiga @hapi/hapi
// untuk menggunakan modul tsb, kita perlu memasang terlebih dahulu menggunakan npm dengan perintah
// -- ini kode--
// npm install @hapi/hapi
// 
//setelah pemasangan selesai, kita gunakan module tsb
// --ini kode--
// const Hapi = require('@hapi/hapi');

// pembuatan server menggunakan Hapi memiliki struktur kode yang berbeda dari cara asli
// berikut adalah dasar kode dalam membuat HTTP server pada Hapi :
/** -- ini kode --
 * 
 * const Hapi = require('@hapi/hapi);
 * 
 * const init = async ()=>{
 * const server = Hapi.server({
 * port: 5000,
 * host: 'localhost',
 * });
 * await server.start();
 * console.log(`server berjalan pada ${server.info.uri}`);
 * }
 * 
 * init();
 * 
 */
// penjelasan kode diatas :
//a. http server dibuat menggunakan metod Hapi.server()
// metod ini menerima 1 parameter yakni ServerOptions yg merupakan objek utk menampung konfigurasi dari server yg hendal dibuat
// salah dua nya adalah menampung port dan host.

//b. proses menjalankan server (server.start()) dilakukan scara asynch maka dari itu digunakan await

//c. setelah server berjalan, anda bs melihat alamat lengkap dan port dimana server dijalankan melalui properti server.info.uri

// -- Latihan membuat http server --
// 1. pasang modul @hapi/hapi terlebih dahulu
// 2. hapus kode pada server.js ganti dengan kode berikut:
/**-- ini kode hapi--
 * 
 * const Hapi =require('@hapi/hapi');
 * 
 * const init = async()=>{
 * const server = Hapi.server({
 * port : 5000,
 * host : 'localhost',
 * })
 * await server.start();
 * console.log(`server berjalan pada ${server.info.uri}`);
 * };
 * init();
 * 
 */
// 3. jalankan npm run start pada terminal
// 4. jika server berhasil maka akan muncul pesan 'server berjalan pada http://localhost:5000
// 5. lakukan permintaan menggunakan cURL sbb:
// curl -X GET http://localhost:5000
// 6. secara default Hapi akan mengembalikan respons "not found". hal ini lebih baik drpd dibiarkan begitu saja