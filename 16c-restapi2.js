// ---https verbs n methods ---
// karena REST API menggunakan protokol HTTP, kita dapat memanfaatkan HTTP verb untuk menentukan aksi
// GET : untuk mendapatkan data
// POST : untk mengirimkan data baru
// PUT : untuk memperbarui data yang ada
// DELETE : untuk menghapus data
// verbs diatas umum digunakan utk operasi CRUD

// -- https response code --
// status line merupakan salah satu bagian dari http response. di dalam status line terdapat response
// di dalam status line terdapat response code yang mengindikasikan bahwa permintaan yang client lakukan berhasil/ tidak
// karena itu, ketika membangun RESTP API kita perlu memperhatikan dan menetapkan response code  secara benar
// status code bernilai 3 digit angka. pada REST API , berikut nilai status kode yang sering digunakan:
// - 200(OK) : request client berhasil dijalankan oleh server
// - 201(Created) : request client menambah/ membuat resource berhasil dijalankan oleh server
// - 400(Bad Request) : request client gagal karena proses validasi input dari client gagal
// - 401(Unauthorized) : request client gagal dijalankan karena user belum melakukan proses autentifikasi
// - 403(Forbidden) : request client gagal dijalankan karena tidak memiliki akses ke resource yg diminta
// - 404(Not Found) : request client gagal dijalankan karena tidak ditemukan
// - 500(Internal Server Error) : request client gagal dijalankan karena server error

// ketika request client gagal, kita harus mengembalikan status kode yang sesuai dengan kesalahan yang terjadi