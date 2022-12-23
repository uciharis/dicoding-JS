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

//definisi
// parameter vs argument
//parameter : variabel yg didefinisikan sbg inputan dlm fungsi
/*contoh: function nambah(a,b){
    return a+b;
}
a dan b disebut parameter
*/
//sedangkan argumen adalah isian atau nilai yg dimasukkan kedalam parameter
//contoh: nambah(4,9);
//--------- ----------------
//jika parameternya adalah objek maka bisa dimanfaatkan utk destructuring objek
const pakai = {
    id: 24,
    displayName: "jokoh",
    lengkapName: "mul jokoh"
};
function kenal({displayName, lengkapName}){
    console.log(`${displayName} adalah ${lengkapName}`);
}
kenal(pakai);

// --- default parameter ---
//fungsi pada JS tidak melakukan pengecekan thd jumlah maupun tipe argumen yg masuk k dalam parameter
//shg kita bs memasukkan argumen apapun meski tdk sesuai dg parameter yg kita inginkan
//contoh: 
function eksponenForm(basenumber, eksponen){
    let result=basenumber**eksponen;
    console.log(`${basenumber} pangkat ${eksponen} adalah ${result}`);
}
eksponenForm(2); //isinya Nan karena argumennya cuma 1 
//maka dari itu perlu digunakan nilai default pada parameternya

function eksponenFormFix(basenumber1, eksponen1=1){
    let result1=basenumber1**eksponen1;
    console.log(`${basenumber1} pangkat ${eksponen1} adalah ${result1}`);
}
eksponenFormFix(2); // aman, tidak lengkap isinya pun sudah ada default = 1

//--- rest parameter---
//kebalikan dari spread operator
// jika spread operator ( ... ) menyebarkan array menjadi elemen beda, 
//rest parameter (...) justru menggabungkan beberapa elemen jd 1 array
function sum(...numbers){
    let hasil=0;
    for (let number of numbers) {
        hasil +=number;
    }
    return hasil;
}
console.log(sum(1,2,3,4,5,6,7,9));

// --- arrow function --
