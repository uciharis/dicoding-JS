// --- Membuat HTTP Server ---

// membuatnya dengan menggunakan Hapi framework
// silahkan pasang package @hapi/hapi denga eksekusi perintah berikut:

// npm install @hapi/hapi

// buka server.js lalu ganti kode nya dg kode pada latihan sebelumnya

/** -- server.js--
 * 
 * const Hapi = require('@hapi/hapi');
 * 
 * const init = async () => {
 * const server = Hapi.server({
 * port : 5000,
 * host : 'localhost',
 * });
 * 
 * await server.start();
 * console.log(`server berjalan pada ${server.info.uri}`);
 * };
 * 
 * init();
 */

// simpan kode tsb, lalu jalankan server dg nodemon pakai perintah:
// npm run start

// buka browser dan jalankan url http://localhost:5000

// sampai disini kita sudah menghubungkan alamat localhost:5000(web server) dg aplikasi client
// silahkan pilih " Change URL"
// lalu isi dengan host beserta port dari web server yang anda buat "localhost:5000"

//nb : ketika anda menggunakan ESlint, terkadang ditampilkan error
// apabila code style yg anda pilih adalah AirBnB , penggunaan console dianggap warning
// maka dari itu bs dimatikan dg aturan no-console pada berkas .eslintrc.json dg menambahkan properti no-console bernilai off

/** --eslintrc.json --
 * 
 * {
    "env": {
        "commonjs": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "airbnb-base"
    ],
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
        "no-console": "off"
    }
}
 * 
 */

// dengan begitu, warning penggunaan console akan hilang