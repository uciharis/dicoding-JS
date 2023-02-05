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