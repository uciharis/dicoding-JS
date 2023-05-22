// --- Menjalankan Seluruh Permintaan

// kita sudah punya 5 skenario request pada collection :
// adding notes(POST), getting all notes(GET), Getting specified notes(GET), Update Note(PUT) dan Delete Note(DEL)

// pilih req dan tekan run pada NOTES API Test

// selain menggunakan GUI Postman anda juga dapat mengakses CLI bernama Newman

// dengan newman, kita bs akses Postman Collection tanpa berinteraksi dg postman, namun kita perlu mengekspor Postman Collection
// telebih dahulu ke bentuk JSON dg cara: 
// pilih collection dan Notes Api Test lalu pada titik tiga pilih opsi Export
// pilih opsi collection v2.1 lalu tekan tombol Export
// setelah itu kita jg bs mengeksport Postman Environment dg cara yg sama, pilih environment dan Notes API Test
// tekan titik tiga dan export dlm bentuk JSON

// -- pasang Newman

// Newman merupakan aplikasi dlm bentuk binary yg dijalankan dg CLI. Newman dapat diinstal lewat npm atau yarn
// kode : npm install newman -gg
// janlup jalankan webserver. kode : npm run start-dev

// setelah terinstall , jalankan perintah berikut :
// newman run notes-api-test.postman_collection.json --envirnment notes-api-test-postman_environment