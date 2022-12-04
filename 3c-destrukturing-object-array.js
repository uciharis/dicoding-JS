/* aray dan objek banyak digunakan
untuk mengelola data di JS.
JSON merupakan format data paling
populer yang digunakan dalam transaksi data tsb
.
ES6 menambahkan fitur berupa destructuring object n array
yang digunakan utk mengeluarkan nilai array dan objek
ke dalam satuan yg lebih kecil.
*/
//contoh destructuring :
const profil={
    namaDepan: "joko",
    namaBelakang:"kowi",
    umur: 21
};
const namaDepan=profil.namaDepan;
const namaBelakang=profil.namaBelakang;
const umur=profil.umur;
console.log(namaDepan,namaBelakang,umur);
//destructuring objek
const profile = {
    firstN: "jon",
    lastN: "do",
    age: 29
}
const {firstN,lastN, age}=profile;
console.log(firstN, lastN, age);