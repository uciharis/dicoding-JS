// ---web framework
// sebuah kerangka utk membantu pengembangan web
// web framework menyediakan tools dan library yg dapat menyederhanakan hal hal utk pengembangan web seperti buat server, routing, handle request
// interaksi dg database, otorisasi

//beberapa framework web d nodejs
// - expressjs : https://expressjs.com/
// ** ringan, mudah integrasi dg web front end, mirip nodejs native
// ## tidak punya aturan penggunaan, tidak ada kerangka baku

// - hapi : https://hapi.dev/
// ** relatif lengkap dan komplek, bs authentic layer, tokenize, cors
// ## abstraksi kejauhan dr nodejs native

// pembelajaran selanjutnya menggunakan hapi utk fitur dasar

// -- membangun web server pake HAPI

// 1. buat projek "hapi-web-server"
// 2. npm init --y
// 2a. atur NPM runner pada package.json sbb:
/* ---ini kode ---
"scripts" : {
"start" : "node server.js"
}
*/
// 3a. buat file js dengan nama server.js
// 3b. tuliskan : console.log('Halo, kita akan belajar membuat server menggunakan Hapi');
// 4. jalankan : npm run start