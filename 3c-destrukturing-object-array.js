/*array dan object plg bnyk digunakan
untuk mengelola data di JS. JSON adalah format
data plg populer yang digunakan saat transaksi data.
utk mengelola data tsb, ES6 menambahkan fitur
utk destructuring object and array.

destructuring merupakan sintak tuk mengeluarkan nilai
array dan object ke dalam satuan yg lebih kecil.
 */
//berikut contoh destructuring
const profile= {
    namaDepan: "jon",
    namaBelakang: "doe",
    umur: 67
};
const namaDepan= profile.namaDepan;
const namaBelakang= profile.namaBelakang;
const umur= profile.umur;
console.log(namaDepan,namaBelakang,umur);