// --- Deploy Web Service ---

// selesai membuat restful API, sebaiknya ini dapat diakses dari mana saja apalagi ini adalah web server
// maka dari itu perlu du deploy atau di rilis ke server yang dapat diakses secara umum

// akan dibahas cara deploy RESTful API ke Amazon Elastic Compute CLoud a.k.a Amazon EC2
// yang akan dipelajari :
// - pengertian Amazon EC2
// - daftar akun AWS
// - bikin dan jalankan Amazon EC2 service
// - operasikan Amazon EC2 lewat SSH
// - jalankan RESTful API  di Amazon EC2

/*
Amazon Elastic Compute Cloud

layanan dari AWS Amazon Web Service

ilustrasi : komputer server yang dapat kita miliki namun tidak dpat dilihat oleh kita fisiknya.
server ini dapat dioperasikan di mana saja karena bersifat cloud

letak Amazon EC2 ada di Data Center AWS yang dapat diakses secara global

sifatnya elastis karna dapat menyesuaikan kapasitas berdasar rekues client.
hal ini utk mencegah server jadi down secara tiba tiba

EC2 bersifat elastis karna bersifat virtual machine yang dapat diset spesifikasi 

biaya penggunaan Amazon EC2 adalah pay-as-you-go. membayar sesuai dengan pemakaian
jika instance tidak dipakai maka tidak ada biayanya.
 */

// akses alamat AWS disini : https://aws.amazon.com/

// setelah berhasil regist dan login, utk pertama kali gunakan root user,
// ubah regin AWS ke asia pasifik dan pilih ap-southeast-3 yang berlokasi di jakarta
// klik all service, liat kategori Security, Identity n Compliance
// pilih IAM
// pilih user
// klik Add User utk bkin user dengan level lebih rendah dari root
// 
