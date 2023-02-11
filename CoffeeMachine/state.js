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
