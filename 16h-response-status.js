// --- response status

// merupakan salah satu bagian dari respon yng berisikan tentang informasi apakah sebuah request
// berhasil atau gagal dilakukan
// statust yang diberikan berupa kode dan pesan dari kode tsb dalam bentuk teks(statust message)
// response status dikirim oleh server
// status kode terdiri dari 3 digit dengan ketentuan sbb:
// # 100-199 : informational status
// # 200-299 : succesful responses.
// # 300-399 : redirect
// # 400-499 : client error
// # 500-599 : server eror

// fokus terhadap poin yang sering digunakan adalah 200-299, 400-499, dan 500-599
// lebih lengkap disini : https://developer.mozilla.org/id/docs/Web/HTTP/Status
// pada nodejs, penetapan nilai statust code pada response dilakukan melalui properti response.statusCode
/**
 * const requestListener = (request, response)=>{
 * // memberitahu client bahwa request resource yang diminta tidak ada
 * response.statusCode = 404;
 * }
 */

//status kode biasa diikuti dengan status message seperti 200 ok, 400 bad request atau 404 not found
// status message memiliki nilai standar sesuai dengan response code. namun kita bs merubahnya
// gunakan properti response.statusMessage

/**
 * const requestListener = (request, response) => {
    response.statusCode = 404;
 
    // 404 defaultnya adalah 'not found'
    response.statusMessage = 'User is not found';
};
 */

// baiknya tidak mengubah statusMessage dari nilai default bila tidak diperlukan. walaupun hanya sekedar menerjemahkan

// berikut kode response status (letakkan di server.js)
/**
 * const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
 
    const { method, url } = request;
 
    if(url === '/') {
        if(method === 'GET') {
            response.statusCode = 200;
            response.end('<h1>Ini adalah homepage</h1>');
        } else {
            response.statusCode = 400;
            response.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`);
        }
    } else if(url === '/about') {
        if(method === 'GET') {
            response.statusCode = 200;
            response.end('<h1>Halo! Ini adalah halaman about</h1>')
        } else if(method === 'POST') {
            let body = [];
    
            request.on('data', (chunk) => {
                body.push(chunk);
            });
 
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                response.statusCode = 200;
                response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`);
            });
        } else {
            response.statusCode = 400;
            response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`);
        }
    } else {
        response.statusCode = 404;
        response.end('<h1>Halaman tidak ditemukan!</h1>');
    }
};
 */