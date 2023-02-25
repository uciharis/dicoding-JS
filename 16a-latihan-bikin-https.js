// --- latihan membuat request https ---
// membuat request pada web service menggunakan cURL (client url)
// cURL : merupakan software berbasis CL yg dapat melakukan transaksi data melalui beberapa protoko internet salah satunya adalah https/http
// skenario yang akan dibuat(kasus warung kopi misalkan) adalah:
// 1. request menu kopi
// 2. beli kopi yang available
// 3. beli kopi yang not available

//kode curl berikut :
// curl -X GET https:coffee-api.dicoding.dev/coffees -i

//output:
/**
 * HTTP/1.1 200 OK
Server: nginx/1.18.0 (Ubuntu)
Date: Sat, 25 Feb 2023 06:57:34 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 188
Connection: keep-alive
content-security-policy: upgrade-insecure-requests
referrer-policy: strict-origin-when-cross-origin
x-frame-options: DENY
x-content-type-options: nosniff
x-xss-protection: 1; mode=block
vary: origin
access-control-expose-headers: WWW-Authenticate,Server-Authorization
cache-control: no-cache
accept-ranges: bytes

{"message":"Berikut daftar kopi yang tersedia",
"coffees":
[{"id":1,"name":"Kopi Tubruk","price":12000},
{"id":2,"name":"Kopi Tarik","price":15000},
{"id":3,"name":"Kopi Jawa","price":18000}]}

 */

//penjelasan kode:
// HTTP/1.1 : status line berisi http version
// 200 OK : status kode berhasil (diawali angka 2)
// Content-Type : application/json : file berformat json
// -- skenario 1 sukses --

//selanjutnya kita lakukan skenario 2, memesan menu kopi yang tersedia
// kode berikut :

//curl -X POST -H "Content-Type: application/json" -d "{\"name\": \"Kopi Tubruk\"}" https://coffee-api.dicoding.dev/transactions -i
// output :
/**
 * HTTP/1.1 201 Created
Server: nginx/1.18.0 (Ubuntu)
Date: Sat, 25 Feb 2023 07:11:32 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 46
Connection: keep-alive
content-security-policy: upgrade-insecure-requests
referrer-policy: strict-origin-when-cross-origin
x-frame-options: DENY
x-content-type-options: nosniff
x-xss-protection: 1; mode=block
vary: origin
access-control-expose-headers: WWW-Authenticate,Server-Authorization
cache-control: no-cache

{"message":"Pesanan berhasil!","success":true}
 */

// penjelasan kode diatas :
// -X POST : metod POST mengirim rekuest 
// -H "Content-Type: application/json" menetapkan nilai pada header request, memberitahu serber bahwa data terlampir berbentuk json
// -d : parameter data , utk melampirkan data dalam bentuk json
// -- skenario 2 sukses --

// lanjutkan ke skenario terakhir : memesan kopi yang tidak ada (pesan kopi lawak)
// kode berikut :
// curl -X POST -H "Content-Type: application/json" -d "{\"name\": \"Kopi Lawak\"}" https://coffee-api.dicoding.dev/transactions -i
//output :
/**
 * curl -X POST -H "Content-Type: anopi@localhost:~> curl -X POST -H "Content-Type: application/json" -d "{\"name\": \"Kopi Lawak\"}" https://coffee-api.dicoding.dev/transactions -i
HTTP/1.1 404 Not Found
Server: nginx/1.18.0 (Ubuntu)
Date: Sat, 25 Feb 2023 07:18:58 GMT
Content-Type: application/json; charset=utf-8
Content-Length: 66
Connection: keep-alive
content-security-policy: upgrade-insecure-requests
referrer-policy: strict-origin-when-cross-origin
x-frame-options: DENY
x-content-type-options: nosniff
x-xss-protection: 1; mode=block
vary: origin
access-control-expose-headers: WWW-Authenticate,Server-Authorization
cache-control: no-cache

{"message":"Pesanan gagal, kopi tidak ditemukan!","success":false}
 */
// rekues sukses menampilkan kopi yang tidak ada
// skenario 3 selesai !