/** --- onRejected with catch method ---
 * salah satu cara menulis kode yg baik adalah mengikuti prinsip separation of concern
 * separation of concern atau pemisalah masalah adalah mengorganisasikan kode ke dalam
 * bagian2 yg berbeda berdasarkan tugas tertentu.
 * hal ini memudahkan kita kelak mencari kode yg salah jika aplikasi tdk bekerja
 * 
 * perlu diketahui bahwa method .then() akan mengembalikan nilai promise yg sama dg ketika objek promise dipanggil
 * melalui sifat ini, drpd kita menetapkan logika resolve dan reject pada 1 method .then(), kita dapat memisahkan kedua logika tsb menggunakan
 * masing2 method .then() sbb:
 * 
 * -- ini kode --
 *  checkStock()
 *  .then(handleSuccess)
 *  .then(null, handleFailure);
 * -- akhir kode --
 * 
 * namun utk menetapkan onRejected handler, kita perlu memberikan nilai null pada parameter pertama method .then()
 * hal ini sedikit merepotkan. solusinya dapat menggunakan method lain yaitu .catch()
 * method .catch() mirip seperti .then() namun hanya menerima 1 parameter funct yg digunakan di rejected handler.
 * metod .catch() ini akan terpanggil ketika objek promise memiliki kondisi onRejected. berikut contoh:
 * 
 * --- ini kode ---
 *  checkStock ()
 * .then(handleSuccess)
 * .catch(handleFailure);
 * ---akhir kode ---
 * 
 * dengan menggunakan metod .catch() kita dapat menerapkan prinsip separation of concerns sekaligus
 * membuat kode menjadi lebih rapi
 */