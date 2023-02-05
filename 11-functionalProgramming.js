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