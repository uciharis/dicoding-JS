// ---variabel scope---
//variabel yg dapat diakses oleh seluruh script disebut globally scope
//variabel yg hanya dapat diakses pada fungsi trtntu dsebut locally scope
/* --- contoh global dan local scope ---
const a=100; *ini global dapat diakses parent dan child
function parent(){
    const b=110; *ini local, hanya bs diakses parent dan child tdk diluar function
    function child(){
        const c=120; *local, hanya bs diakses child sj
    }
}
*/
//contoh:
function perkali(num){
    total = num * num;
    return total;
}
let total=9;
let number= perkali(10);
console.log(total, number); //maksud hati ingin print total=9
//hal ini karna total pada funct perkali bersifat global
//shg bs diakses dr luar
//note:
//jika kita lupa nuliskan keyword let/const atau var pada script
// - variabel tsb menjadi global