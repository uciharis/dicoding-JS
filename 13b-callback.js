// --callback funct --
//hal yg sering membingungkan ketika bekerja dg program synchronous dan asynch adlah bagaimana menangani
//-suatu nilai yg didpatkan secara async pada program yg berjalan scr synch. seperti kode berikut:

/* --kode ini dikomen karna digunakan 2x utk kasus --
* -- hapus komen utk menjalankan kode
const orderCoffee = ()=>{
    let coffee = null;
    console.log("sedang membuat kopi, silahkan tunggu ..");
    setTimeout(()=>{
        coffee= "kopi sudah jadi !";
    },3000);
    return coffee;
}
const coffee= orderCoffee();
console.log(coffee);
*/

// jika kita melakukan hal cetak nilai coffe,  funct setTimeout tdk akan menghentikan JS utk mengeksekusi kode yg ada selanjutnya.
// jd funct orderCoffe() akan slalu mengembalikan nilai null karna kode return coffee akan dieksekusi trlbh dahulu
// -dibandingkan dengan coffe= "kopi sudah jadi!"
// kode asynch perlu disusun dg cara yg berbea dg synch. cara plg dasar adalah dg callback funct.

//ilustrasi penggambaran synch dan asynch :
// - (synch) : ketika kita memesan kopi dan menunggu kopi di kasir smpe datang
// - (asynch) : menunggu kopi di meja sambil melakukan kegiatan lainnya. ketika kopi sdh dibuat br diantar ke meja
// pada JS, pelayan berfungsi sbg callback func. dia diperintahkan pada fungsi asynch kemudian dipanggil ketika tugas selesai
//bagaimana cara menerapkannya pada kode ? kita tambahkan parameter dg nama callback pada fungsi asynch
// modifikasi kode
const orderCoffe = callback => { //dikasi callback
    let coffee = null;
    console.log("sedang membuat kopi, silakan menunggu . . .");
    setTimeout(()=>{
        coffee= "kopi sudah jadi !";
        callback(coffee); //penggunaan callback
    }, 3000 );
    //return coffe; /kode ini dihapus karna funct tdk perlu lg mengembalikan nilai.
}
// const coffee = orderCoffe (); /kode inisiasi ini diubah
// console.log(coffee); /kode panggil ini diubah menjadi kode sprti d bawah

orderCoffe(coffee=>{ // hasil ubah kode diatas
    console.log(coffee); //ini juga
});

// -- callback hell --
// kita sdh mengetahui bahwa calback dibutuhkan utk mendapatkan nilai yg berasal dr funct asynch.
// lantas bagaimana jika proses slg bergantung pada satu sama lain ?
// contoh membuat kue:
//a. menyiapkan bahan
//b. membuat adonan
//c. memasukkan adonan ke cetakan
//d. memanggang adonan

// tahap tsb sangat bergantung satu sama lain.
// jika kita melakukan tahapan diatas scr synch, kita bs melakukannya seperti ini:

[
    function makeACake(...rawIngredients) {
        const ingredients = collectIngredients(rawIngredients);
        dough = makeTheDough(ingredients);
        pouredDough = pourDough(dough);
        cake = bakeACake(pouredDough);
        console.log(cake);
    }
]
// namun jika funct diatas berjalan scr asynch maka kita akan membuat apa yg disebut sbg callback hell
// hal itu terjadi karna bnyk sekali callback funct yg bersarang dan slg membutuhkan satu sama lain
// shg kode tampak sbb:
[
    function makeACake(...rawIngredients) {
        collectIngredients(rawIngredients, function(ingredients) {
            makeTheDough(ingredients, function(dough) {
                pourDough(dough, function(pouredDough) {
                    bakeACake(pouredDough, function(cake) {
                        console.log(cake);
                    })
                })
            })
        });
    }
]
// kode diatas sangat rumit dan susah dimaintenance di masa depan
// maka solusi menghindari callback adalah menggunakan Promise
[
    function makeACake(...rawIngredients) {
        collectIngredients(rawIngredients)
            .then(makeTheDough) // dengan promise
            .then(pourDough) // dengan promise
            .then(bakeACake) // dengan promise
            .then(console.log);
    }
]
// dg promise, kita dapat meminimalisir callback hell dan mengubah ny menjadi kode yg mudah dibaca