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
// jawaban cek di folder nodejs-basic/process-object

// -- modularization --
//semakin komplek programg yang dikembangkan, semakin komplek juga kode yang ditulis.
// jika kode dituliskan dalam 1 berkas saja maka akan sangat sulit membaca serta memelihara kode tsb
// idealnya, satu berkas JS hanya memiliki 1 tanggung jwab saja.bila lebih dari satu, itu berarti anda perlu berkenalan dg modularisasi
// odularisasi dalam pemrogrman merupakan tekni pemisahan kode menjadi modul2 yang bersifat independen namun bisa saling digunakan
// pemisahan kode menjadi modul terpisah inilah yang dapat membuat kode JS lebih mudah diorganisir
// pada node.js, tiap berkas javascript adalah modul. anda dapat membagikan nilai var, objek, class atau apapun itu diantara mdul
// untuk melakukannya, anda perlu mengekspor nilai pada module tsb
// utk mengekspor, simpan nilai tsb pada properti module.exports
// contoh :
/** -- coffee.js --
 * const coffee = {
 *     name: 'tubruk',
 *     price: 15000,
 * };
 * 
 * module.exports = coffee;
 * 
 */

// setelah itu nilai coffe dapat digunakan pada berkas JS lainnya dengan cara import nilainya melalui fungsi global required().
/** --app.js --
 * 
 * const coffe = require ('./coffee');
 * console.log(coffee); * 
 */
// perhatikan nilai parameter yang diberikan pada require(). parameter merupakan lokasi dari module yarget impor.
// jika anda hendak mengimpor modul lokal, selalu gunakan tanda ./ di awal alamatnya
// bila berkas coffee.js diletakkan di folder yang berbeda dengan app.js , contohnya memiliki struktur seperti ini
/** -- struktur folder --
 * root folder:.
 * |---app.js
 * |---package.json
 * |---lib
 *      |---coffee.js
 */
// maka kita perlu mengimpornya dengan alamat:
// -- app.js --
// const coffee = require('./lib/coffee.js');
// anda juga bisa menggunakan tanda  ../ untuk keluar dari 1 level folder. ini berguna bila ingin mengimpor module yang berbeda hierarki seperti ini:
// -- app.js --
// const coffee = require('../lib/coffee');
//bila anda menggunakan vscode, anda akan terbantu dengan fitur auto import yang disediakan
// melalui fitur ini, anda tidak perlu repot menuliskan alamat modul secara manual. tinggal tulis saja nilai yang ingin anda impor
// vscode akan menangani penulisan fungsi require();

// dengan melakukan impor dan ekspor nilai, kita bs memanfaatkan objek literal dan objek destrukturing agar dapat mengimpor dan mengekspor lebih dari 1 nilai pada sebuah modul seperti berikut:
// ---user.js --
const firstName = 'harry';
const lastName = 'potter';
module.exports = {firstName, lastName}; // ini adalah modul

// --app.js --
const {firstName, lastName}= require('./user');
console.log(firstName);
console.log(lastName);

// untuk memudahkan dev dalam proses pengembangan, nodejs menyediakan beberapa modul bawaan yang dapat anda manfaatkan guna mendukung efisiensi melakukan hal secara umum
// modul bawaan tsb dikenal sbg core modules. anda bisa mengimport core modules dengan fungsi yang sama yaitu require();
// impor core modul http
const http = require('http');

// lokasi core module dituliskan tidak seperti local module. lokasi bersifat mutlak
// core module disimpan di folder lib pada lokasi nodejs dipasang sehingga kita ckup menuliskan nama modulnya saja
//ada 3 jenis modul pada nodejs, berikut rinciannya :
// - local module : modul dibuat secara lokal berlokasi pada nodejs projek
// - core module : modul bawaan nodejs berlokasi di folder lib dimana nodejs terpasang pada komputer anda. core module dapat diletakkan dimana sjaa
// - third part module : module yg dipasang melalui node package manager. bila third party modul terpasang secar lokal maka modul disimpan pada node_modules d nodejs
//   bila dipasang secara global, akan disimpan pada node_modules di lokasi nodejs dipasang

// latihan modularization
// sekarang kita tahu bagaimana cara menerapkan modularisasi pada JS.
// buat folder baru dengan nama modularization pada proyek nodejs-basic dan didalamnya buat tiga berkas 
// JS baru yakni Tiger.js, Wolf.js dan index.js
// dengan masing2 berkas ks tertulis starter kode sbb:

/**-- Tiger.js
 * 
 * class Tiger {
 * constructor(){
 * this.strength = Math.floor(Math.random()*100);
 * }
 * growl(){
 * console.log('grgrgr!')
 * }
 * }
 * //todo
 */

