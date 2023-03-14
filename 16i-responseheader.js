// --- response header

// pada web server yang kita buat, ia memberikan respons dengan format dokumen HTML
// dokumen ini digunakan oleh browser dalam menampilkan web. anda bisa melihat ini ketika mengakses web server melalui browser
// pada url http://localhost:5000 server akan mengembalikan pesan "ini adalah homepage" atau
// url http://localhost:5000/about server akan mengembalikan pesan "halo! ini adalah halaman about"
// pesan yang ditampilkan tampak besar dan tebal karena ia dibungkus oleh elemen heading HTML

// sebenarnya server bs merespons dengan memberikan data dalam tipelain seperti xml, json, gambar atau sekedar teks biasa
// apapun mime types yang digunakan, web server wajib memberitahu pada client
// caranya, lampirkan property 'Content-Type' dengan nilai MIME yang disisipkan pada header response. untuk menyisipkan nilai pada header response, gunakan metod setHeader().
// berikut link penjelasan type MIME https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
/**
 * const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
};
 */

// anda bs menetapkan data pada header sebanyak yang diinginkan.metod setHeader() menerima dua parameter yakni nama properti dan nilai utk headernya
/**
 * const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.setHeader('X-Powered-By', 'NodeJS');
};
 */

// jika menetapkan header dengan properti yang tidak standar, atau anda membuat nama properti secara mandiri
// maka sangat disarankan utk menambah hruf X di awal nama properti
// link standar properti pada header cek disini : https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
// ketahuilah juga bahwa penulisan properti header dituliskan secara proper case atau setiap kata diawali dengan huruf kapital dan setiap katanya dipisahkan oleh tanda garis -

// latihan mengubah dan menambah nilai header response

// beberapa contoh type
// -1 response.setHeader('Content-Type', 'text/html');
// -2 response.setHeader('Content-Type', 'application/json');
// -3 response.setHeader('X-Powered-By', 'NodeJS');