/** -- promise --
 * merupakan fitur penting es6
 * promise menggantikan peran callback dg ciri khas pake funct .then
 * namun mengapa fitur ini disebut promise/ janji ?
 * ternyata fungsi tsb memang sesuai dg namanya, yaitu berjanji, seolah olah fungsi seperti berjanji
 * 
 * analoginya sbb:
 * ketika kita pesan kopi, pelayan secara tdk langsung berjanji kepada kita utk membuatkan kopi dan
 * mengantarkanny kepada kita. namun janji bs hanya tinggal janji, artinya tidak terlaksana atau terpenuhi
 * maka dari itu promise memiliki 3 kondisi yaitu :
 * -pending (janji dlm proses)
 * -fulfilled (janji terpenuhi)
 * -rejected (janji gagal)
 */

// ---membuat objek promise ---
// kita gunakan  keyword new diikuti dg constructor dari Promise :

    const coffee = new Promise();

// kode diatas akan menghasilkan error jika dijalankan karna perlu ditetapkan resolver funct

    const executorFunct = (resolve, reject) =>{
        const isCoffeMakerReady = true;
        if (isCoffeMakerReady) {
            resolve ("kopi berhasil dibuat");
        } else {
            reject ("mesin kopi tdk bs digunakan")
        }
    }

    const makeCoffee = () => {
        return new Promise(executorFunct);
    }
    const coffeePromise = makeCoffee ();
    console.log(coffeePromise); //output : Promise {'kopi berhasil dibuat'}

    // executor funct memiliki 2 parameter yaitu resolve dan reject. berikut penjelasannya :
    // - resolve() : parameter pertama pada executor funct. fungsiny hanya menerima 1 parameter. 
    //biasanya digunakan utk mengirim data ketika promise berhasil dilakukan
    // ketika fungsi ini terpanggil, promise dr status pending menjadi fulfilled

    // - reject(): parameter kedua pada execution funct. hanya dapat menerima 1 parameter. digunakan tuk memberikan
    // alasan kenapa promise tdk terpenuhi. promise dr status pending berubah menjadi rejected
    // dalam praktik nyata, promise digunakan utk menjalankan proses asynch seperti ambil data dari internet/ api/
    // hasil permintaan dapat terpenuhi atau failde.
    // output y dihasilkan baik ketika fulfilled atau rejected masih berupa promise.
    // lalu bagaimana kita bs akses nilai yang dibawah oleh fungsi2 tsb ?
    // caranya menggunakan metode .then() yg tersedia pada objek Promise

    // --- consuming promises ---
    // setelah mengetahui membuat objek promise, selanjutnya adalah bagaimana kita consume data tsb.
    // seperti yg dbahas adala status awal dr Promise adalah pending. baru kemudian menjadi fulfilled atau rejected
    // utk menangani hasil dr promise, kita gunakan method .then().
    // jika diterjemahkan berarti "kemudian" sehingga kurang lebih kita memerintahkan JS seperti berikut
    // "jika janji saya sudah selesai, kemudian saya lakukan ..."
    // dalam kode adalah sebagai berikut :
    [
        const myPromise = new Promise(executorFunct);
        myPromise.then(onFullfilled, onRejected);
    ]

    // .then() sendiri adalah sebuah higher order funct. yang membutuhkan 2 parameter.
    // keduanya adalah callback funct. yg dikenal jg sebagai handler.
    // handler pertama adalah fungsi yang akan dijalankan ketika promise bersifat resolve
    // handler kedua adalah fungsi yang akan dijalankan ketika promise berstatus reject
    // kembali ke kasus kopi sebelumnya. mesin kopi gagal membuat kopi jika bahan tidak mencukupi.
    // sementara jika bahan cukup, mesin akan membuat 1 gelas kopi.
    // disinilah kita dapat memanfaatkan Promise sekaligus menangani 2 kemungkinan promise terjadi
    //mari kita buat objek utk menyimpan stok dan fungsi yg mengembalikan objek promise
    [
        const stock = {
            coffeBeans : 250,
            water : 1000
        }
        const checkStock = () => {
            return new Promise((resolve, reject)=> {
                if  (stock.coffeBeans>=16 && stock.water>=250){
                    resolve("stok cukup. bisa membuat kopi");
                } else {
                    reject("stok tidak cukup");
                }
            });
        };
    ] 
    // kemudian di bawahnya,kita tambahkan 2 fungsi utk menangani msg2 statust resolve dan reject
    [
        const handleSuccess = resolvedValue => {
            console.log(resolvedValue);
        }
         
        const handleFailure = rejectionReason => {
            console.log(rejectionReason);
        }
    ]
    // terakhir kita panggil method .then() pada checkStock() utk menangani hasil yang dikembalikan dari promise
    [
        checkStock().then(handleSuccess, handleFailure);
    ]
    // sehingga kode finalny seperti ini :
    [
        const stock = {
            coffeeBeans: 250,
            water: 1000,
        }
         
        const checkStock = () => {
            return new Promise((resolve, reject) => {
                if (stock.coffeeBeans >= 16 && stock.water >= 250) {
                    resolve("Stok cukup. Bisa membuat kopi");
                } else {
                    reject("Stok tidak cukup");
                }
            });
        };
         
        const handleSuccess = resolvedValue => {
            console.log(resolvedValue);
        }
         
        const handleFailure = rejectionReason => {
            console.log(rejectionReason);
        }
         
        checkStock().then(handleSuccess, handleFailure);
    ]

    /* --- mari kita bedah kode diatas :
     * 
    - checkStock() merupakan fungsi yang mengembalikan promise dan akan menghasilkan resolve() dengan membawa nilai “Stok cukup. Bisa membuat kopi”.
    - Lalu kita mendeklarasikan fungsi handleSuccess() dan handleFailure() yang mencetak nilai dari parameternya.
    - Kemudian kita memanggil method .then() dari checkStock. Isi parameter then() dengan dua fungsi handler yang telah kita buat sebelumnya.
    - Parameter pertama berisi fungsi handleSuccess untuk menangani kondisi ketika promise berstatus resolve. Parameter kedua berisi fungsi handleFailure yang menangani ketika promise berstatus reject.
Cobalah untuk mengubah nilai stock dan memastikan fungsi handleFailure telah dijalankan.
     */