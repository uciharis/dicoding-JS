/** --- async-wait ---
 * contoh penulisan async promise dan callback
 * 
 * --- ini kode ---
 * --Promise --
 * 
 *  function makeCoffee(){
 *  getCoffee().then(coffee=> {
 *  console.log(coffee);
 * });
 * }
 * makeCoffee();
 * 
 * ---Callback ---
 * 
 *  function makeCoffee(){
 *  getCoffee(function(coffee){
 *  console.log(coffee);
 * });
 * }
 * makeCoffee();
 * 
 * --- akhir kode ---
 * 
 * namun sejak es8, kita dapat menuliskan asynch layaknya synch dengan bantuan async dan await
 * fitur async await sebenarnya hanyalah syntatic sugar.
 * itu berarti secara fungsionalotas bukanlah sebuah fitur baru dalam JS.
 * namun, hanya gaya penulisan baru yang dikembangkan dari kombinasi penggunaan promise dan generator.
 * sehingga async await tidak dapt digunakan jika tidak ada promise
 * 
 * berikut penulisannya :
 * 
 * --- ini kode ---
 * 
 * const getCoffee = () =>{
 * return new Promise((resolve, reject)=> {
 * const seeds = 100;
 * setTimeout(()=> {
 * if (seeds >=10){
 * resolve("kopi didapatkan");
 * }else {
 * reject("biji kopi habis");
 * }
 * },100);
 * })
 * }
 * --- akhir kode ---
 * 
 * untuk mendapatkan nilai fungsi getCoffee() menggunakan .then() maka kode akan menjadi:
 * 
 * --- ini kode ---
 * 
 * function makeCoffee() {
    getCoffee().then(coffee => {
        console.log(coffee);
    });
}
 
makeCoffee();
 
output :
Kopi didapatkan!

--- akhir kode ---

async await memungkinkan kita menuliskan proses async layaknya proses synch.kira kira kodenya akan
menjadi seperti ini :

--- ini kode ---

function makeCoffee() {
    const coffee = getCoffee();
    console.log(coffee);
}
 
makeCoffee();
 
output:
Promise { <pending> }
---akhir kode ---
 */
// namun kode diatas dijalankan hasilnya tidak sesuai dg harapan karena fungsi
// getCoffee() merupakan objek promise.
// utk menunggu fungsi getCoffee() yang berjalan secara asynch, tambahkan keyword await
// sebelum pemanggilan fungsi getCoffee()
const coffe = await getCoffee();
// karena fungsi makeCoffee() sekarang menangani proses asynch maka fungsi tsb
// juga menjadi fungsi asynch.
// tambahkan asynch sebelum deklarasi fungsi membuat menjadi asynch
async function makeCoffee(){
    const coffe = await getCoffee();
    console.log(coffe);
}
makeCoffee();
//output : kopi didapatkan !
// keyword async digunakan utk memberitahu JS supaya menjalankan fungsi makeCoffee() secara asynch.
// keyword awati digunakan utk menghentikan proses pembacaan kode selanjutnya sampai fungsi getCoffee() mengembalikan promise resolve.
// walaupun await menghentikan proses pembacaan kode selanjutnya pada fungsi makeCoffee, tetapi tidak akan mengganggu proses runtime
// sesungguhnya pada JS global.
// karena fungsi makeCoffee berjalan asynch kita tidak dapat menggunakan await tanpa membuat funct dalam scope nya berjalan scr asynch

// --- handle onRejected using async-await ---
// perlu dicatat bahwa await hanya akan mengembalikan nilai jika promise berhasil dilakukan (onFullfilled)
// lantas bagaimana jika promise gagal dilakukan?
// sederhana saja, kembali pada prinsip synch kode, kita dapat menangani sebuah error atau tolakan dengan menggunakan try...catch.
// ketika menggunakan async/await, biasakan ketika mendapatkan resolved value dr sebuah promises, selalu menempatkan di dalam blok try seperti berikut :
async function makeCoffee(){
    try {
        const coffee = await getCoffee();
        console.log(coffee);
    }
}
// dengan begitu kita dapat menggunakan blok catch utk menangani jika promise gagal dilakukan (onRejected)
[
    async function makeCoffee() {
        try {
            const coffee = await getCoffee();
            console.log(coffee);
        } catch (rejectedReason) {
            console.log(rejectedReason);
        }
    }
     
    makeCoffee();
     
    //output:Biji kopi habis!
    
]

// ---chaining promise using async-await ---
// bagaimana melakukan promise berantai apabila menggunakan async await ?
// jawabannya adalah sama seperti kita mendapatkan nilai dr funct yang berjalan scra synch
// dengan pendekatan async-await, kode mesin kopi kita akan seperti ini
[
    async function makeEspresso() {
        try {
            await checkAvailability();
            await checkStock();
            const coffee = await brewCoffee();
            console.log(coffee);
        } catch (rejectedReason) {
            console.log(rejectedReason);
        }
    }
     
    makeEspresso();
     
   //output:    Membuatkan kopi Anda...
    //          Kopi sudah siap!
]
// terakhir utk menjalankan beberapa promise sekaligus secara bersamaan dengan Promise.all, kita tulis sbb:
[
    async function makeEspresso() {
        try {
            await checkAvailability();
            await checkStock();
            await Promise.all([boilWater(), grindCoffeeBeans()]);
            const coffee = await brewCoffee();
            console.log(coffee);
        } catch (rejectedReason) {
            console.log(rejectedReason);
        }
    }
]
// async await akan menjadi fitur baru yang sangat berguna.
// terlebih kita yang lebih nyaman menangani proses asnyc tetapi menggunakan gaya synch