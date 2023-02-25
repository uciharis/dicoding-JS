// --- kelas backend ---
/**
 *  yang akan dipelajari :
 * - arti back-end
 * - pengertian server
 * - cara client-server berkomunikasi lewat http
 * - memahami REST API
 */

// --- pengertian backend ---
// bagian dari aplikasi yang menyediakan kebutuhan pengguna tetapi tidak berinteraksi langsung dg user
// contoh : penyimpanan data, pengolahan
//backend mendukung front-end

// --- pengertian server --
// analogi server :
// user | front-end | -- server -- | backend
// sebagai jembatan frontend dan backend
// frontend tdk boleh akses langsung database (backend) , harus melalui server
//server merupakan sistem
// jenis server :
// - file server
// - application server
// - dns server (ubah nama domain ke format ip address)
// - web server
// - database server

// --- pengertian web server dan server ---
// web server : server yang dapat menjalankan program dan dpat diakses melalu internet atau intranet
// web service: program yang dijalankan di web server

// --- komunikasi client-server ---
// https dan http merupakan salah satu protokol yang dapat digunakan utk berinteraksi dg web server
// protokol itu dikenal dg pola request- response
// artinya : perlu melakukan permintaan (request) pada suatu hal agar mendapatkan (response) sesuatu
// informasi yang diminta mencakup :
// 1. request line : berisi metod seperti GET, POST, PUT, DELETE,path dan versi https yang digunakan
// 2. header : berisi info yang dilampirkan terkait rekuest seperti format dokumen, kunci akses, dsb
// 3. body(opsional) : mengandung data yang dibutuhkan oleh server.body tidak wajib ditampilkan apabila server tidak membutuhkan data apapun

// apabila informasi pada rekues tdak jelas, maka server akan menolak dengan respon negatif

// setiap rekuest yang dilakukan, baik sesuai atau tidak, akan mendapatkan respon. respon yang diberikan server ke client juga mengandung informasi berikut :
// 1. status line :berisi versi https yang digunakan, status kode 3 digit yang menandakan keberhasilan permintaan dan statust teks
// 2. header : mengandung informasi terkait response seperti format dokumen
// 3. body (opsional juga)

// sebuah rekues berhasil diproses apabila diberi code response diawali angka 1,2,3. selain itu maka adalah respon gagal