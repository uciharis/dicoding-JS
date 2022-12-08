//destrukturing array serupa dg objek
//jika pada objek menggunakan {},
//di array menggunakan []
//destrukturing array bekerja bedasarkan posisi penamaan properti
const makanan =["seafood", "rendang", "nugget", "sup"];
const [makan1, makan2, makan3, makan4]= makanan;
console.log(makan1, makan3,makan4);

//utk destrukturing var dg properti tertenu saja,maka diloncati
//properti tsb dg mengosongkan nya diakhiri tanda koma
const [,mamakan]=makanan;
console.log(mamakan);

//kita jg bs mendestruktur properti ke var yg sudah dideklar
//cara sama dg saat di objek namun tanpa dibungkus tanda kurung
const minum=["escampur", "eskopyor", "tehtarik"];
let myDrink="tehtelur";
let fatherDrink="tehanget";
[myDrink, ,fatherDrink]=minum;
console.log(myDrink, fatherDrink);

//destrukturing digunakan jg utk menukar atau swap nilai
let a=1;
let b=3;
[a,b]= [b,a];
console.log(a,b);

//saat kita destrukturisasi tetapi jumlah array < variabel
//yg aakan didestruktur dg cara memberi var yg tidak memiliki padanan
//aray td dengan nilai default.
//hampir mirip dg yg objek
const menu =["nasgor", "migor", "nasiuduk"];
[menu1, menu2,menu3,menu4="mitektek"] = menu; //kasih nilai default agar tak undefined
console.log(menu1, menu2, menu3, menu4);