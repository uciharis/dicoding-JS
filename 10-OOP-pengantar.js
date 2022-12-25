// --- mengenal OOP ---
//beberapa hal yg akan dibahas:
/*
1. pengertian paradigma
2. constuctor function dan sintak class
3. properti dan method dlm class
4. pewarisan
5. constructor dan method overriding
6.object composition
7. buult-in class
*/

//objek dlm OOP dianggap seperti objek d dunia nyata
//contoh: 
//objek : mobil; propertis:merk, warna, tipe; methods: maju,mundur,belok

//contoh kode OOP sederhana
const mobil = {
    //properties
    merk: "honda",
    warna: "ireng",
    maxSpeed: 180,
    //methods
    drive: ()=>{
        console.log("driving nih ..");
    },
    reverse: ()=>{
        console.log("mundur banh ..");
    },
    belok:()=>{
        console.log("belok cuy ..");
    }
}
console.log(mobil.merk); //memanggil properti merk
console.log(mobil.warna); //memanggil properti warna
mobil.reverse(); //manggil metod

//utk membuat salinan objek, gunakan fitur object blueprint
//kita bs membuat cetakan objek dg macam properti dan metod
//shg kita bs pake cetakan yg sama dg nilai properti dan metod yg lain
//object blue print itu dinamakan class