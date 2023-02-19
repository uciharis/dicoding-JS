/** -- NPM ---
 * 
 * yg akan dipelajari :
 * -menambah package k dalam projek JS
 * -pakai package dlm pengembangan aplikasi
 * -hapus package yg sudah tdk digunakan
 * 
 */

//JS memiliki package manager yaitu NPM dan YPM (yarn)
// namun NPM merupakan package manager standar bawaan node js
// package nya ada di https://npmjs.com/ 
// utk melihat semua perintah lengkap npm, cek di https://docs.npmjs.com/cli/v7/commands 

// --- menginstall package ---
// utk memulai projek baru, selalu pastikan ada berkas package.json di dalamnya
// cara nya dengan jalankan perintah npm init pada projek anda

// ada 2 jenis penginstalan package yaitu local install dan global install.
// lokal install artinya package ada di dalam projek kita dan terletak di node_modules.

// global package diisntal ketika ada perintah yang dapat dieksekusi dr cli dan digunakan kembali pada projek
// beberapa contoh package yang perlu diinstal secara global adalah
// npm, nodemon, dan mocha

// utk menginstall package secara global, tambahkan -g pada parameter 
/* --kode --

npm install -g <package-name></package-name>
*/

// misal kita ingin memakai package lodash. lodash adalah package utk memudahkan kita menulis kode js
// khususnya yg berhubungan dg array, objek, string dll
//caranya :
/* ---kode ---
npm install lodash
 * 
 */

//setelah berhasil, cek file package.json
// akan muncul object baru dependecies berisi package yang telah kita tambahkan diikuti dengan versinya
/**
 * "dependences" : {
 * "lodash" : "^4.17.21"
 * }
 */

// sebenarnya terdapat 2 tipe objek dependencies dalam berkas package.json
// yang pertama adalah objek dependencies,
// yang kedua adalah devDependencies
//objek dependencies : objek yg menampung package yg digunakan utk pembuatan aplikasi
// objek devDependencies : objek yang digunakan hanya berkaitan saat proses pengembangan
// contoh devDependencies adlh jest( package utk testing), tidak dipake lagi saat aplikasi rilis atau digunakan user

//utk memasang package devDependencies, tambahkan parameter --save-dev pada perintah npm install

/** ---ini kode ---
 * 
 * npm install <package-names></package-names> --save-dev
 * 
 */

//setelah dipasang maka ada penambahan d package.json

/** ---ini kode ---
 * 
 * "devDependencies : {
 * "jest": "^26.6.3"
 * }
 */

// dalam projek akan muncul package-lock.json
// berkas ini dibuat otomatis oleh node utk menjelaskan susunan projek dan package.
// package-lock.json mendefinisikan versi package yg digunakan dengan lebih spesifik.

// pada versi terdapat simbol caret (^) dan tilde (~)
//version number punya format xx.xx.xx = major.minor.patch
// ~1.0.2 artinya npm dapat menginstall versi 1.0.2 atau versi patch terbaru seperti 1.0.4
// ^1.0.2 artinya npm dapat instal versi 1.0.2 atau minor terbaru 1.1.0

// -- using package --
// perlu dipahami bahwa package yang kita tambahkan ke dalam projek sebenarnya adalah module
// itulah kenapa muncul folder node_module yg berisi kode2 JS yg menyusun suatu package
// karena merupakan module, kita dapat menambahkan kode dari package dg menggunakan keyword import
/* -- contoh kode import --- 
import variableNames from 'packages-name'; //contoh import
* --akhir kode ---
   */

//sehingga utk menggunakan kode dr package lodash yg telah kita pasang, tambahkan kode berikut pada berkas index.js
// contoh kode: import _ from 'lodash'; // tanda underscore merupakan standar dr lodash yg perlu kita ikuti
// sekarang mari kita lihat bagaimana lodash bekerja.
// di dalam dokumentasinya, lodash menyebutkan bahwa mereka menyediakan utilitas utk membuat JS lebih mudah
// dg menghilangkan kerumitan ketika menggunakan array, number, object dan string
// misal utk menjumlahkan setiap nilai number dalam array, kita lakukan dg cara seperti berikut :
// ---cara konvensional tanpa module---

    const myArray= [1,2,3,4];
    let sum = 0;
    for (let i=0; i <4; i++){ // 4= myArray.length
        sum = sum+myArray[i];
    }
    console.log("hasil loop :", sum);
    // ---akhir kode ---

    // --- atau fungsi reduce ---
    const arrayKu = [1,2,3,4];
    let sum1 = arrayKu.reduce((prev,curr)=>{
        return prev+curr;
    });
    console.log("hasil reduce :", sum1);

    // ---hasil lodash ---
    import _ from 'lodash';
    const arrray= [1,2,3,4];
    const sum2 = _.sum(arrray);
    console.log(sum2); // output : 10