// --- dasar-dasar nodejs utk backend --
// yang akan dipelajari :

// - eksekusi js dengan nodejs
// - nodejs secara global
// - paham modularization
// - memakai NPM
// - memahami eventing
// - memahami filesystem
// - memahami teknik readable stream dan writable stream

// -- cara menjalankan javascript menggunakan nodejs
// cara 1 : menggunakan fitur REPL (read-eva-print Loop)
// utk mengakses, ckup gunakan perintah "node" pada terminal
// jika ingin mengeksekusi beberapa baris kode, tinggal masuk ke mode editor dg cara
// ketikkan perintah "".editor"
// apabila user keluar dr terminal maka variabel yang sudah dideklare tdk bs di panggil kembali
// karena REPL hanya menyimpan 1 session saja
// cara ini dipakai ketika user perlu mencoba snippet tertentu tanpa perlu menyimpannya dlu
// cara 2 : menyimpan berkas berekstensi *.js lalu "run node nama_file.js "


// -- node js Global Object --
// JS hanyalah bahasa pemrograman. ia tdk mengetahui apakah user menjalankannya di browser maupun di node.js
// pada browser, JS dapat mengontrol fungsionalitas browser seperti mengunjungi halaman, reload, tutup tabs
// serta menampilkan alert dialog. hal ini dapat dilakukan js pada browser karena adanya objek window pada JS

// di nodejs pun demikian, ditambahkan objek global utk memberikan fungsionalitas lebih pada js.
// hal ini mendukung pengembangan pada environmentnya seperti dapat melihat berapa cpu pada komputer,
// modularisasi berkas js, menampilkan console dsb

// objek windos dan global disebut sebagai global objek. seluruh fungsi atau properti yang menjadi member
// dari global objek dapat diakses dimana saja alias memiliki cakupan global.
// pada node.js, kita dapat melihat apa saja yang menjadi member dari global objek dengan menggunakan kode sbb :
// ini kode jalankan pada REPL : Object.getOwnPropertyNames(global);
// maka akan mengeluarkan semua membernya :
// beberapa contoh member global : 
/**
 * [
'Object',
'Function',
'Array',
'Number',
'parseFloat', dsb ...
]
 * 
 */
// namun dari banyaknya member dr global objek, sebenarnya hanya ada beberapa yang dinamakan true global seperti :
// global, process, console, setTimeout, clearTimeout, setInterval, clearInterval.
// ada juga objek yg merupakan pseudo-global.objek ini tidak muncul dengan kode diatas sebab dia bukan member langsung dr objek global
// melainkan turunan dari cakupan module.  berikut daftarnya :
// module, _filename, _dirname, require

// -- process objek --
// process : sebuah program yang dijalankan pada 1 atau lebih thread. 
// pada node js, global objek process memiliki fungsi dan properti yang dapat memberikan informasi mengenai proses yang sedang berjalan
// salah satu yang sering digunakan adalah properti process.env
// melalui properti ini kita dapat menyimpan nilai atau mendapatkan informasi mengenai environment yang digunakan
// selama proses sedang berlangsung. contoh process.env memiliki properti process.env.PWD yang menyediakan
// informasi mengenai lokasi dimana proses tsb dijalankan.
// lebih lengkapnya : https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_process_env 
// anda juga dapat secara manual menyimpan nilai di dalam process.env. hal ini berguna untuk menentukan alur kode seperti if-else dalam program berdasarkan environment nya.
// contoh ketika anda ingin variabel host berbeda di kala pengembangan dan produksi, anda bs membuat properti NODE_ENV pada process.env
// jadi anda bisa menentukan nilai host berdasarkan kondisi NODE_ENV

/** app.js
 * const server = new Server({
 * host: process.env.NODE_DEV !=='production'? 'localhost' : 'dicoding',
 * });
 * 
 */

// untuk memberikan nilai properti process.env, kita berika ketika eksekusi js dengan cara :
// NODE_ENV=production node app.js

//nilai yang ada pada process.env hanya dapat diakses dalam cakupann proses nodejs. itu berarti anda tidak dapat
// menggunakan nilai pada program lain seperti menampilkan nilainya melalui program echo

// perintah ini tdk dapat berjalan
// node -e 'process.env.foo = "bar" && echo $foo

//selain itu utk menetapkan dan mendapatkan informasi mengenai environment, objek process memilik kegunaan lain.
// salah satunya adalah mendapatkan informasi tentang penggunaan CPU ketika proses berjalan. anda dapat mengakses informasi tsb melalui fungsi process.memoryUsage()

/**
 * const cpuInformation = process.memoryUsage();
 
console.log(cpuInformation);
 
output :
{
  rss: 14569472,
  heapTotal: 2654208,
  heapUsed: 1788896,
  external: 855681,
  arrayBuffers: 9898
}
*/

// yang terakhir dan tak kalah penting adalah properti process.argv
// proses ini dapat menampung nilai baris perintah dalam bentuk array ketika menjalankan proses.
// contoh jika kita menjalankan baris perintah berikut :
// node app.js harry potter
// maka array process.argv akan bernilai :
// element-1 : path lengkap dari lokasi node yang menjalankan proses
// element-2 : path berkas js yang dieksekusi
// element-3 : "harry"
// element-4 : "potter"
// pada app.js nya memiliki kode sbb:
/**
 * const firstName = process.argv[2];
const lastName = process.argv[3];
 
console.log(`Hello ${firstName} ${lastName}`);

output : Hello harry potter
 */

// latihan process object
// buat folder process-objek lalu isi index.js dg kode sbb:
/**
 * const initialMemoryUsage = // TODO 1
const yourName = // TODO 2
const environment = // TODO 3
 
for(let i = 0; i <= 10000; i++) {
// Proses looping ini akan membuat penggunaan memori naik
}
 
const currentMemoryUsage = // TODO 4
 
console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);

 */

//lalu selanjutnya adalah perintah sbb:
/**
 * TODO 1 : Isi dengan nilai heapUsed dari instance process.memoryUsage.
TODO 2 : Isi dengan nilai index ke-2 dari process.argv.
TODO 3 : Isi dengan nilai NODE_ENV dari process.env.
TODO 4 : Isi dengan nilai heapUsed dari instance process.memoryUsage
 */
// setelah itu eksekusi kode berikut
// SET NODE_ENV=development && node ./process-object/index.js <Nama Anda>
