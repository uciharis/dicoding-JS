/** -- penanganan error ---
 * 
 * hal yang akan dibahas sbb:
 * menangani eror
 * membuat custom eror yang menandai eror yang tdk tersedia pada JS
 * 
 */

// --- try n catch ---
// utk menangani eror pada JS, gunakan try and catch. penulisannya sbb:
/** --- kode try n catch
 * try {
 * kode
 * } catch (error) {
 * eror handling
 * }
 */
// letakkan kode yang berpeluang menimbulkan eror dalam blok try.
// eror tsb akan ditangkap dalam blok catch.
// jika tidak terjadi error makan akan diabaikan
// berikut kode yang dianggap menghasilkan error
try {
    console.log("awal blok try");
    errorCode; //baris ini yg hasilkan error
    console.log("akhir blok try"); //baris ini tdk dieksekusi
} catch (eror) { //nama variabel eror dan bisa diubah
    console.log("terjadi error !!!"); //baris ini yg dieksekusi
}

//variabel eror merupakan sebuah objek utk menyimpan detail informasi dr error yg terjadi
// objek error memiliki beberapa properti utama yaitu :
// - name : nama eror yang terjadi
// - message : pesan tentang detail eror
// - stack : informasi urutan kejadian yang menyebabkan error. biasa digunakan utk debuging karena terdapat informasi baris yang menyebabkan error

try {
    console.log("Awal blok try");   // (1)
    errorCode;                      // (2)
    console.log("Akhir blok try");  // (3)
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}
/** isi eror dr terminal
 * 
 * ReferenceError
errorCode is not defined
ReferenceError: errorCode is not defined
    at Object.<anonymous> (/home/nopi/Documents/dicoding-JS/12-error.js:38:5)
    at Module._compile (node:internal/modules/cjs/loader:1246:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1300:10)
    at Module.load (node:internal/modules/cjs/loader:1103:32)
    at Module._load (node:internal/modules/cjs/loader:942:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
    at node:internal/main/run_main_module:23:47
 */
// diketahui error yang muncul adalah ReferenceError karena errorCode nilai tdk terdefinisi

/** --- try-catch-finally
 * 
 * selain try and catch, ada satu blok lagi sebagai mekanisme error handling pada JS.
 * yaitu finally.
 * blok finally akan tetap dijalankan tanpa peduli apapun hasil yang terjadi pada blok try-catch
 * 
 */

try {
    console.log("awal blok try");
    console.log("akhir blok try");
} catch (error){
    console.log("baris ini diabaikan");
} finally {
    console.log('akan tetap dieksekusi');
} //tetap tereksekusii