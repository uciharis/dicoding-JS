/** --Routing request--
 * 
 * ketika menangani rekuest, hal yang perlu kita acek selain metod aalah url yang dituju dari rekuest
 * saat kita akses dicoding.com dan dicoding.com/about tentu hasilnya akn berbeda
 * 
 * rekuest ke dicoding.com akan menampilkan homepage
 * sedangkan dicoding.com/about akan menampilkan halaman tentang dicoding
 * teknik ini dinamakan routing
 * routung merupakan istilah dalam menentukan respon server bedarsarkan path atau url yang diminta oleh client
 * 
 * dalam http.clientRequest utk mendapatkan nilai url sangat mudah
 * 
 * -- ini kode
 * 
 * const requestListener = (request, response)=>{
 * const{url}=request;
 * };
 * 
 * 
 * properti url akan mengembalikan nilai path secara lengkap tanpa host dan port yang digunakan server
 * contoh, ketika client meminta alamat http://localhost:5000/about atau http://localhost:5000/about/ maka url
 * akan bernilai '/about'
 * bila meminta alamat http://localhost:5000 atau http://localhost:5000/ maka url akan bernilai 'l'
 * 
 * dengan mendapatkan nilai url, kita dapat merespons client sesuai dengan path yang diminta
 * 
 * -- ini kode
 * 
 * const requestListener = (request, response)=> {
 * const {url}= request;
 * if(url ==='/' {
 * // curl http://localhost:5000/
 * 
 * }
 * if(url==='/about'){
 * // curl http://localhost:5000/about
 * }
 * 
 * // curl  http://localhost:5000/<any>
 * };
 * 
 * atau mengkombinasikan evaluasi dg method request agar respon lebih spesifik lagi
 * 
 * -- ini kode
 * 
 * const requestListener = (request, response) => {
    const { url, method } = request;
 
    if(url === '/') {
 
        if(method === 'GET') {
            // curl -X GET http://localhost:5000/
        }
 
        // curl -X <any> http://localhost:5000/
    }
 
    if(url === '/about') {
 
        if(method === 'GET') {
            // curl -X GET http://localhost:5000/about
        }
 
        if(method === 'POST') {
            // curl -X POST http://localhost:5000/about
        }
 
        // curl -X <any> http://localhost:5000/about
    }
 
    // curl -X <any> http://localhost:5000/<any>
};
 */

// latihan routing request
// berikut ketentuan yang digunakan :

// - url: '/'
// * metod GET : mengembalikan "ini adalah homepage"
// * metod <any> atau selain GET : mengembalikan : "halaman tidak dapat diakses dg <any> request"

// - url : '/about'
// * metod GET : mengembalikan "Halo ini adalah halaman about"
// * metod POST(dengan melampirkan data name pada body) : mengembalikan "halo,...! ini adalah halaman about"
// * metod <any>( selain GET dan POST) : mengembalikan "halaman tidak dapat diakses dg ... request"

// -url : <any>( selain '/' dan '/about')
// * metod <any> : mengembalikan 'halaman tidak ditemukan'

// bentuk akhir code seperti ini (simpan di server.js)

/** --- routing request jawaban lengkap
 * 
 * const http = require('http');
 
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
 
    const { method, url } = request;
 
    if(url === '/') {
        if(method === 'GET') {
            response.end('<h1>Ini adalah homepage</h1>');
        } else {
            response.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`);
        }
    } else if(url === '/about') {
        if(method === 'GET') {
            response.end('<h1>Halo! Ini adalah halaman about</h1>')
        } else if(method === 'POST') {
            let body = [];
    
            request.on('data', (chunk) => {
                body.push(chunk);
            });
 
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`);
            });
        } else {
            response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`);
        }
    } else {
        response.end('<h1>Halaman tidak ditemukan!</h1>');
    }
};
 
const server = http.createServer(requestListener);
 
const port = 5000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});
 * 
 */

// -- output jika benar dan kita tes response server

/**
 * curl -X GET http://localhost:5000/about
// output: <h1>Halo! Ini adalah halaman about</h1>
curl -X POST -H "Content-Type: application/json" http://localhost:5000/about -d "{\"name\": \"Dicoding\"}"
// output: <h1>Halo, Dicoding! Ini adalah halaman about</h1>
curl -X PUT http://localhost:5000/about
// output: <h1>Halaman tidak dapat diakses menggunakan PUT request</h1>
curl -X DELETE http://localhost:5000/about
// output: <h1>Halaman tidak dapat diakses menggunakan DELETE request</h1>
 * 
 */