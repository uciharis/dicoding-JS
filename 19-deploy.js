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
// isi data seperti berikut:
// username : diisi sesuai keingininan
// access type : AWS Management Console Access
// console password : isi sesuai keinginan
// require password reset : uncheck
// create group lalu tambahkan user sesuai keinginan

// bikin dan jalankan Amazon EC2 Instance

// pembahasan sebelumnya adalah membuat akun IAM yang punya akses penuh ke service Amazon EC2
// utk membuat instance, akses menu all services -> compute -> EC2
// atau melalui search bar ketikkan EC2
// lalu klik "launch instance"
// isikan nama dari web server,
// pilih OS image
// pilih instance type : "t2.micro"
// key pair (login) klik create new key pair
// isikan key pair name : " notes-api-webserver"
// pastikan berkas "notes-api-webserver.pem" terunduh
// simpan file tsb utk mengoperasikan instance lewat SSH
// sesuaikan network setting :
// klik edit
// security group name diisi app-server-sg
// description: allow custom TCP port 5000
// klik Add security group rule
// isikan dengan detail berikut:
// - Type : Custom TCP
// - port range : 5000
// - Source Type : Anywhere
// - description : Application Port

// lalu klik launch


// Mengoperaskan EC2 instance lewat SSH

// pada instance yang dibuat tadi, klik "connect",
// lalu pilih tab SSH client
// copy command di example, 
// buka terminal di folder berisi file "notes-api-webserver.pem" dan paste command tadi
// lalu akan muncul warning 
// solusinya adalah mengubah permission berkas "notes-api-webserver.pem" dengan perintah berikut
// chmod 400 notes-api-webserver.pem
// lalu lulangi command di example
// instance tsb sudah berhasil terhubung lewat SSH dan hanya bisa dioperasikan dengan command line
// berikut beberapa perintah linux sederhana : https://ubuntu.com/tutorials/command-line-for-beginners#1-overview
