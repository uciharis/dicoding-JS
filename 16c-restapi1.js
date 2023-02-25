// --- format request dan response---
// REST API seringnya menggunakan JSON sbagai format data baik itu apda rekues ataupun response
// json adalah salah satu format standar dalam transaksi data
// json sangat populer dan mengalahkan pendahulunya XML.
// agar REST API selalu merespon dengan format json, pastikan setiap respon terdapat properti Content-Type : application/json
// json memiliki struktur seperti javascript objek menggunakan key-value.
// bedanya key json selalu dituliskan menggunakan tanda kutip dua " "
// value pada json dapat menampung nilai primitif seperti string, number, boolean, atau nilai non primitif seperti objek atau array
//pada latian sebelumnya kita sudah melihat bagaimana bentuk json ketika mengirimkan data pembelian kopi dan data pada body respon dari server
// berikut contoh struktur json ketika melakukan GET request terhadap https://coffee-api.dicoding.dev/coffees 
/**
 * -- struktur json :
 * 
 * {
  "message": "Berikut daftar kopi yang tersedia",
  "coffees": [
    {
      "id": 1,
      "name": "Kopi Tubruk",
      "price": 12000
    },
    {
      "id": 2,
      "name": "Kopi Tarik",
      "price": 15000
    },
    {
      "id": 3,
      "name": "Kopi Jawa",
      "price": 18000
    }
  ]
}
 * 
 */
// walaupun memiliki javascript objek notation, bukan berarti kita harus menggunakan javascript utk
// mengolah data dg format json. format json dapat digunakan hampir di semua bahasa pemrograman yang ada