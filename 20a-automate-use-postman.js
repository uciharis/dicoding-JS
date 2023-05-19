// --- Otomatisasi Testing pake POSTman

// Postman ternyata bisa melakukan uji secara otomatis sehngga tak perlu
// lagi melihat respon dari server secara manual utk memastikan respon sesuai harapan
// pengujian otomatis di POSTman menggunakan js, serupa dg unit tes dan integration tes

// melalui testing oto,kita bs menguji nilai dari status kode, propert header , hingga body respons.
// pengujian akan "pass" ketika semua variabel yang diuji sesuai ekspektasi
// bila tidak maka akan failed

// kita akan berkenala dg fitur collection dan environment yang ada di POSTman
// fitur ini akan dipakai dalam pengujian

// --- postman collection

// merupakan tempat simpan kumpulan request. kita bs anggap collection adalah folder
// yang simpan berkas, yaitu request

// setiap request yang pernah dikirim sebenarnya ada di history sidebar
// dalam penggunaan ringan, memilih dan menggunakan kembali history sangatlah membantu
// namun, semakin banyak request yang pernah dilakukan, history akan menumpuk tidak karuan.
// dengan adanya collection, kita bs mengelompokkan shg mudah diakses.


// --- postman Environment

// merupakan kumpulan variabel yang dapat digunakan pada req. di POSTman.
// ketika melakukan pengujian otomatis, terkadang kita perlu menyimpan nilai pada sebuah variabel.
// contoh saat req menambah catatan, kita akan mendapatkan id catatan tsb dari server.
//  id tsb perlu disimpan pada sebuah var agar dapat digunakan pada req selanjutnya.

// var dapat juga simpan nilai token, auth-key atau nilai lain selama proses uji

// utk menggunakan var. environment pada req, tuliskan nama var yang dibungkus dg kurung kurawal ganda
// contoh : {{noteId}}

// notasi tsb dapat digunakan di req URL, parameters, headers dan body data


// --- Skenario pengujian Otomatis

// - skenario 1 : adding new notes
/*
- pastikan response punya status code 201
- pastikan header response Content-Type memiliki nilai application/json
- pastikan body response adalah object
- pastikan body response memiliki properti dan nilai yang sesuai
- pastikan data pada response body memiliki noteId dan nilainya tidak kosong
*/

// - skenario 2 : getting all notes
/*
- pastikan response memiliki status code 200
- pastikan header response Content-Type memiliki nilai application/json
- pastikan body response adalah object
- pastikan body response memiliki properti dan nilai atau tipe data yang sesuai
- pastikan data pada response body memiliki array notes dan terdapat minimal 1 item di dalamnya
 */

// - skenario 3 : Getting specified note
/*
- pastikan response memiliki status code 200
- pastikan header response Content Type memiliki nilai application/json
- pastikan body response merupakan object
- pastikan body response memiliki properti dan nilai atau tipe data yang sesuai
- pastikan data pada response body memiliki properti note dan merupakan sebuah objek
- pastikan objek note di dalam data memiliki properti id, title, body dan tags dengan nilai yang sesuai
*/

// - Skenario 4 : Update Note
/*
- pastikan response memiliki status code 200
- pastikan header response Content-Type memiliki nilai application/json
- pastikan body response adalah object
- pastikan body response memiliki properti dan nilai yang sesuai
- ketika mengakses catatan yang diperbarui, pastikan catatan yang diperbarui memiliki nilai terbaru
 */

// - Skenario 5: delete note
/*
- pastikan response memiliki status code 200
- pastikan header response Content-Type memiliki nilai application/json
- pastikan body response adalah object
- pastikan body response memiliki properti dan nilai yang sesuai
- ketika mengakses catatan, pastikan catatan yang dihapus tidak ditemukan
 */



// --- Membuat Collection dan Environment

// 