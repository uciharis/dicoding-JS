/** -- chaining promises --
 * 
 * kita sudah tau buruknya penulisan callback hell. namun hal tsb tidak dapat dihindari
 * dimana proses asynch saling bergantung satu sama lain.
 * utk menghindari callback, salah satu solusi adalah menggunakan promise
 * 
 * dengan promise kita melakukan proses asynch secara berantai.
 * contoh ketika membuat 1 gelas kopi, ada beberapa tahapan yang dikerjakan seperti
 * menghidupkan mesin, mengecek stok biji kopi dan air, membuat kopi dan memindahkannya ke dalam gelas
 * tahapan tsb harus dilakukan secara berurut
 * 
 * utk memastikan rangkaian promise berjalan dengan sesuai, kita perlu me-return
 * promise selanjutnya. contoh seperti ini
 * 
 * ---ini kode --
 *  function makeEspresso(){
 * checkAvailability()
 * .then(value)=> {
 * console.log(value);
 * return checkStock()
 * })
 * .then((value)=>{
 * console.log(value)
 * return brewCoffee();
 * })
 * .then((value)=>{
 * console.log(value);
 * })
 * .catch((rejectedReason)=>{
 * console.log(rejectedReason);
 * });
 * }
 * 
 * makeEspresso();
 * ---akhir kode ---
 */
// mari kita bedah masing2 fungsi promise diatas :
// 1. mesin mengecek ketersediaan. jika mesin tdk sibuk, makan promise mesin mengembalikan status resolve("mesin kopi siap digunakan")
// namun jika mesin sdg sibuk, maka dikembalikan reject("maaf mesin sedang sibuk")
// berikut kode cek pemeriksaannya
const checkAvailability = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (!state.isCoffeeMachineBusy){
                resolve("mesin kopi siap digunakan");
            } else {
                reject("maaf, mesin sedang sibuk");
            }
        },1000);
    });
};
//pada kode diatas, mesing menggunakan setTimeout 1000ms.
// sedang objek utk menyimpan state dr mesin kopi adalah sbb:
const state = {
    stock : {
        coffebeans : 250,
        water : 1000,
    }, 
    isCoffeMachineBusy: false,
}

// kemudian mesin kopi perlu memastikan bahwa stok biji kopi dan air ckup utk membuat kopi
const checkStock = () => {
    return new Promise((resolve,reject)=>{
        state.isCoffeMachineBusy = true;
        setTimeout(()=>{
            if (state.stock.coffebeans >=16 && state.stock.water >=250){
                resolve("stok cukup. bs membuat kopi");
            } else {
                reject("stok tidak ckupp");
            }
        }, 1500);
    });
};
// lalu fungsi promise yang terakhir adalah fungsi mencampur kopi dan air lalu menghidangkan ke dalam gelas kopi
// fungsi ini mengembalikan promise dg status resolve "kopi sudah siap"
const brewCoffee = ()=> {
    console.log("membuat kopi anda ...")
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            resolve("kopi sudah siap")
        },2000);
    });
};
// cara baca kodenya :
// buat espresso? cek dlu ready mesinnya, lalu periksa stok biji dan aer dalam mesin. lalu buat kopi
// apabila promise gagal, metod .catch() yg akan menangani. baik karena mesin sibuk atau stok habis
// berikut kode lengkap skenario nya :
[
    const state = {
        stock: {
            coffeeBeans: 250,
            water: 1000,
        },
        isCoffeeMachineBusy: false,
    }
     
    const checkAvailability = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!state.isCoffeeMachineBusy) {
                    resolve("Mesin kopi siap digunakan.");
                } else {
                    reject("Maaf, mesin sedang sibuk.");
                }
            }, 1000);
        });
    };
     
    const checkStock = () => {
        return new Promise((resolve, reject) => {
            state.isCoffeeMachineBusy = true;
            setTimeout(() => {
                if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
                    resolve("Stok cukup. Bisa membuat kopi.");
                } else {
                    reject("Stok tidak cukup!");
                }
            }, 1500);
        });
    };
     
    const brewCoffee = () => {
        console.log("Membuatkan kopi Anda...")
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Kopi sudah siap!")
            }, 2000);
        });
    };
     
    function makeEspresso() {
        checkAvailability()
            .then((value) => {
                console.log(value);
                return checkStock();
            })
            .then((value) => {
                console.log(value)
                return brewCoffee();
            })
            .then(value => {
                console.log(value);
                state.isCoffeeMachineBusy = false;
            })
            .catch(rejectedReason => {
                console.log(rejectedReason);
                state.isCoffeeMachineBusy = false;
            });
    }
     
    makeEspresso();
     
    /* output
    Mesin kopi siap digunakan.
    Stok cukup. Bisa membuat kopi.
    Membuatkan kopi Anda...
    Kopi sudah siap!
    */
    
]