//fungsi adalah blok kode yang digunakan scr berulang. fungsi didefinisikan dengan keyword function
// -lalu diikuti dengan nama fungsinya. 
//contoh:
// function multiply(){return 2+4;}
//terkadang kita memerlukan parameter ke dalam fungsi tsb. parameter tsb dituliskan ke dalam tanda kurung
//parameter adlh data yang digunakan utk memproses fungsi tsb
//contoh pada console.log() jika kita isikan parameter atau data kedalam tanda kurung utk menampilkan
//hal tertentu
//contoh fungsi yang menggunakan parameter
//function multiply(a,b){return a+b;}
//contoh function lagi
function ucap(){
    console.log("selamat pagiii ....... !!");
}
ucap();
//contoh lain:
function tambah(a,b){
    console.log(a+b);
}
tambah(3,4); //panggil fungsi tambah dan cetak 3+4 = 7
//contoh yg lain
function ucap2(nama,bhs){
    if(bhs==="inggris"){
        console.log(`good morning ${nama}`);
    } else if (bhs==="indo"){
        console.log(`selamat pagi ${nama}`);
    } else {
        console.log(`jancok asu ga kasih tahu bhs mu ${nama}`);
    }
}
ucap2("jarwo","itali");
ucap2("paijo","inggris");

//selain itu, output dr function dapat dimasukkan k dalam variabel
//contoh: 
function tambah2(a,b){
    return a+b;
}
let hasilTambah=tambah2(3,5);
console.log(hasilTambah);

//return digunakan utk mengembalikan nilai, jika tidak diberi return maka nilainya tdk muncul
//-karena tidak terpanggil
//contoh function tanpa console.log tp menggunakan return
function ucap3(jumlah, buah){
    if(buah==="apel"){
        return `ini ${buah} sebanyak ${jumlah/2}`;
    } else {
        return `buang ${buah} tersebut`;
    }
}
let ucapanku=ucap3(6,"apel");
console.log(ucapanku);
// ketika statemen return tereksekusi, fungsi langsung berhenti dan segera mengembalikan nilai

//cara lain membuat functi pada JS adalah expression function.
//selain itu, fungsi yang tidak bernama disebut anonymous function

//contoh express function
//umumnya tidak punya nama fungsi, lalu disimpan ke dalam variabel tertentu.
const perkalian= function(a,b){
    return a*b;
}
console.log(perkalian(3,4));