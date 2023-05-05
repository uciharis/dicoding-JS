/** --- pengenalan module ----
 * ketika aplikasi sudah berkembang, kita bs saja menuliskan kode hanya dalam satu berkas
 * namun bayangkan apabila kita harus mencari baris kode yang memiliki bug dari jutaan kode baris
 * untuk itulah pentingnya membagi projek menjadi beberapa berkas berdasarkan tugas dan fungsinya
 * disitulah kita membuat sebuah modul JS. tak lain adlah utkmenghubungkan berkas JS yang terpisah agar slg dapat digunakan
 */


// --- export dan import module ---
/*
 * modul bekerja dg cara eksport dan import nilai. baik itu nilai var, fungsi array, obj, atau class
 * satu berkas JS terdiri dari 1 modul yg dapat kita eksport menjadi lebih dari 1 nilai
 * 
 * dalam lingkungan nodejs, gunakan perintah module.exports utk melakukan proses eksport modul.
 * setiap berkas JS yang berjalan pada node, memiliki objek modul lokal yang memiliki properti eksport.
 * properti itu digunakan utk mendefinisikan nilai apa yang akan dieksport dari berkas tsb
 * dibawah ini adalah contoh melakukan eksport nilai menggunakan module.export
 * (letakkan kode di bawah ke dalam state.js)
 */
const coffeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
}
module.exports = coffeStock; // kode ini membuat objek coffeStock. nilai ini nanti bs diimport ke berkas JS lainnya
console.log(module);
//tambahkan kode : console.log(modul) d akhir berkas utk melihat objek coffeStock menjadi nilai dr properti exports
// lalu lihat hasilnya melalu terminal dg kode : node state.js

// lalu bagaimana cara utk melakukan impor atau menggunakan objek yang sudah di ekspor?
// caranya adalah menggunakan methode require()
// letakkan methode require() pada index js

// --- ekspor beberapa nilai pada node.js ---
//bagaimana agar kita bs mengekspor beberapa nilai sekaligus ?
// misal kita ingin menambah variabel isCoffeMachineReady
const isCoffeMachineReady = true;
// kita tdk bs mengekspor dg cara pertama seperti ini :
/**
 * module.exports = coffeStock;
 * module.exports = isCoffeMachineReady;
 */
// kode diatas berarti bahwa dilakukan inisiasi ulang sehingga
// module nya justru ter override
// solusinya adalah memanfaatkan object literals 
module.exports = {coffeStock, isCoffeMachineReady}; //cara ekspor module lebih dr 1
// cara impornya lewat index.js dg teknik  destructuring

/** --- ES6 Module ---
 * 
 * utk melakukan eksport dan import module JS, ada 2 cara.
 * sebelumnya, kita telah mempelajari salah satu cara yaitu format CommonJS yang berjalan di lingkungan node.js
 * sejak ES6, js memiliki sistem modular secara native. karna itu sistem ini dapat berjalan baik di browser atau node.js
 * 
 * pada node.js sebelumnya tidak ada perbedaan antara export satu atau beberapa nilai.
 * semua nilai yang dieksport dijadikan nilai dari properti module.export
 * pada es6 module, jika kita hanya ekspor 1 nilai pada sebuah berkas JS baik itu primitive value, funct, array, object atau class,
 * kita gunakan keyword export default.
 * contoh :

const coffeStock = {
    arabica : 100,
    robusta : 150,
    liberica : 200
};
export default coffeStock;

 */
// lalu utk mengimpor nilainya kita dapat menggunakan keyword import  ... from
// seperti berikut ini :

// import coffeStock from './state.js';
// hal tsb aman utk dilakukan karena deg menggunakan export default dapat dipastikan 
// hanya satu nilai ekspor pada satu berkas JS
// setelah kita berhasil mendapatkan nilai yang diekspor, kita dapat menggunakan nilai layaknya variabel lokal


/*-- file state.js ---
 * 
 * const coffeStock = {
 * arabica: 100,
 * robusta: 150,
 * liberica: 200
 * };
 * export default coffeeStock;
 */

/*-- file index.js
 * 
 * import coffeStock from './state.js';
 * 
 * const displayStock= stock=>{
 * for (const type in stock) {
 * console.log(type)
 * }
 * }
 * displayStock(coffeStock);
 */

// ketika kode diatas dijalankan akan timbul error
// hal ini disebabkan karena berkas JS yang kita buat tidak dianggap sbg module.
// saat ini, fitur es6 modul tidak secara default diaktifkan
// pesan eror tsb berisi cara mengaktifkan es6 module.
// dua cara itu adalah menambah properti pada package.json atau ubah ekstensi
// .js menjadi .mjs

// kode ini berada d dalam package.json
/* --file package.json --
{
  "name": "coffeemachine",
  "version": "1.0.0",
  "description": "",
  "main": "index.js", 
  "type": "module", // tambahkan properti type dengan nilai value "module"
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
  "author": "",
  "license": "ISC"
}
 */
// maka setelah itu akan sukses mengeksekusi kode diatas