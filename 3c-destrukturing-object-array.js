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

//-----------destructuring objek--------------
const profile = {
    firstN: "jon",
    lastN: "do",
    age: 29
}
const {firstN,lastN, age}=profile;
console.log(firstN, lastN, age);
//utk destruktur, pastikan nama variabel sm dengan nama properti objekny
//dengan bgitu, otomatis properti tsb dimasukkan ke var scr otomatis
/*selain itu kita dapat destruktur sebanyak variabel yg kita inginkan saja
tidak perlu sbnyak jumlah properti
**/
// const {lastN} = profile;

/* kita juga dapat mendesktruktur pada variabel yg sudah pernah
dideklrasi. artinya kita akan memasukkan nilai lain */
const list ={
    kode:12332,
    nama:"muljoko",
    warna:"ireng"
};
let kode ="354";
let warna="ireng";
//kita inisiasi nilai baru pake properti list ke var. kode warna
({kode,warna}=list); //khusus destrukturisasi var yg sudah dideklar
console.log(kode,warna); //tanda () menandakan sebuah ekspresi

/*
ketika kita destruksi objek pada variabel yang tidak sama namanya,
,aka akan muncul undefined pada var yg tidak sesuai tsb.
contoh: */
const dftr={
    nm:"handoko",
    umr:21,
    asal:"jkt"
};
const {nm, umr, status}=dftr;
console.log(nm,umr,status); //status berisi nilai undefined.
//alternatifnya kita isi nilai default pada var yg tidak sama dg
//propertinya dg menambahkan = berisi nilai defaultny
const {asal, jabatan="staf"}=dftr;
console.log(asal, jabatan); //nilai properti tdk ditemukan maka dganti nilai default

/* selain cara saklek diatas, kita juga bs menggunakan nama variabel yg
berbeda dengan nama propertiesnya dg trick sbb: */
const tabel={
    id:11211,
    harga: 20000,
    size: "M"
};
const {id: identitas, harga: price, size: ukuran}=tabel;
console.log(identitas, price, ukuran);