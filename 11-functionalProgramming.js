/*
 * ---Functional Programming ---
    yang akan dipelajari :
    - paradigmna
    - konssep pure function, immutability, hi order
    - reusable function

    functional programming atau disingkat FP didasarkan pada fungsi matematika murni.
    FP ditulis dg gaya deklaratif yang berfokus pada "what to solve" 
    dibanding "how to solve" yang dianut gaya imperatif.
    berikut contoh gaya imperatif :
 */

const names = ['harr', 'ron', 'jeff', 'tomas'];
const namesWithExcmark = []; // imperatif karna pengisian berdasarkan array lama
for (let i=0; i< names.length;i++){ //disebut imperatif karna memikirkan perulangan dan prosedurnya alias how
    namesWithExcmark.push(`${names[i]}!!`);
}
console.log(namesWithExcmark);

// gaya deklaratif atau FP
const nama = ['heri', 'roon', 'jaff', 'toms'];
const namaWithExcmark = nama.map((nama)=> `${nama}!!`);
console.log(namaWithExcmark);

// gaya deklaratif fokus pada apa yang disolve. tidak perlu memikirkan proses looping, tanpa perlu tau
// kapan looping akan berhenti.
// JS sendiri mendukung paradigma FP. banyak higher func yang dapat dimanfaatkan sbg utilitas,
// contohny adalah fungsi array map()

//ada 4 konsep besar yang ada di FP yaitu pure function, immutability, recursive dan Hi order function

// -- pure function --
//  pure funct adalah konsep dari pembuatan fungsi yang mengharuskan fungsi tdk tergantung thd nilai yang
// yang berada di luar fungsi atau parameternya.
// sehingga seperti apa keadaannya fungsi yang dibuat slalu menghasilkan sesuatu yang sama, terkecuali
// fungsi tsb diberikan nilai parameter yang berbeda
//contoh :
let PI = 3.14;
const hitungLuasLingkaran = (jariJari)=> {
    return PI*(jariJari * jariJari);
}
console.log(hitungLuasLingkaran(4));
PI = 5; //tidak sengaja inisiasi PI
console.log(hitungLuasLingkaran(4));
// functi diatas bukan pure funct karena nilai PI berubah maka nilai lingkaran berubah.

//berikut contoh pure function yang sebenarnya :
const hitungAreaLingkaran = (jari)=> {
    return 3.14 * (jari);
}
console.log(hitungAreaLingkaran(6));
// pure funct selain dilarang bergantung pada nilai luar, dilarang keras juga utk mengubah nilai
// yang berada di luar baik secara sengaja maupun tidak sengaja

// mari kita analisa lagi sbuah funct apakah pure atau tidak
const createPersonAge = (age,person)=> {
    person.age = age;
    return person;
};
const person = {
    name: 'bobo'
};
const newPerson = createPersonAge(18,'jokook');
console.log({
    person,
    newPerson
});
// fungsi createPersonAge bertujuan utk membuat objek person baru dg tambahan properti age dan objek person
// alih2 membuat objek baru, ia juga malah mengubah nilai dr objek lama.
// hal ini menyebabkan fungsi createPersonAge bukanlah pure funct
// cara mengubahnya adlah dg memanfaatkan destructuring objek

const createPersonUmur = (umur, orang)=>{
    return {...orang, umur};
};
const orang = {
    nama: 'bobos'
};
const newOrang = createPersonUmur(47, orang);
console.log({orang, newOrang});

// utk memastikan suatu fungsi sudah pure atau belom, pastikan 3 hal berikut pada fungsi yg dibuat
// 1. mengembalikan nilai yg sama bila inputannya sama
// 2. hanya bergantung pada argumen yg diberikan
// 3. tidak menimbulkan efek samping

/** --- Immutability ---
 * adalah sebuah objek yg tidak boleh diubah setelah objek tsb dibuat
 * konsep immutability sangat kental pada paradigma FP. 
 * ketika menggunakan array.map(), alih2 mengubah nilai dr array itu sendiri, malah ia membuat atau menghasilkan array baru 
 */

