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

/** --- reusable Funct ---
 * artinya adalah bahwa fungsi berparadigma FP adalah pure sehingga tidak
 * terpengaruh oleh keadaan di luar atau dr luar. hal ini tentu membuat suatu funct dpt digunakan berkali kali
 * tanpa khawatir mendapatkan hasil di luar ekspektasi
 * beberapa contoh funct yg sifatnya reusable khususnya adalah hi order funct seperti array.map,
 * array.filter, dan arrayforEach
 */

// array.map
// merupakan fungsi bawaan, dapat dipanggil dr sebuah data bertipe array dan menerima satu callback
const newArray1 = ['harii', 'rone', 'jefff', 'tomaz'].map((name)=> {return `${name}!`});
console.log(newArray1);
// fungsi map akan mengembalikan array baru. nilai per item pada array yang dikembalikan, dihasilkan dari kembalian callback funct
// karena callback funct dapat mengakses item array.

// array.filter
// funct ini berguna utk melakukan proses penyaringan thd nlai array yg ada.
// dapat digunakan utk menghilangkan beberapa item array berdasar spesifikasi tertentu
// cara kerja mirip array.map namun callbacknya dr fungsi ini mengembalkan booblean
//dimana bolean ini digunakan utk menentukan item array lolos saring atau tidak
// funct dibawah utk menghilangkan seluruh nilai Bolean(true) pada array
const trutyArray = [1, '', 'halooo', 0, null, 'harrrrry', 14].filter((item) => Boolean(item));
console.log(trutyArray); //contoh 1
console.log(' -------- ');
const student = [
    {
        nama2: 'heria',
        score: 60,
},
    {
        nama2: 'jamesh',
        score: 88
    },
    {
        nama2: 'kung pao',
        score: 75
    }
];
const dapatBeasiswa = student.filter((student)=> student.score>80);
console.log(dapatBeasiswa); //contoh 2

//aray.reduce
// arr.reduce(callback(accumulator, currentValue, [currentIndex], [array]), [initialValue])
// [ ...] adalah opsional parameter
//callback funct dr funct ni dapat diolah utk dimanipulasi data curretValue dan menyimpannya dalam accumulator
// selain itu fungsi reduce memiliki nilai awal yang dapat didefinisikan pada bagian initialValue.
// contoh penggunaan pada funct menjumlahkan total nilai siswa
// menggunakan objek students
const totalScore = student.reduce((acc, student)=> acc+ student.score,0);
console.log(totalScore);


//array.some
//funct ini menghasilkan nilai boolean
// arr.some(callback(element, [index],[array]), [thsArg])
// [...] adalah opsional parameter
// nilai yg dihasilkan berdasarkan pada pernyatan pakah ada setidaknya satu dari deretan nilai dalam array
// yang lolos berdasarkan kriteria yang kita tuliskan dalam callback func.
// contoh penggunaan utk mengetahui deretan angka terdapat angka genap
const arrr = [1,2,3,6,7,8];
const even = arrr.some(element=> element%2 ===0);
console.log(even); //bernilai true karna ada elemen genap

//array.find
// mirip dengan array.some(), digunakan utk mencari apakah di dalam deretan nilai terdapat
// nilai yg sesuai dg kriteria yg didefinisikan
// yg membedakan adalah, array.find menghasilkan satu nilai dr elemen yg pertama kali ditemukan
// berdasarkan kriteria tertentu dan akan menghaslkan nilai undefine apabila tidak ada kriteria yg cocok
// arr.find(callback(element, [index], [array]), [thisArg]);
// [ ...] adl opsional parameter
// sbg contoh kita akan mencari siswa bernama 'james'
// kita pakai student
const cariJamesh = student.find(student => student.nama2 === 'jamesh');
console.log(cariJamesh);

//array sort
// berguna tuk melakukan pengurutan nilai dari sebuah deretan nilai.
//secara default, fungsi sort akan mengubah semua nilai dalam deretan menjadi bentuk string dan mengurutkannya scr ascending
//arr.sort([compareFunct])
// [...] adalah opsional parameter
//contoh sbb:
const bulan = ['maret', 'jan', 'feb', 'des'];
bulan.sort();
console.log(bulan); // diurutkan berdasar huruf depanny sj
// output : [ 'des', 'feb', 'jan', 'maret' ]

const arrray = [1,3,22,3,100,111]; //sorting hanya angka depanny saja wkwk
arrray.sort();
console.log(arrray);
// contoh pengurutan diatas berdasar pada pengurutan bentuk tipe data string
// jika kita ingin mengurutkan sesuai dg kriteria yg kita inginkan, maka perlu membuat compare funct sendiri

const arrr1 = [1,33,40,120,3];
const compareNumber = (a,b)=>{
    return a-b;
};
const sorting = arrr1.sort(compareNumber);
console.log(sorting); // ini baru pass
// pada compare funct, fungsi akan membandingkan 2 nilai yg menghasilkan 3 kemungkinan
// negatif, positif atau 0
// jika negatif maka a,b
// jika positif maka b,a
// jika nol maka tidak ada perubahan

//array.every
// merupakan fungsi yang cek semua nilai dr sebuah array apakah sesuai dg kriteria yg didefinisikan
// kembalian nilai dr funct ini adalah boolean
// arr. every(callback(element, [index], [array]))
// sbg contoh, kita akan mengecek apakah seorang siswa tlh lulus semua uji materi
const skors = [70,85, 61];
const minimSkor = 65;
const lulusKor = skors.every(skors => skors >= minimSkor);
console.log(lulusKor); //false karna ada yg <65

//array,forEach
// funct utk memanggil funct callback pada setiap iterasi index array.
// funct ini tdk mengembalikan nilai apapun.
// fungsi hanya memanggil fungi callbacknya not more.
//contoh pake newArray1
console.log(newArray1);
for(let i=0;i<newArray1.length;i++){
    console.log(`helooo, ${newArray1[i]}`);
} //cara imperatif
console.log(' ----------');
newArray1.forEach((newArray1)=>{
    console.log(`hello, ${newArray1}`);
}); //cara deklaratif
//ketahuilah bahwa ketika menggunakan forEach, kita tdk bs menggunakan operator break atau continue
// pada proses perulangan( anda bs melakukannya pada perulangan for)
// hal ini juga berlaku ketika pada funct map dan filter
const apel = ['malang', 'brastagi', 'california'];
for(let i=0;i< apel.length;i++){
    if(apel[i]==='brastagi') continue; //bisa
    console.log(`helloooo, ${apel[i]}`);
}
/**
 * 
    apel.forEach((apel)=>{
    if(apel==='brastagi') continue; //tidak bs
    console.log(`helo, ${apel[i]}`);
});
nb : jika di run atau tidak dijadikan komen akan error
*/