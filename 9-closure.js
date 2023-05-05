//---closure---
//suatu fungsi yg dapat mengakses variabel didalam fungsi yg bersarang
// -disebut closure
//contoh:
function init (){
    var name="obi wan" //local dlm scope fungsi
    function greet(){ //fungsi dlm fungsi (closure)
        console.log(`halo si ${name}`); //dpt panggil variabel diatasny
    }
    greet();
}
init(); //fungsi diatas dsebut memilik lexical scope

//contoh ke-2
function init2(){
    var name2="obi wan wan"; //var name2 bersifat closure
    function greet2(){
        console.log(`halo ${name2}`);
    }
    return greet2;
}
let myFunct = init2();
myFunct();

//berbeda halnya dg java, JS tdk memiliki cara utk deklar variabel mnjd private.
//shg var atau fungsi bs diakses dr mana saja
//private metod ini penting agar kita dpt membatasi akses dari luar ke var atau fungsi itu sendiri
//contoh lain:
let counter=0;
let add= ()=>{
    return ++counter;
}
console.log(add()); //hasil 1
console.log(add()); //hasil 2 ? wkwk
counter=23;
console.log(add());
// berikut contoh perbaikan fungsi diatas menggunakan closure agar private
let add2=()=>{
    let counter2=0; //counter2 jgn dibiarkan di luar. masukkan ke dalam agar aman dr akses dr luar
    return ()=> {
        return ++counter2;
    };
}
let addcounter2=add2();
console.log(addcounter2());
counter2=100; // counter2 tidak mempengaruhi fungsi add2 wkwk ajaib
console.log(addcounter2());
console.log(addcounter2());
console.log(addcounter2());