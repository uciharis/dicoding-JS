//akan ada situasi dimana kita perlu melakukan hal yg sama berkali-kali
//misal kita ingin menuliskan angka 1-10 dengan
//mencetak console.log sebanyak 10x
/*
console.log(1);
console.log(2);
...
console.log(10);
*/

//hal ini akan merepotkan. untuk mengatasi nya menggunakan loop
//ada beberapa bentuk loop antara lain:

// 1. for
for (let i=0;i<5;i++){ //loop for
    console.log(i); //stop eksekusi kode ketika argumen salah
}
console.log("------------");
// 2. for of
//hadir d ES6
//loop pada array
let angkaKu= [1,3,4,4,5,6];
for (const isiAngka of angkaKu) { //isiAngka adalah variabel utk tampung array
    console.log(isiAngka);
}
console.log("------------");
// 3. while
//sama dg for, hanya beda format penulisan
//cocok utk kasus tidak tahu berapa bnyk perlu perulangan
let i=1;
while (i<=10){
    console.log(i);
    i++;
}
console.log("------------");
// 4. do-while
//menjalankan kode lalu mengevaluasi true/ false nya
//pada while, dicek dlu true/ falsenya br dijalankan

let u=1;
do {
    console.log(u);
    u++
} while (u<=13);
//minimal menjalankan 1x meskipun kondisi pertama langsung false