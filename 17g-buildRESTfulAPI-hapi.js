// --- Membangun RESTful API dg Hapi ---

//sblmnya, kita belajar dasar pembuatan web server, mulai dr membuat server HTTP, menangani dan merespon request,
// hingga teknik routing. kita juga sudah mengembangkan web server menggunakan Hapi
// dg pengetahuan tsb, kita akan membuat web server yang lbh kompleks, dan membangun proyek dg skenario yang lbh nyata dlm membangun sistem aplikasi

// pada materi ini, kita akan membuat RESTful API mulai dr awal. diharapkan kita bs membuat server dari aplikasi catatan sederhana seperti video berikut

// -- menyiapkan projek --
// buat folder dg nama "notes-app-back-end", lalu buka dg vscode
// lakukan "npm init --y"
// pastikan ada package.json
// lalu pasang nodemon agar saat ada perubahan pada berkas, tdk perlu merestart server
// " npm install nodemon --save-dev" , maka akan terlihat perubahan di berkas package.json d devDependencies
// lalu buat file server.js dan isikan sbb:
//  console.log("hali kita akan membuat RESTful API ! ");
// lakukan perubahan pada package.json utk npm runner script utk jalankan server.js menggunakan nodemon
// "scripts" : {
//    "start" : "nodemon server.js"
// } ,
// lalu jalankan "npm run start"
// output :
/**
 * 
 * > notes-app-back-end@1.0.0 start
> nodemon server.js

[nodemon] 2.0.22
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node server.js`
 halo kita akan membuat RESTful API !
[nodemon] clean exit - waiting for changes before restart
 */
// nodemon berhasil dieksekusi ! kita tdk perlu menjalankan ulang npm run start karna dijalankan otomatis menggunakan nodemon