/**-- Wolf.js
 * 
 * class Wof{
 * construction(){
 * this.strength=Math.floor(Math.random()*100)
 * }
 * howl(){
 * console.log('owoooo!')
 * }
 * }
 * //todo 2
 */

/**--index.js
 * 
 * const Tiger=//todo3
 * const Wolf=//todo4
 * const fighting = (tiger, wolf)=>{
 * if(tiger.strength>wolf.strength){
 * tiger.rowl();
 * return;
 * }
 * if(wolf.strength > tiger.strength){
 * wolf.howl();
 * return;
 * }
 * console.log('tiger and wolf have same strength);
 * }
 * 
 * const tiger=new Tiger ();
 * const wolf=new Wolf();
 * fight(tiger,wolf);
 */
//selesaikan dg ketentuan sbb :
// TODO 1 : Ekspor class Tiger agar dapat digunakan pada berkas JavaScript lain.
// TODO 2 : Ekspor class Wolf agar dapat digunakan pada berkas JavaScript lain.
// TODO 3 : Import class Tiger dari berkas Tiger.js.
// TODO 4 : Import class Wolf dari berkas Wolf.js.
// lalu jalankan command berikut :
// node ./modularization/index.js

// jawaban di folder modular

// --- Node Package Manager
// dalam industri, sangat lumrah industri memanfaatkan module atau package luar agar pengembangan dapat lebih cepat
// semakin komplek aplikasi tsb maka semakin banyak pula module atau paclage yang digunakan
// disinilah kita memerlukan sebuah package manager.
// npm merupakan pengelola package utk javascript yang dapat memudahkan mengelola package
// package tersedia di www.npmjs.com/ 
// biasanya terpasang otomatis saat memasang nodejs
// selain utk membuat projek JS, NPM juga digunakan utk memasang atau menghapus third party module. 
// modul yang dipasang melalui NPM akan disimpan di folder node_modules
// terdapat 2 tipe memasang modul yaitu global dan lokal
// jika modul terpasang secara global, maka modul tersebut akan bersifat layaknya core module dan dapat digunakan di mana pun
// sedangkan modul yang dipasang lokal hanya dapat digunakan pada cakupan projek nodejs yang memasangnya saja
// untuk menghindari side effect akibat memasang module, lebih baik kita menggunakan module secara lokal.
// gunakan npx apabila ingin menjalankan nodejs package dimana pun
// momentjs merupakan salah satu modul 3rd party populer utk mengelola waktu di nodejs
// untuk memasangnya secara lokal, jalankan perintah berikut pada terminal
// --ini kode:
// npm install moment

// setelah pemasangan selesai, anda bisa menggunakan modul moment pada proyek nodejs anda
/** --contoh kode menggunakan module momentjs
 * 
 * const moment = require('moment') // mesti diimport module nya setelah di install
 * 
 * const date = moment().format("MMM Do YY");
 * console.log(date);
 * 
 * // output : Jan 11th 21
 */

//package yang dipasang secara lokal melalui NPM akan dicatat dalam berkas package.json, lebih tepatnya
// pada objek dependencies

/** --isi file package.json
 * 
 * {
  "name": "nodejs-basic",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "moment": "^2.29.1"
  }
}
 * 
 */

// menunjukkan bahwa proyek nodejs anda bergantung pada module moment versi 2.29.1
// informasi ini berguna bila anda membagikan proyek ini ke orang lain. orang tsb akan menyamakan versi module yg dibutuhkan
// utk menghapus modul 3rd party gunakan kode berikut:
// npm uninstall moment

//terakhir, NPM bisa berfungsi sebagai runner script. ia dapat menjalankan script yang dituliskan pada objek scripts yang ada di berkas package.json
// dengan menetapkan script pada package.json, anda dapat membuat jalan pintas utk menjalankan nodejs proses.
// selain itu, anda bisa membuat lebih dari 1 script sesuai dengan environment yang diinginkan.
/**-- contoh script
 * 
 * "scripts": {
    "start-dev": "NODE_ENV=development node app.js",
    "start": "NODE_ENV=production node app.js"
  }
 */

  // lalu jalankan perintah 
  // npm run <nama script></nama>
  //contoh : npm run start-dev

// -- events --
// aplikasi nodejs biasanya memiliki pola event-driven atau memiliki alur bedasarkan suatu kejadian
// pola event-driven : merespon kepada kejadian tertentu
// karna biasanya programming dilakukan secara imperatif, biasanya melakukan suatu hal dengan menuliskan instruksi secara runtut
// dengan pola itu maka membangun program akan kaku.kita tidak tahu kapan suatu kejadian akan terjadi
// maka diperlukan program yang memiliki pola event-driven

