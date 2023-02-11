/** --- membuat Projek Javascript ---
 * cara --> buat folder dg nama CoffeMachine, lalu ketik perintah d terminal
 * npm init
 * 
 * menggunakan npm init adalah pendekatan terbaik ketimbang bikin package.json secara manual
 * 
 * 
 */

console.log('menyalakan mesin kopi');
console.log("Menggiling biji kopi");
console.log("Memanaskan air");
console.log("Mencampurkan air dan kopi");
console.log("Menuangkan kopi ke dalam gelas");
console.log("Menuangkan susu ke dalam gelas");
console.log("Kopi Anda sudah siap!");
const coffeStock = require('./state');
// jalankan dengan ketik " node index.js" di folder CoffeeMachine
// pada berkas package.json terdapat beberapa objek penting salah satunya adalah object script
// seperti ini : (ada d dalam berkas package.json)
/*
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    },
  */
 //secara default objek tsb akan terbentuk ketika package.json dibuat menggunakan perintah npm init
// objek script adalah objek yang mengandung kumpulan script di dalamnya.
// utk menjalankan script tsb, gunakan nmp run <script-name>
/**
 * npm run test
 * test adalah objek di dalam scripts yang berisi echo blablabla...
 * 
 */
// dg menjalankan script tes , artinya kita mengeksekusi kode yang berada di dalam nilai test
// objek script biasanya utk menetapkan script yang sering digunakan secara berkala
// seperti menjalankan aplikasi, compiling source code ke tahap produksi dan melakukan testing
// utk menetapkan nilai baru pada objek script, kita tuliskan nama script sebagai properti
// dan kemudian tuliskan perintah yng dieksekusi sbg nilai dari properti tsb.
// mari kita buat script baru utk menjalankan kode dari berkas index.js
// beri nama properti "start" dg nilai perintah "node index.js"
// lalu jalankan di terminal node index.js (jgn lupa tutup file nya tsb)

// -- menggunakan require --
//utk mengimport nilai module coffeStock
//const stokCoffee = require('./state') // pathnya menggunakan './state' karena dalam 1 lokasi folder Coffemachine
// -- kode diatas dikomen dulu karna hanya utk impor 1 module --
const {stokCoffee, isCoffeMachineReady}= require('./state');
console.log(stokCoffee);
const makeCoffe = (type, miligrams)=>{
  if(coffeStock[type] >= miligrams){
    console.log('biji kopi available.');
  }
  else {
    console.log('biji kopi sudah habis');
  }
}
makeCoffe('liberica', 20); // output : biji kopi available

console.log(isCoffeMachineReady); // modul brhasil diekspor

// perlu diingat ketika mmelakukan destructuring objek, pastikan penamaan variabel lokal
// sesuai dg properti objek. jika tidak maka variabel tsb akan undefined