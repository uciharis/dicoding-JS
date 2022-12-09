//WeakMap = varian dr Map yg mendukung garbage collection
//garbage collector adalah proses interpreter mengambil kembali
// -memori yg tidak lagi dapat dijangkau atau digunakan kembali oleh program
// garbage collector dilakukan scr otomatis di js
// weak dalam weakMap adalah referensi thd nilai yg disimpan.
//jika nilai yg disimpan dalam weakMap sudah tidah terjangkau atau
//-tdk bs diakses lg, maka referensi ke memorinya akan dihapus
//berikut perbedaan Map dan WeakMap :
// 1. key dr WeakMap harus objek / array karna cuma ini yg didukung garbage collection
// 2. WeakMap punya metod get(), set(), has(), delete()
// tetapi tdk punya metod keys(), values() forEach()
// 3. WeakMap tk punya properti size

let visitMap = new Map(); //simpan daftar user
function countUser(user) {
    let count = visitMap.get(user) || 0;
    visitMap.set(user, count +1);
}
let jonas= {name:"jonas"};
countUser(jonas);
jonas = null;

setTimeout(function(){console.log(visitMap);},10000)
//setTimeout merupakan fungsi yg digunakan utk menunda eksekusi kode
// yg ada di dalamnya hingga jangka waktu yg ditetapkan.
//ketika reference objek jonas dihapus dg mengubahny menjadi null
//seharusnya map tdk lg menyimpan data user.