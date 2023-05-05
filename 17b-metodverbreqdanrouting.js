// --- Methode/ Verb Request dan Ruouting
// setelah membuat dan menjalankan server, selanjutnya menambahkan routing agar server dapat merespon permintaan sesuai deg meto dan url yang diminta
// oleh client.
// routing pada hapi tidak dilakukan di dalam Request handler seperti cara native.
// namun ia memanfaatkan objek route configuration yg disimpan pada metod server.route()
// berikut kode nya (terutama yang ditebalkan):
/**
 * const init = asynch ()=> {
 * const server = Hapi.server({
 * port : 5000,
 * host : 'localhost'
 * });
 * 
 * server.route({
 * method: 'GET',
 * path: '/',
 * handler: (request, h)=>{
 * return 'helo worled' ;
 * }
 * });
 * await server.start();
 * console.log(`server berjalan di ${server.info.uri}`);
 * 
 * };
 */

// objek route configuration memiliki properti yang bisa dimanfaatkan utk menspesifikasikan route yang
// diinginkan.
// termasuk menspesifikasikan metod, path dan fungsi sebagai handler utk menangani permintaan tsb (request handler)

// handler pada hapi dapat dipisahkan berdasarkan route yang ada. setiap spesifikasi route yang memiliki handler masing masing
// dengan begitu, tentu kode akan lebih mudah dikelola. hal ini dapat menghindari penggunaan if else yang bersarang

// server.route() selain dapat menerima route configuration, ia juga dapat menerima array dari route configuration. sehingga
// dapat dengan mudah menentukan banyak spesifikasi route dengan cara seperti ini:

/**
 * const init = async() => {
 * const server = Hapi.server({
 * port : 5000,
 * host : 'localhost'
 * });
 * server.route([
 * {
 * method : 'GET',
 * path : '/',
 * handler: (request, h)=>{
 * return 'Homepage':
 * },
 * },
 * {
 * method : 'GET',
 * path : '/about',
 * handler: (request, h)=>{
 * return 'About Page';
 * },
 * },
 * ]);
await server.start();
console.log(`server berjalan pada ${server.info.uri}`);
 * };
 */

// direkomendasikan utk memisahkan seluruh routes config pada berkas JS berbeda
// dengan begitu, satu berkas JS hanya memilik satu fungsi atau tanggung jawab saja (Single Responsibility principle)

/** routes.js
 * 
 * 
const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        },
    },
];
 
module.exports = routes;
 * 
 */

/** server.js
 * 
 * 
const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        },
    },
];
 
module.exports = routes;
 */

// --- Latihan Routing --
// buatlah seperti ketentuan berikut :
// -------------------------
// URL:'/'
// metod : GET
// mengembalikan pesan "Homepage"

// metod: <any> (selain metod GET)
// mengembalikan pesan "halaman tidak dapat diakses dengan metod tsb"
// ---------------------------

// --------------------------
// URL:'/about'
// metod : GET
// mengembalikan pesan "About page"

// metod : <any> (selain metod GET)
// mengembalikan pesan "halaman tidak dapat diakses dengan metod tsb"
// ----------------------------


// ---------------------------
// URL : <any> (selain '/' dan '/about')
// metod : mengembalikan pesan "halaman tidak ditemukan"
// --------------------------

// agar kode berkelompok, tulis route config pada berkas js terpisah. silahkan buat berkas js baru pada
// projek hapi dengan nama route.js kemudian tulis dg kumpulan routes config dalam bentuk array sesuai dg ketentuan

/** routes.js
 * 
 * const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method';
        },
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        },
    },
];
 
module.exports = routes;
 */

// ada beberapa metod properti baru yang memiliki tanda *, artinya adalah route dapat diakses menggunakan
// seluruh metod yang ada pada http

// kemudian nilai '{any*}' pada route paling akhir berfungsi utk menangani permintaan masuk
// pada path yang belum anda tentukan. ini merupakan teknik dalam menerapkan routing yang dinamis menggunakan Hapi
// namun routing dg nilai dinamis seperti itu akan kalah kuat dg nilai yang ditetapkan secara spesfik
// contoh bila array route config yang memiliki nilai seperti itu :
/**
 * const routes = [
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
];
 * 
 */

// kemudian client merequest dg spek berikut:
// curl -X GET http://localhost:5000
// maka server akan mengembalikan "homepage" karena route tsb lebih spesifik
// setelah menetapkan nilai routes config, gunakan nilainya menggunakan metod server.route() pada berkas server.js
// cek kode yang ditebalkan dibawah ini:

/** server.js
 * 
 * const Hapi = require('@hapi/hapi');
const routes = require('./routes');
 
 
const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });
 
    server.route(routes);
 
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};
 
init();

 */

// seharusnya server sudah bisa merespon sesuai dg yang diharapkan

// output :
/**
 * curl -X GET http://localhost:5000
// output: Homepage
curl -X GET http://localhost:5000/about
// output: About page
curl -X GET http://localhost:5000/test
// output: Halaman tidak ditemukan
curl -X POST http://localhost:5000
// output: Halaman tidak dapat diakses dengan method tersebut
 * 
 */