// nodejs menyediakan EventEmitter class yang merupakan member events core module
/** kodee core module nya :
 * 
 * const {EventEmitter} = require('events');
 * const myEventEmitter = new EventEmitter();
 */
// setiap instance dari EventEmitter akan memiliki fungsi on. pada fungsi tsb, kita dapat menentukan aksi berdasarkan sebuah kejadian
// contoh :
/**
 * const {EventEmitter} = require('events');
 * const myEventEmitter = new EventEmitter();
 * // fungsi yang akan dijalankan ketika event coffee-order terjadi
 * const makeCoffee = ({name})=> {
 * console.log(`kopi ${name} telah dibuat`);
 * };
 * // mendaftaran fungsi makeCoffee sebagai listener event coffee-order
 * myEventEmitter.on('coffee-order', makeCoffee);
 * 
 */
// fungsi on menerima dua buah argumen, yang pertama adalah nama event dan yang kedua adalah listener atau fungsi yang akan dieksekusi ketika event terjadi
// dari kode diatas, jika terjadi event 'coffee-order' maka fungsi makeCoffee akan dijalankan

// lalu bagaimana cara membangkitkan suatu event?
// setiap instance dari eventEmitter juga memiliki fungsi emit() yang berguna utk membangkitkan event
/**
 * const {eventEmitter} = require('events); // import modul events
 * 
 * const myEventEmitter = new EventEmitter();
 * 
 * const makeCoffee = ({name})=> {
 * console.log(`kopi ${name} telah dibuat !`);
 * };
 * myEventEmitter.on('coffee-order', makeCoffee);
 * // memicu event 'coffee-order' terjadi
 * myEventEmitter.emit('coffee-order', {name: 'Tubruk'});
 * // output : Kopi Tubruk telah dibuat!
 */

// fungsi emit() menerima nilai argume sebanyak apapun yang dimau, namun nilai yang pertama merupakan nama dari event yang dibangkitkan
// argumen ke-2 dan seterusnya adalah nilai yang akan digunakan utk menjadi parameter dari funsi listener
// anda juga bisa mendaftarkan lebih dari satu fungsi listener pada sebuah event menggunakan fungsi on.
/** --contoh kode 2 listener :
 * const { EventEmitter } = require('events');
 
const myEventEmitter = new EventEmitter();
 
const makeCoffee = ({ name }) => {
    console.log(`Kopi ${name} telah dibuat!`);
};
 
const makeBill = ({ price }) => {
    console.log(`Bill sebesar ${price} telah dibuat!`);
}
 
myEventEmitter.on('coffee-order', makeCoffee);
myEventEmitter.on('coffee-order', makeBill);
 
myEventEmitter.emit('coffee-order', { name: 'Tubruk', price: 15000 });
 
 //output:
Kopi Tubruk telah dibuat!
Bill sebesar 15000 telah dibuat!

 */
// atau anda bs membuat suatu fungsi khusus utk menangani event. biasanya fungsi ini memiliki nama
// 'handler' atau 'listener' pada akhir penamaannya
// seolah membungkus 2 event listener menjadi 1
/**
 * const { EventEmitter } = require('events');
 
const myEventEmitter = new EventEmitter();
 
const makeCoffee = (name) => {
    console.log(`Kopi ${name} telah dibuat!`);
};
 
const makeBill = (price) => {
    console.log(`Bill sebesar ${price} telah dibuat!`);
}
 
const onCoffeeOrderedListener = ({ name, price }) => {
    makeCoffee(name);
    makeBill(price);
}
 
myEventEmitter.on('coffee-order', onCoffeeOrderedListener);
 
myEventEmitter.emit('coffee-order', { name: 'Tubruk', price: 15000 });
// output:
Kopi Tubruk telah dibuat!
Bill sebesar 15000 telah dibuat!
 */

// --- Filesystem
// seluruh data di komputer dikelola dan diakses melalui filesystem.
// sangat penting utk membatasi javascript dalam mengakses filestystem
// teknik ini dinamakan sandboxing
// javascript mendapatkan batasan di backend namun tidak seketat di browser
// hal ini dikarenakan file system pada backend sangat penting utk melaakukan akses file dan menulis
// nodejs menyediakan core module fs yang dapat mempermudah kita dalam mengakses filesystem
// setiap metod yang ada di module fs tersedia dalam 2 versi yaitu asynchronous dan synchronous
// untuk mengakses berkas pada komputer, kita menggunakan method fs.readFile()
// metode ini akan menerima 3 argumen yaitu lokasi berkas, encoding dan callback funct yang terpanggil
// apabila berkas berhasil atau gagal diakses
/** -- contoh mengakses berkas
 * --- versi asynchronous ---
 * const fs = require('fs');
 * 
 * const fileReadCallback = (error, data)=> {
 * if(error){
 * console.log('gagal membaca berkas');
 * return;
 * }
 * console.log(data);
 * };
 * fs.readFile('todo.txt', 'UTF-8', fileReadCallback);
 * 
 * --- versi synchronous ---
 * const fs = require('fs');
 * 
 * const data = fs.readFileSync ('todo.txt', 'UTF-8');
 * console.log(data);
 */
