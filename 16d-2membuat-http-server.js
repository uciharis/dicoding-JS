/** --- Membuat http server ---
 * pengembangan backend adalah hal prioritas utk nodejs.
 * nodejs handal utk membangun aplikasi backend salah satunya adalah web server alias komputer
 * yang menangani dan menanggapi permintaan dari client.
 * nodejs menyediakan core modules http utk membangun web server
 * 
 * const http = require('http);
 * 
 * http module memiliki banyak member seperti objek, properti atau metod yang berguna utk
 * melakukan hal hal terkait protokol http.
 * salah satu member yang penting utk kita ketahui skrg adalah metod http.createServer()
 * metod ini berfungsi utk membuat HTTP server yang merupakan instance dari http.server
 * metod ini menerima satu parameter custom callback yang digunakan sbg request listener
 * di dalam request listener inilah logika utk menangani dan menanggapi sebuah request ditulis :
 * 
 * --- ini kode:
 * 
 * const http = require('https');
 * const requestListener = (request, response)=>{ //parameter request : objek yg berisikan info permintaan
 * }; //parameter response : objek yg digunakan utk menanggapi permintaan
 * const server = http.createServer(requestListener);
 */

// request listener memiliki 2 parameter yaitu request dan response
// request merupakan objek yang menyimpan informasi ttg permintaan yang dikirimkan oleh client
// di dalam objek ini kita bisa melihat alamat yang diminta, data yg dikirim ataupun HTTP metode yg digunakan oleh client

// sementara itu, response merupakan objek yang digunakan utk menanggapi permintaan
// melalui objek ini kita bisa menentukan data yang diberikan, format dokumen yg digunakan, kode status dan info response lainnya
/** --- ini kode:
 * 
 * const requestListener = (request, response)=> {
 * response.setHeader('Content-Type', 'text/html');
 * 
 * response.statusCode = 200;
 * response.end('<h1>Halo HTTP Server!</h1>');
 * };
 */

// kode diatas merupakan contoh logika yg bisa dituliskan di dalam request listener
// request listener akan menanggapi setiap permintaan dengan dokumen HTML, kode status 200 dan menampilkan
// konten "Halo HTTP Server!"
// lalu bagaimana caranya agar server selalu sedia menangani permintaan yang masuk ?
// setiap instance dari http.server juga memiliki metod listen(). metod inilah yang membuat http.server
// selalu standby untuk menangani permintaan yang masuk dari client. setiap kali ada permintaan yang masuk, request listener akan tereksekusi
// metod listen() yang menerima 4 parameter berikut detailnya:
// -port(number) : jalur yang digunakan utk mengakses HTTP server
// -hostname(string) : nama domain yang digunakan oleh HTTP server
// -backlog(number) : maksimal koneksi yang dapat ditunda(pending) pada HTTP server
// -listeningListener(function) : callback yang akan terpanggil ketika HTTP server sedang bekerja(listening)

// namun, keempat parameter diatas bersifat opsional. kita bisa memberikan nilai port saja, atau kombinasi apapun dari keempatnya
// hal itu tergantung terhadap kebutuhan anda. namun lazimnya, ketika memanggil metod listen() kita memberikan nilai port, hostname, dan
// listeningListener.

/**--- ini kode
 * 
 * const port = 5000;
 * const host = 'localhost';
 * 
 * server.listen(port, host, ()=>{
 * console.log(`Server berjalan pada https://${host}:${port}`);
 * });
 */

// --latihan membuat HTTP Server ---
// projeknya dibuat di folder nodejs-web-server
// isikan kode berikutke dalam file server.js
/** -- copy kode ini ke server.js (sudah berpindah ke serverbakbak.js)
 * 
 * const http = require('http');
 
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
 
    response.statusCode = 200;
    response.end('<h1>Halo HTTP Server!</h1>');
};
 
 
const server = http.createServer(requestListener);
 
const port = 5000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});
 * 
 */

// setelah itu jalankan perintah : npm run start 
// jika berhasil maka akan muncul pesan "Server berjalan pada https://localhost:5000"
// cek folder nodejs-web-server yang berisi server.js, serverbak.js dan package.json
// anda bisa coba melakukan request melalui terminal ke server tsb melalui cURL sbb:
// curl -X GET https://localhost:5000/
// output : <h1>Halo HTTP Serer!</h1>novi@localhost:~> 
//atau melalui browser dg mengetik http://localhost:5000/