// --- STRUKTUR PROYEK ---
// pada pengembangan web server kali ini, kita tidak ingin semua kode ditulis dalam 1 berkas saja karna akan semrawut dan sulit utk dimaintenance
// karena sudah belajar teknik modularisasi pada node.js maka bukan masalah memisahkan kode dalam beberapa berkas

// kita akan gunakan single responsibility approach principle
// artinya 1 berkas JS dengan 1 tujuan saja
// maka dari itu, setidaknya kita akan membuat 4 berkas JS dg fungsi sbb:

// 1. server.js - memuat kode utk membuat, konfigurasi, dan jalankan server HTTP pak pake Hapi
// 2. routes.js - memuat kode konfigurasi routing server, seperti menentukan path, method dan handler yang digunakan
// 3. handler.js - memuat seluruh fungsi handler yang digunakan pada berkas routes
// 4. notes.js - memuat data ntes yang disimpan dlm bentuk Array

// semua berkas js itu dibuat dan disimpan dalam folder src. hal ini bertujuan utk memisahkan dari berkas konfig seperti .eslintrc.json, package.json dan nde_modules
// keseluruhan struktur proyek akan tampak seperti ini:
/**
 * notes-app-back-end
 * |-- node_modules
 * |-- src
 * | |--handler.js
 * | |--note.js
 * | |--routes.js
 * | |--server.js
 * |--.eslintrc.json
 * |--package.json
 * |--package-lock.json
 * |_package.json
 */

// kita langsung buat saja folder src beserta berkas JS nya.
// utk server.js, kita ckup memindahkan berkas lama ke folder src ya
// karena berkas server.js skrg berada di folder src, silahkan ubat alamat berkas tsb pada npm runner script di berkas package.json sbb
/**
 * "scripts": {
  "start": "nodemon ./src/server.js",
  "lint": "eslint ./src"
}, 
 */