const nama1 = ['haria', 'roen', ' jeff', 'tomes'];
const newNama1Excmark = nama1.map((namA)=> `${namA}!!!`);
console.log({
    nama1, newNama1Excmark
});
// lantas bagaimana bila kita perlu mengubah nilai dr sebuah objek ? contoh seperti ini

const yuser ={
    firstnem : 'herii',
    lastnem : 'proter', //ini yg typo
}
const renemLastNemUser = (newLastName, yuser)=> {
    yuser.lastnem = newLastName;
}
renemLastNemUser('poter', yuser);
console.log(yuser); 
// tujuan tercapai namun ini masih blm konsep FP. seharusnya tidak mengubah nilai objek langsung tetapi
// return nilai dalam objek baru.

const yuser1 = {
    firstNem1: 'herri',
    lastNem1 : 'proter' //ini yg typo
}
const createUserWithNewLastNem = (newLastNem1, yuser1)=> {
    return {... yuser1, lastNem1: newLastNem1};
}
const newYuser= createUserWithNewLastNem('pooter', yuser1);
console.log(newYuser);
// hasilnya sama
// anda juga bs menyesuaikan nama func dari renemLastNemUser menjadi createUserWithNewLastName
// hal ini perlu utk mengindikasikan bahwa fungsi mengembalikan
// atau menghasilkan objek user baru

/* --- Rekursif ---
 * 
rekursif merupakan teknik pada sebuah fuct yang memanggil dirinya sendiri
misal. kita akan mengubah funct countDown yg biasanya menggunakan literasi
seperti for, foreach, while seperti kode dibawah ini menjadi bentuk rekursif
 */
console.log("----fungsi count down----");
const countDown = start => {
    do {
        console.log(start);
        start -=1;
    }
    while(start>0);
};
countDown(10); // belum rekursif

// diubah menjadi rekursih sbb :
console.log("count down versi rekursif")
const hitungMundur = mulai => {
    console.log(mulai);
    if(mulai>0) hitungMundur(mulai-1);
};
hitungMundur(20);

// dg teknik rekursif, kita sebenarnya bs menggantikan operasi literasi dg rekursif
// namun tidak sebatas itu saja, dg rekursi kita dapat membuat dan mengolah
// data structure seperti tree dan array



/** --- Hi order function
 * JS memiliki kemampuan first class funct.
 * karena itu fungsi pada JS dapat diperlakukan layaknya sebuah data.
 * kita bs menyimpan funct dalam variabel, memberikan funct sbg parameter pada
 * fungsi lainnya hingga mengembalikan funct ke dalam funct
 * 
 */

const hello = ()=> {
    console.log('hellll-ooo!')
};
const say = (someFunction) => {
    someFunction();
}
const sayHello = () =>{
    return ()=> {
        console.log('hellll-oo0');
    }
}
hello();
say(hello);
sayHello()();

/* karena kemampuan first class funct ini, kita dapat membuat hi order funct dengan mudah
 * hi order funct merupakan fungsi yang dpt menerima fungsi lainnya pada argumen, mengembalikan sebuah fungsi, atau bahkan keduanya
 * teknik ini biasa digunakan utk :
 * a. mengabstraksi atau mengisolasi sebuah event, aksi atau menangani alur asynchronous menggunakan call back, promise dsb
 * b. membuat utilitis yg dpt digunakan d berbagai tipe data
 * c. membuat teknik currying atau funct composition
 * 
 * Array map() merupakan slh satu cntoh hi order function yg ada di JS.
 * karenanya, ia menerima satu buah argumen yang merupakan sbuah funct.
*/
const names1 = ['hari', 'roen', 'jeffff', 'tomes'];
const arrayMap = (arr, action)=> {
    const looopTrough = (arr, action, newArray = [], index = 0)=> {
        const item = arr[index];
        if(!item) return newArray;
        return looopTrough(arr,action, [... newArray, action(arr[index])], index+1);
    }
    return looopTrough(arr,action);
}
const newNames1 = arrayMap(names1, (name)=> `${name}!`);
console.log({
    names1, newNames1,
});