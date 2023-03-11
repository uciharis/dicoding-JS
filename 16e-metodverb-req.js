/** --- method/ Verb Request
 * 
 * web server yang sudah dibuat, berhasil merespons dan menampilkan data dalam dokumen html.
 * namun, web server blm mengenali sepenuhnya permintaan yang diberikan oleh client
 * jika client meminta dengan path atau metode yang berbeda, server akan merespons dg data yang sama
 * 
 * -contoh beberapa metod berbeda menghasilkan output yg sama
 * 
 * curl -X POST http://localhost:5000
// output: <h1> Halo HTTP Server!</h1>
curl -X PUT http://localhost:5000
// output: <h1> Halo HTTP Server!</h1>
curl -X DELETE http://localhost:5000
// output: <h1> Halo HTTP Server!</h1>
curl -X GET http://localhost:5000
// output: <h1> Halo HTTP Server!</h1>

 * hal tsb wajar karena blm ada logika pada server utk menangani permintaan dr metod yang berbeda
 * 
 * fungsi request listener menyediakan dua parameter yaitu request dan response
 * fokus ke parameter request, parameter ini merupakan instance dari http.ClientRequest yang memiliki
 * banyak properti di dalamnya.
 * 
 * melalui properti tsb kita dpat mengetahui seperti apa karakteristik dari permintaan HTTP yang dilakukan oleh client.
 * seperti metod yg dipakai, path atau alamat yg dituju, data yang dikirimkan dan informasi mengenai permintaan tsb
 * 
 * utk mendpatkan nilai metod dr request, gunakan properti request.method sbb:
 * 
 * --ini kode :
 * 
 * const requestListener = (request, response)=>{
 * const method = request.method;
 * };
 * 
 * atau anda bs menggunakan cara lain dg object destructuring sbb:
 * 
 * -- ini kode :
 * 
 * const requestListener = (request, response)=>{
 * const{method}= request;
 * };
 * 
 * properti metod bernilai tipe metod dalam bentuk string. nilainya dapat berupa "GET", "POST", "PUT" atau
 * metod lainnya sesuai dg yang client gunakan ketika melakukan permintaan.
 * dengan memiliki nilai metod, kita dapat memberikan respons berbeda berdasarkan tipe metod nya
 * 
 * -- ini kode:
 * 
 * const requestListener = (request, response)=>{
 * const {method}= request;
 * if(method==='GET'){
 * //response ketika GET}
 * }
 * if(method==='POST'){
 * //response ketika POST
 * }
 * // evaluasi metode lainnya
 * };
 * 
 * objek request banyak akan properti dan fungsi lain didalamnya selain properti metod.
 * selengkapnya bs melihat ke sini : https://nodejs.org/api/http.html#http_class_http_clientrequest
 */

// latihan handling request
// buka server.js pada projek nodejs-web-server,
// isikan response berikut
/** -- kode response --
 * 
 * const http = require('http');
 
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
 
    const { method } = request;
 
    if(method === 'GET') {
        response.end('<h1>Hello!</h1>');
    }
 
    if(method === 'POST') {
        response.end('<h1>Hai!</h1>');
    }
 
    if(method === 'PUT') {
        response.end('<h1>Bonjour!</h1>');
    }
 
    if(method === 'DELETE') {
        response.end('<h1>Salam!</h1>');
    }
};
 
const server = http.createServer(requestListener);
 
const port = 5000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});
 * 
 * simpan, lalu jalankan perintah npm run start lalu coba request ke server
 * dengan metod yang berbeda melalui cURL sbb:
 * 
 * curl -X GET http://localhost:5000
// output: <h1>Hello!</h1>
curl -X POST http://localhost:5000
// output: <h1>Hai!</hai>
curl -X PUT http://localhost:5000
// output: <h1>Bonjour!</h1>
curl -X DELETE http://localhost:5000
// output: <h1>Salam!</h1>
 */