/** --- mengenal concurrency ---
 * 
 * concurrency adalah beberapa komputasi yg terjadi pada saat bersamaan.
 * sejauh ini kita menulis kode secara synchronous.
 * lebih lanjut kita akan mempelajari materi :
 * - menjalankan program secara asynchronous
 * - menangani kode asynchronous
 * 
 * dalam synchronous program, kode dijalankan secara berurutan dari atas ke bawah.
 * sedangkan dalam asynchronous program, jika kita menulis baris kode, kode tsb dapat dieksekusi
 * bersamaan tanpa menunggu kode baris pertama selesai dijalankan (synchronous)
 * 
 * dalam kode program asynchronous, task kecil akan lebih dahulu selesai dijalankan dibanding dengan task yang lebih besar
 * meskipun task yg besar dijalankan terlebih dahulu. jadi sembari menjalankn task besar dan kecil bersamaan,
 * tetapi task yang lebih kecil kemungkinan akan selesai terlebih dahulu.
 * 
 * program asynchronous memungkinkan sesuatu operasi berjalan sembari menunggu operasi lainnya selesai.
 * umumnya yg memanfaatkan asynchronous adalah operasi yang besar dan membutuhkan waktu yg lama
 * seperti mengambil data dari internet atau API, menyimpan data ke database dan membaca data dari sebuah berkas
 */