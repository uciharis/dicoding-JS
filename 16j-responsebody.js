// --- response body
// header menampung informasi tentang respon yang diberikan oleh server
// informasi tsb berupa statust respons, MIME type, tanggal atau informasi lain
// header respons hanya sebagai metadata( informasi yg menjelaskan data utama)

// http respon juga membawa body,disinilah data utama atau konten disimpan

// objek response yang berada pada parameter fungsi request listener adalah instance dari http.serverResponse
// dimana ia merupakan WritableStream
// seperti objek WritableStream lainnya, kita menuliskan data pada respon menggunakan metod response.writer() yang diakhiri dengan metod response.end()
/**
 * const requestListener = (request, response) => {
    response.write('<html>');
    response.write('<body>');
    response.write('<h1>Hello, World!</h1>');
    response.write('</body>');
    response.write('</html>');
    response.end();
};
 */

// seperti yang diketahui, metod end() pada WritableStream dapat digunakan utk menulis data terakhir sebelum proses penulisan berakhir
// sehingga dapat ditulis menjadi :
/**
 * const requestListener = (request, response) => {
    response.end('<html><body><h1>Hello, World!</h1></body></html>');
};
 */

// latihan mengubah data pada body response
// di latihan sebelumnya anda sudah mengubah properti Content-Type pada header menjadi application/js
// namun utk konten yang dikirim server pada body masih berformat HTML
// kita akan mengubah konten pada body menjadi format JSON

// setiap JSON yang akan kita kirim harus memiliki message
// nilai properti message akan diisi dengan pesan yang sebelumnya kita berikan dalam format HTML
// untk lebih jelasnya, ini contoh response body jika ada halaman yang tidak ditemukan:
/**
 * {
 * "message" : "halaman tidak ditemukan"
 * }
 */

// misal kita ingin ketika client akses halaman tidak ditemukan, maka kodenya seperti ini
/**
 * response.end('<h1> halaman tidak ditemukan </h1>');
 */
// menjadi
/**
 * response.end(JSON.stringify({
    message: 'Halaman tidak ditemukan!',
}));
 */

// karena response.end() menerima string atau buffer, maka kita perlu mengubah objek JS menjadi JSON string dg JSON.stringify().
// mari kita perubahan yang ada. simpan pada server.js
// server akan merespon konten dg format JSON :
/**
 * curl -X GET http://localhost:5000/anything
// output: { "message":"Halaman tidak ditemukan!"}
curl -X GET http://localhost:5000/test
// output: { "message":"Halaman tidak ditemukan!"}
 */
// fungsi request listener seharusnya seperti ini:
/**
 * const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('X-Powered-By', 'NodeJS');
 
    const { method, url } = request;
 
    if(url === '/') {
        if(method === 'GET') {
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: 'Ini adalah homepage',
            }));
        } else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses dengan ${method} request`,
            }));
        }
    } else if(url === '/about') {
        if(method === 'GET') {
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: 'Halo! Ini adalah halaman about',
            }));
        } else if(method === 'POST') {
            let body = [];
    
            request.on('data', (chunk) => {
                body.push(chunk);
            });
 
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                response.statusCode = 200;
                response.end(JSON.stringify({
                    message: `Halo, ${name}! Ini adalah halaman about`,
                }));
            });
        } else {
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses menggunakan ${method}, request`
            }));
        }
    } else {
        response.statusCode = 404;
        response.end(JSON.stringify({
            message: 'Halaman tidak ditemukan!',
        }));
    }
};
 */

// seharusnya sever akan merespon JSON sepenuhnya
/**
 * curl -X GET http://localhost:5000/
// output: {"message":"Ini adalah homepage"}
curl -X GET http://localhost:5000/about
// output: {"message":"Halo! ini adalah halaman about"}
curl -X DELETE http://localhost:5000/
// output: {"message":"Halaman tidak dapat diakses dengan DELETE request"}
 */