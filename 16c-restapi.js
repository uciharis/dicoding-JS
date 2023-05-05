//--- rest web service --
// dalam mengembangkan web service perlu menetapkan arsitektur apa yang hendak dipakai
// salah satu arsitektur web service yang banyak digunakan sampai saat ini adlah REST

// rest atau Representational State Transfer adalah satu gaya arsitektur yang diadaptasi ketika membangun web servicve
// arsitektur ini sangat populer karena relatif mudah
//rest menggunakan pola rekuest-response dalam berinteraksi. artinya ia memanfaatkan protokol http seperti yang sudah dipelajari sebelumnya

// --- REST API ---
// kaitannya REST dengan RESTFUL API adalah berkaitan. RESTful merupakan sebutan utk web service yang menggunakan arsitektur REST
//REST juga merupakan API karena ia digunakan untuk menjembatani antara sistem yang berbeda
// API : merupakan antarmuka yang menjadi perantara antara sistem aplikasi yang berbeda

// beberapa sifat  yang menjadi kunci pada RESTAPI adalah :
// -  client server : bisa mersepon permintaan yang dilakukan oleh client, baik respon berhasil maupun gagal (pakai protokol hhtp)
// - stateless : tidak boleh menyimpan keadaan (state) apapun ttg client. state harus selalu disimpan di client.tidak ada session di REST API.
// permintaan yang dilakukan client harus mengandung informasi yang jelas.jangan berharap RESTful API akan menyimpan informasi dari permintaan 
// sebelumnya berharap bisa digunakan kembali
// - cacheable : agar dapat merespon permintaan dengan cepat, sebaiknya REST API menerapkan prinsip cache.sehingga
//  setiap permintaan tidak selalu diambilkan datanya di database
// - layered : ketika REST API server memiliki arsitektur yang kompleks, seharusnya tidak perlu tahu bagaimana
// server melayaninya

// 4 poin dalam membangun REST API :
// - format request dan response
// - http verbs/ methods
// - http response code
// - url design