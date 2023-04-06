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
/*
*
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

// -- menggunakan tools eslint
// eslint membantu kita menulis kode secara konsisten. 
// ada beberapa aturan dan gaya penulisan kode seperti
// Airbnb JS code style : https://github.com/airbnb/javascript
// google JS style : https://google.github.io/styleguide/jsguide.html
// dan standardJS style : https://standardjs.com/

// utk menggunakan eslint, pasang package pada devDependencies proyek. caranya dengan
// install packagenya "npm install eslint --save-dev"
// setelah instal, akan muncul eslint terpasang di package.json

// sblum digunakan, perlu dikonfgurasi dulu dengan cara "npx elsint --init"
// lalu ikuti petunjuk berikut:
// 1. pilih would to use ESLint "to check, find problems and enforce code style"
// 2. pilih type of modules "CommonJS"
// 3. pilih framework "none of these"
// 4. pilih does project use Ts "No"
// 5. pilih where does run code "Node"
// 6. pilih how define a style for project "Use a popular style guide"
// 7. pilih style guide want to follow "google style"
// 8. pilih which format your config to be in "JSON"
// 9. sisanya pilih semua "Y"
// setelah berhasil. cek ".eslintrc.json" di folder notes_app_back_end
// tambahkan npm runner ke package.json
// "lint" : "eslint ./"
// lalu jalankan npm run lint , hasilnya akan seperti ini:
/* -- output ---
 * > notes-app-back-end@1.0.0 lint
> eslint ./


/home/x260/Documents/dicoding-JS/notes-app-back-end/server.js
  1:55  error  Newline required at end of file but not found  eol-last

✖ 1 problem (1 error, 0 warnings)
  1 error and 0 warnings potentially fixable with the `--fix` option.
 * 
 */

  // dengan error tsb kita dapat melihat letak kesalahan penulisan kode kita sesuai dg style guide yang kita pilih