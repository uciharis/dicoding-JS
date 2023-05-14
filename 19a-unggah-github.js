// --- Mengunggah Proyek Web Server ke Github ---

// kita akan memanfaatkan teknologi git dan github.

// git adala tools manajemen source kode atau dikenal dg istilah Versioning
// lewat git kita dapat mentrack perubahan kode, siapa yang merubahnya, hingga melakukan branching
// selengkapnya tentang git dan github : https://www.dicoding.com/academies/317
// git berjalan di local , maka agar dapat diakses dari mana saja maka menggunakan github

// Inisial local repo 
// buka folder proyek, lalu :
// kode: git init
// setiap perubahan pada berkas akan dipantau oleh git, kecuali node_modules dan notes-api-webserver.pem
// berkas node_modules tidak perlu dipantau karena size nya yang sangat besar
// sedangkan berkas *.pem tidak boleh disimpan di internet dan harus stay di local
// agar git tidak memprosesnya, buatlah berkas ".gitignore"
// lalu tuliskan :
// node_modules dan notes-api-webserver.pem

// lalu, ketik di terminal :
// kode : git add
// kode: git commit -m "initial commit"
// nb:
// - git add : memasukkan berkas ke index atau stagging area,
// - git commit m "initial comit" : simpan perubahan pada local repo 

// selanjutnya mendaftar di github

// hubungkan local repo ke remote repo
// pilih https dan copy link
// lakukan ini : git remote add origin https://github.com/blablabla.git
// setelah menambahkan, lakukan unggah : git push origin master

// setelah kode terupload di github, skrg saatnya mengunduh kodenya lagi ke instance AWS EC2
// utk itu kita perlu menginstal git di instance
// namun, instance di AWS sudah default terinstal git
// cek dengan : git --version
// lakukan clone melalui terminal instance : git clone https://github.com/blablalba.git
// utk cek apakah sudah terdonlot, cek dengan command "ls"

// setelah repo terdonlot, kita perlu menjalankan server tsb. Untuk menjalankan, kita perlu memasang nodejs di instance
// utk mempermudah mengatur versi nodejs, mari kita gunakan nvm sehingga kita bs menggunakan versi nodejs apapun
// manual lengkapnya ada di : https://github.com/nvm-sh/nvm

//selanjutnya, jalankan : npm install
// jalankan proyek dg : npm run start

// ternyata web server tidak dapat diakses, 
// hal ini diakibatkan kita tidak akses ip publik dari E2 Instancenya
// utk itu kita perlu cek alamat ip publiknya , langsung ke AWS managemen
// lihat bagian public IPv4 Address
// host dengan nilai localhost pada Hapi server tidak bs digunakan di dalam instance E2.
// maka dari itu perlu dirubah
// namun menggunakan IP eksplisit(public atau private) tidaklah baik karena dapat berubah ketika server direstart
// solusinya adalah menggunakan IP 0.0.0.0
// IP 0.0.0.0 merupakan alamat spesial agar komputer dpat diakses melalui seluruh alamat Ip yang digunakan pada komputer tsb
// misal jika komputer terhub. di WIFI dg IP 192.168.100.25 dan LAN IP 172.31.90.21, maka 0.0.0.0 dapat diakses lewat kedua IP tsb


// bagaimana proses dev apabila kita hanya ingin jalankan di localhost?
// adakah cara utk membedakan penggunaan nilai ketika proses dev dan production di EC2 instance ?
// kita dapat menggunakan objek global process.env utk meletakkan nilai suatu rposes ketika node dijalankan
// lakukan penyesuaian pada server.js di berkas folder projek
// ubah nilai properti host menjadi
/*
const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !=='production'?'localhost' : '0.0.0.0',
    routes: {
        cors: {
            origini:['*'],
        },
    },
});
 */

// dg begitu, properti host akan bernilai sesuai env yang diterapkan
// lalu kita terapkan env pada npm runner script. buka package.json dan atur npm runner script
/*
"scripts": {
  "start-prod": "NODE_ENV=production node ./src/server.js",
  "start-dev": "nodemon ./src/server.js",
  "lint": "eslint ./src"
},
 */
// kita tdk perlu menetapkan NODE_ENV pada start-dev karena nodemone secara default menggunakan nilai "development"
// lalu pada proses produksi kita tidak menggunakan nodemon,ckup node saja
// simpan perubahan dg: git add
// kode : git commit -m "fix bugs host value"
// kode : git push origin master

// lalu pull kode perubahan tadi ke instance : git pull origin master
// jalankan : npm run start-prod
// akses dg alamat ip publik dan port 5000

// selama web server digunakan, proses node pada EC2 juga harus selalu berjalan
// jika berhenti baik karena tidak sengaja maupun karna sesi SSH berakhir, maka web server berhenti
//  dan aplikasi client akan mati
// hal ini akan merepotkan karna server harus selalu dipantau dan di-start kembali dg kode: npm run star-prod
// tidak efisien jika kita harus selalu melakukan pemantauan dan restart berkali-kali
// maka dari itu kita akn menggunakan process manager utk menjalankan ulang proses dg cepat
// selengkapnya tentang process manager : https://www.npmjs.com/package/pm2

// akses kembali instance EC2 lewat ssh lalu pasang pm2 : npm install -g pm2

// masuk ke direktori lalu cd
// jalankan node process dg pm2 : pm2 start npm --name "blabla-api" --run "start-prod"
// pm2 akan menjalankan web server dan memantau
// jika ada crash atau apaapun yang menghntikan server, pm2 akan menjalankan ulang
// utk restart manual, kode : pm2 restart blabla-api
// utk stop, kode : pm2 stop blabla-api
// utk jalankan ulang : pm2 start notes-api