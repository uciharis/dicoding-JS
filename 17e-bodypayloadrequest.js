// --- Body payload Request ---
// ketika menggunakan nodejs, utk mendapatkan data pada body request, kita harus menggunakan Readable Stream
// meskipun hanya merequest data sebatas teks.
// cara ini tidak semudah kita menginisialisasi sebua nilai pada var

// namun dengan menggunakan Hapi, tidak perlu lagi berurusan dg stream.
// hapi secara default akan mengubah payload JSON menjadi objek js
// dengan begitu tidak perlu lagi berurusan dengan jSON.parse()

// kapan pun client mengirimkan payload berupa JSON, hal tsb dapat diakses pada router handler melalui properti reques.payload
// contoh sbb:
/**
 * server.route({
 * method: 'POST',
 * path: '/login',
 * handler: (request,h)=>{
 * const {username, password} = request.payload;
 * return `Welcome ${username}!`;
 * },
 * });
 */

// pada contoh diatas, handler menerima payload melalui request.payload,mengirim data login dg struktur sbb:
// {'username': 'heri', 'password': 'encryptedpassword'}