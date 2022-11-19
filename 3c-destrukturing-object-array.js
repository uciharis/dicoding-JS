//objek dan array banyak digunakan utk mengelola data di JS
//JSON merupakan format data plg populer yg digunakan utk
//-transaksi data saat ini.
//destructuring array and object adalah sintak utk mengeluarkan
//- nilai dr array dan object ke dalam satuan terkecil
//contoh destructuring :
const profil={firstNama: "john",
lastNama: "doe",
age: 18};
const firstNama = profil.firstNama;
const lastNama = profil.lastNama;
const age = profil.age;
console.log(firstNama,lastNama,age);