// latihan menelusuri berkas ada di folder filesystem

// ---Readable Stream ---
// pada materi sebelumnya kita sudah tahu cara mengakses berkas melalui fs.readFile()
// bekerja dengan membaca berkas file hingga selesai lalu mengembalikan data
// jika digunakan untuk mengakses berkas yang besar, akan membutuhkan waktu dan memori yang besar
// hal ini tidak efektif
// solusinya adalah dengan menggunakan teknik stream
// teknik ini tidak membaca berkas secara langsung sekaligus tetapi mengirim bagian per bagian
// cara ini yang digunakan Youtube agar video dapat ditampilkan seketika pada pengguna
// teknik stream merupakan konsep fundamental yang mendukung aplikasi nodejs bekerja
// teknik ini dapat menangani kasus baca tulis berkas, komunikasi jaringan atau beban kerja apapun agar dapat
// berjalan dengan lebih efisien
// kita dapat membuat readabe stream dengan menggunakan metod createReadStream() dari core module fs
/** --- teknik readable stream
 * 
 * const fs = require('fs');
 
const readableStream = fs.createReadStream('./article.txt', {
    highWaterMark: 10
});
 
readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});
 
readableStream.on('end', () => {
    console.log('Done');
});

 */
//  fungsi createReadStream() menerima 2 argumen . pertama adalah lokasi berkas yang hendak dibaca
// kedua adalah objek konfigurasi
// dalam objek konfigurasi kita bisa menetapkan ukuran buffer melalui properti highWaterMark
// nilai defaultnya adalah 16384 bytes (16kb)
// anda tidak perlu menetapkan properti ini bila ingin tetap memiliki nilai default
// namun karena kita hanya menggunakan berkas text yang ukurannya kecil maka kita akan buffer
// menjadi 10 bytes.
// artinya berkas akan dibaca tiap 10 karakter (10 bytes)
// buffer dalam stream artinya adalah memori sementara yang digunakan oleh stream dalam simpan data
// createReadStrea() mengembalikan EventEmitter dimana kita dapat menetapkan fungsi listener
// setiap kali event readable dibangkitkan. Event readable akan dibangkitkan ketika buffer sudah memiliki ukuran yang sesuai
//  dengan nilai yang ditetapkan pada properti highWaterMark
// kemudian event end akan dibangkitkan setelah proses stream selesai
/** ---contoh penggunaan readable stream
 * 
 * -- article.txt
 * 
 * Stream di Node.js
 * Teknik Stream merupakan salah satu konsep fundamental yang mendukung aplikasi nodejs bekerja
 * teknik ini dapat menangani kasus baca tulis berkas, komunikasi jaringan, atau beban kerja apapun agar dapat berjalan dengan efisien
 * 
 * 
 * ---result
 * [Stream di ][Node.js
][Teknik str][eam merupa][kan salah ][satu konse][p fundamen][tal yang m][endukung a][plikasi No][deJS beker][ja. Teknik][ ini dapat][ menangani][ kasus bac][a tulis be][rkas, komu][nikasi jar][ingan, ata][u beban ke][rja apapun][ agar dapa][t berjalan][ dengan le][bih efisie][n.][null]Done

 * 
 */


// --- Writable Stream 

// teknik stream juga digunakan untuk menulis berkas.
//  untuk membuat writable stream menggunakan metod createWriteStream() dari core module fs

/**
 * const fs = require('fs');
 * 
 * const writableSteam = fs.createWriteStream('output.txt');
 */

// fungsi ini menerima satu argume yakni alamat berkas utk menyimpan data yang dituliskan
// berkas output akan dibuat secara otomatis jika tidak ada, namun berkas akan ditimpa apabila berkas tsb sudah ada
// maka harus berhati-hati
// lalu utk menuliskan data pada writable stream,  gunakan method write()

/**--- contoh write()
 * 
 * const fs = required('fs');
 * 
 * const writableStream = fs.createWriteStream('output.txt');
 * 
 * writableStream.write ('ini merupakan teks baris pertama!\n');
 * writablestream.write('ini merupakan teks baris kedua!\n');
 * writableStream.end('akhir dari writable stream!');
 */

//-- output :
// ini merupakan teks baris pertama!
// ini merupakan teks baris kedua!
// akhir dari writable stream!

// latihan stream : cek di folder stream