// --- URL Design ---
// url,path atau endpoint adlah salah satu bagian terpenting ketika membangun REST API
// dengan merancang endpoint yang baik, penggunaan API akan lebih mudah dipahami
// dalam merancang endpoint, perlu mengikuti aturan umum/ convention agar penggunaan API memiliki standar yang dmengerti banyak developer

// gunakan kata benda daripada kata kerja pada endpoint path
// maksudnya adalah titik akhir path. contoh :
// /getArticles atau /addArticles
// cukup berikan endpoint GET /articles untuk mendapatkan data artikel atau POST /articles utk menambahkan artikel

//gunakan kata jamak pada endpoint utk resource collection
//ini dikarenakan jarang ada data yg memiliki 1 item
// dengan jamak, diharapkan kita konsisten dg isi database

// gunakan endpoint berantai utk resource yg memiliki hirarki atau relasi
//contoh utk mendapatkan daftar komentar pada sebuah artikel, endpoint GET /articles/:id/comments
//tidak hanya GET, prinsip ini juga cocok diterapkan pada HTTP verb POST, PUT ataupun DELETE