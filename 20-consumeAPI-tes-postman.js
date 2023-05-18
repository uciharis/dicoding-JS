// --- Consume dan Uji RESTful API pake POSTMAN

// materi sebelumnya, kita uji webserver atau RESTful API pake aplikasi client yang dibuat dicoding
// nyatanya pada kebanyakan pengembangan API, jarang ada yang menyediakan front-end client utk uji fungsionalitas API
// utk itu digunakan POSTMAN utk menguji API karna punya API caller dalam HTTP req
// API punya GUI sehingga mudah dipahami
// kita tidak perlu berhadapan dg kode rumit hanya utk request HTTP seperti pake cURL
// silahkan install postman lewat web nya : https://www.postman.com/downloads/

// Konsumsi API pake Postman

// Silahkan buka apps Postman, lalu login
// utk membuat HTTP req, klik tombol "+" atau new tab
// sbelum lanjut, kita pelajari dulu komponen dari UI POstman

// pada bagian atas,terdapat tab halaman req. dibagian tsb ada komponen GET, bar utk mengisi URL dan tombol send
// Postman mendukung seluruh method yang ada di HTTP,sehingga dapat memilih opsi lain yang tersedia

// di bawahnya terdapat tab bersi : Params, Auth, Header dll
// bagian terakhir dibawah adalah kolom "response" yang menampilkan response body
// response dari server akan ditampilakn secara terformat sesua dg Content-Type yang diberikan server
// jika respons HTML -> akan dirender layaknya browser
// jika respons JSON --> akan diformat dg struktur JSON
// POSTman memiliki fungsionalitas lengkap utk sebuah API Caller
// fokus kita adalah menggunakan POSTman sbg API caller
// saatny mencoba konsumsi API baik mendapatkan catatan,  search catatan secara spsifik, ubah catatan dan apus catatan


// --- Tambah catatan baru
// utk nambah catatan baru, pada halaman request ubah method GET jadi POST lalu isi req. URL dengan localhost:5000/notes
// pilih tab Body utk beri catatan
// pilih opsi raw dan ganti format text jadi JSON
// lalu isi berikut:
/*
{
    "title" : " catatan A",
    "tags" : ["android","web"],
    "body" : "Isi dari catatan A" 
}
 */

// lalu klik "send"
// pastikan server berjalan dlu, dg cara : npm run start-dev

// secara default, Postman memformat respon agar lbh mudah dibaca, utk melihat respon asli silahkan cek di tab Raw
