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