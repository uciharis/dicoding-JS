/** -- promise all --
 * materi sebelumnya tentang bagaimana promise dapat menangani situasi dimana terdapat asynch proses yang saling membutuhkan utk melaksanakan tugasnya
 * lalu bagaimana jika kita ingin menjalankan banyak promise sekaligus tanpa memedulikan urutannya
 * bukankah concurrency memungkinkan kita melakukan banyak proses bersamaan agar lbh efisien
 * 
 * pada kasus diatas, kita gunakan Promise.all()
 * metode ini dapat menerima banyak promise dalam bentuk array pada parameternya,
 * lalu metod ini akan mengembalikan nilai seluruh hasil dr promise dalam bentuk array
 * --contoh kode --
 * -- main.js --
 * const { firstPromise, secondPromise, thirdPromise } = require('./promises');

const promises = [firstPromise(), secondPromise(), thirdPromise()];

Promise.all(promises)
  .then(resolvedValue => {
    console.log(resolvedValue);
  });

output : [ 'first promise', 'second promise', 'third promise' ]
 * 
 *  -- promises.js --
 * function firstPromise() {
  return new Promise((resolve) => {
    resolve('first promise');
  });
}

function secondPromise() {
  return new Promise((resolve) => {
    resolve('second promise');
  });
}

function thirdPromise() {
  return new Promise((resolve) => {
    resolve('third promise');
  });
}

module.exports = { firstPromise, secondPromise, thirdPromise };
 * 
 * --- akhir kode ---
 * 
 * pada kasus mesin kopi, kita bs menambahkan proses untuk memanaskan air dan menggiling biji kopi
 * -- ini kode --
 * const boilWater = () => {
  return new Promise((resolve, reject) => {
    console.log('Memanaskan air...');
    setTimeout(() => {
      resolve('Air panas sudah siap!');
    }, 2000);
  });
};
 
const grindCoffeeBeans = () => {
  return new Promise((resolve, reject) => {
    console.log('Menggiling biji kopi...');
    setTimeout(() => {
      resolve('Bubuk kopi sudah siap!');
    }, 1000);
  });
};
 * --akhir kode -- 
 * 
 * keduanya dapat berjalan bersamaa. kita akan memanfaatkan Promise.all() utk menjalankan
 * kedua fungsi diatas sblm fungsi brewCoffe().
 * lalu ubah kode fungsi makeEspresso() menjadi seperti berikut :
 * 
 * ---ini kode ---
 * function makeEspresso() {
  checkAvailability()
    .then((value) => {
      console.log(value);
      return checkStock();
    })
    .then((value) => {
      console.log(value);
      const promises = [boilWater(), grindCoffeeBeans()];
 
      return Promise.all(promises);
    })
    .then((value) => {
      console.log(value)
      return brewCoffee();
    })
    .then((value) => {
      console.log(value);
      state.isCoffeeMachineBusy = false;
    })
    .catch((rejectedReason) => {
      console.log(rejectedReason);
      state.isCoffeeMachineBusy = false;
    });
}
 
makeEspresso();
output: 
Mesin kopi siap digunakan.
Stok cukup. Bisa membuat kopi.
Memanaskan air...
Menggiling biji kopi...
[ 'Air panas sudah siap!', 'Bubuk kopi sudah siap!' ]
Membuatkan kopi Anda...
Kopi sudah siap!
 */

// penjelasan kode :
// kita perlu menunggu 2 detik utk memproses boilWater dan grindCoffeBeans
// ini menunjukkan bahwa semua promise di dalam Promise.all() berjalan bersamaan dan menunggu sampai semua proses di dalamnya selesai dijalankan
// yang perlu diperhatikan adalah urutan nilai yang dihasilkan metod ini sesua dg promise yang kita tentukan pada parameternya
// nilai dari boilWater akan tetap berada d posisi pertama, meskipun proses ini membutuhkan waktu lebih lama