// ---Path parameter ---
// path atau routing bs dikatakan sbg alamatnya yg digunakan client utk melakukan permintaan ke server
// alamat atau path yang dibuat biasanya merupakan teks verbal yang dapat dimengerti oleh client
// tak jarang hanya dengan membaca path dari sebuah tautan kita langsung mengerti apa yang cliemt minta ke server
// sebagai conto kita membaca https://github.com/dicodingacademy. dapat kita baca habwa cliem meminta server utk menampilkan profil github dengan username dicodingacademy
// contoh lain, dari alamat https://twitter.com/maudyayunda yaitu client meminta server utk akses profil twitter maudy
// twitter dan github menggunakan pendekatan yang sama dalam menampilkan profil halaman
// mereka memanfaatkan username sbg bagian dari path utk melakukan permintaan ke server
// jika mereka memiliki banyak pengguna yang banyak, apakah mereka menetapkan route scara satu per satu berdasarkan username utk setiap penggunanya ?
//  tentu saja tidak

// utk melakukan hal tsb, twitter dan github menggunakan teknik path parameter, di Hapi framework teknik tsb sangat mudah utk diterapkan. cukup dg membungkus path dengan tanda {}
// sbg contoh:
/** -- contoh penerapan path parameter dg Hapi:
 * 
 * server.route({
 * method: 'GET',
 * path: '/users/{username}',
 * handler: (request,h)=>{
 * const {username}=request.params;
 * return `Hello, ${username}!`;
 * },
 * });
 */

// kode diatas terdapat properti path pada bagian path yang ditulis {username}
// itu berarti, server memberikan bagian teks tsb utk client manfaatkan sebagai parameter

// nantinya parameter ini akan disimpan sbg properti pada request.params yang memiliki handler dengan
//  nama sesuai yang anda tetapkan. bila anda melakukan permintaan ke server dengan alamat '/users/harry' maka server akan menanggapi dengan 'helo, harry!'

// pada contoh kode diatas,nilai path parameter wajib diisi oleh client. bila client mengabaikannya dengan
// melakukan permintaan pada alamat '/users' mka server akan mengalami eror
// pada Hapi, anda dapat membuat path parameter bersifat opsional. caranya dengan menambahkan tanda '?' di akhir nama parameter.
// berikut contoh yang sama namun dengan implementasi opsional path parameter

/** -- mplementasi opsional param Hapi
 * server.route({
    method: 'GET',
    path: '/users/{username?}',
    handler: (request, h) => {
        const { username = 'stranger' } = request.params;    
        return `Hello, ${username}!`;
    },
 });
 * 
 */

 // sekarang bila client meminta pada alamat '/users/dicoding', server menanggapi dengan 'helo, dicoding!' dan
 // bila client meminta hanya pada path '/users' server akan menanggapi dengan 'helo, strangers!'

 // anda bs menetapkan lebih dari satu path parameter, namun perlu diketahui bahwa optional path param hanya dapat digunakan di akhir bagian path saja.
 // jika anda menetapkan optional path di tengah-tengah path parameter lain contohnya /{one?}/{two},
 // maka path ini dianggap tidak valid oleh Hapi

 // --Latihan Path parameter

 // pada latihan ini, kita buat route baru dg nilai path /hello/{name?}
 // jika client melampirkan nilai path parameter, server harus mengembalikan dg pesan "helo, name!"
 // namun jika tidak, server harus mengembalikan dg nilai "helo, stranger!"
 // buka berkas route.js dan isikan kode berikut:
 /** route.js
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
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            
        }
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

// di dalam handler, dapatkan nilai path param melalui properti request.params
// kita manfaatkan objek destruct utk mendapatkan nilainya. isikan juga nilai default "stranger"
// lalu return fungsi handler dengan pesan sesuai ketentuan shg tampak seperti berikut:

/**
 * {
    method: 'GET',
    path: '/hello/{name?}',
    handler: (request, h) => {
       const { name = "stranger" } = request.params;
       return `Hello, ${name}!`;
   },
},
 * 
 */

// simpan perubahan pada router.js lalu jalankan server
// lakukan permintaan lewat curl atau browser pada path /hello/dicoding atau /hello

//curl -X GET http://localhost:5000/hello/dicoding
// output: Hello, dicoding!
//curl -X GET http://localhost:5000/hello
// output: Hello, stranger!