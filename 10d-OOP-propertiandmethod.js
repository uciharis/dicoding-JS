//class pada JS (atau disebut function constructor) merupakan sbuah objek blueprint
//penggunaan ini utk menghindari bnyk duplikasi kode dlm membuat banyak objek sekaligus
//pada class, kita mendefinisikan 2 hal yaitu properti dan method.
//---properti---
//bagian dr class yg berisi nilai dari objek tersebut misal warna, nama, panjang dll.
//contoh berupa class Mail
class Mail{ //template/blueprint berisi properti
    constructor(pengirim, penerima, subjek, isi){ //metode utk menginisialisasi objek blueprint baru(nilai awal)
        this.pengirim=pengirim; //this adalah kata kunci merujuk pada objek baik metode ataupun properti
        this.penerima=penerima;
        this.subjek=subjek;
        this.isi=isi;
    }
}

//nilai dr properti biasanya diambil dari argumen constructor agar nilainya bervariasi setiap kali membuat instance
const mail1 = new Mail("joko", "muldoko", "rahasia negoro", "cepet bayar utang RI bos!"); //memakai blueprint Mail
console.log(mail1.isi);
//misal kita akan membuat blueprint merk mobil,warna dan plat acak(autogenerate bukan diisi user)
//ada kalanya nilai properti didefinisi di dalam class itu sendiri. contoh pada plat yang acak
class Mobil {
    constructor(merek, warna) { //properti hanya 2, plat digenerate otomatis
        this.merek= merek;
        this.warna= warna;
        //set acak plat
        this.plat= `${merek}-${Math.round(Math.random()*10_000)+21}`;
    }
}
const MobilBrio = new Mobil("honda-Brio","pink luntur");
console.log(MobilBrio);


// --- properti getter n setter ---
//secara standar, properti dalam sebuah instance class bersifat mutable
//atau dapat diubah nilainya. 
//meskipun kita menetapkan nilai plat oleh sistem,nyatanya nilai tersebut masih
//dapat diubah dengan mudah
//kita panggil kembali instance mobil brio
console.log(MobilBrio.plat); // masih bs diubah
MobilBrio.plat = "sayaGanti001";
console.log(MobilBrio);
console.log(MobilBrio.plat); //berhasil diubah

//maka dari itu perlu memanfaatkan setter dan getter utk memproteksi plat
//agar tidak di overwrite
//sebelum itu kita perlu mengetahui dua tipe properti
//yaitu data property dan accesor property
//data property merupakan properti yang sejauh ini kita gunakan, properti
// -yang menampung nilai dalam sebuah objek
//sedangkan accessor propery adalah propery yang dikontrol oleh getter dan setter
//nilai yang didapat dr properti tsb dikontrol oleh method get dan cara
//menetapkan nilai tsb dikontrol oleh method set
//berikut contoh accessor propery :
console.log(" -------");
class User {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName (){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName) {
        const [firstName, lastName]= fullName.split("");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const user = new User("mulle","dokko");
console.log(user);
console.log(user.fullName);

user.fullName = "jokko dokk";
console.log(user);
console.log(user.fullName); // ?? tidak sesuai dengan materi. sedang ditanyakan di forum diskusi dicoding
/*
penjelasan kode:
di dalam class User, terlihat data property yaitu firstName dan lastName.
nilai properti tsb ditetapkan lewat argumen constructor.
selain itu terdapat method get fullName dan set fullName.
method tsb merupakan accessor properti yang mengatur cara akses dari
properti fullName.

karena kita menetapkan getter dan setter untuk properti fullName, maka kita
bisa mengakses properti tsb melalui instance User.
ketika kita coba mendapatkan nilai properti fullName dg cara user.fullName,
method getter akan dijalankan dan nilai yang di return jadi nilai properti tsb.

begitu juga ketika kita tetapkan nilai properti fullName dg cara user.fullName = "abc def",
kode dalam method setter akan dijalankan.

catatan:
1. metod getter harus return sebuah value dan value tsb akan jd nilai properti
2. metod setter harus menerima 1 argumen yang nilainya diambil dr operand ke dua
ketika melakukan assignment operator.

*/
/* kembali ke nilai properti plat.

bagaimana getter n setter dapat memproteksi perubahan nilai properti dari
plat ?

di javascript, pola yang sering ditetapkan utk memecahkan masalah ini adalah dg
memanfaatkan getter dan setter sebagai "wrapper" dari properti asli.
tujuannya agar setter dan getter bisa mengontrol akses seperti mendapat
dan menetapkan nilai properti.

utk menerapkan pola ini, pertama kita perlu ubah nama dari properti plat,
misal dengan menambah tanda garis bawah di depannya jadi _plat (memiliki underscore)
contoh serupa tp diubah sedikit agar tdk mempengaruhi kode diatasnya :
*/
class Baju {
    constructor(brand, colour, harga){
        this.brand = brand;
        this.colour = colour;
        this.harga= harga;
        this._serialNo = `${brand}-${Math.floor(Math.random()*10_000)}`; // _ pada 10_000 agar angka readible
    }
    get serialNo(){ //kita tdk ingin serialNo bisa diubah shg utk setter properti kita cetak warning
        return this._serialNo;
    }
    set serialNo(serialNo){
        console.log("enak aja lu ubah serial nomor seenak udel"); //tidak bs ubah serialNo
    }
}
const sempak = new Baju("pakalolo", "kuning", 12_000);
console.log(sempak.serialNo);
sempak.serialNo = "sempak-069";
console.log(sempak.serialNo);

/*
sebenarnya serialNo masih bs dirubah jika kita langsung ubah
properti _serialNo namun perlu diketahui mengubah dan mendapat nilai properti objek
yang diawali tanda underscore tidak direkomendasikan.
Komunitas JS menyepakati bahwa hal yang diberi tanda underscore bukan tuk
diakses alias sifatnya private.

JS ES2022 hadir dengan fitur private identifier. dengan fitur itu kita bs
membuat private property. hal ini memecahkan masalah diatas.
materi ini akan dibahas di judul "Member Visibility"
*/
//----method ------
/**
method adalah sebuah fungsi yang berada d dlam sebuah class dan dapat diakses
melalui instance class.

method biasanya mengindikasikan hal yg dapat dilakukan oleh sebuah class.
bila kita berbicara tentang class Car, method yang dimiliki seperti drive(), maju(),
mundur(), belok().

jika pada class Mail, method bisa berupa kirim(), kirimNanti(), simpanSebagaiDraft().
contoh:
 */
class Surat {
    constructor(pengirim, terima, tentang, tulisan){
        this.pengirim=pengirim;
        this.terima=terima;
        this.tentang=tentang;
        this.tulisan;
    }
    //isian method
    kirim(){
        console.log(`ngirim email dari ${this.pengirim} to ${this.terima}` );
    }
    kirimNanti(delay){
        console.log(`sedang mengirim setelah ${delay} milidetik`);

        setTimeout(()=>{this.kirim();},delay); //argumen akses nilai properti pake this
    }
    
    saveAsDraft(){
        console.log("simpan sebagai draft");
    }
}
//sama seperti fungsi JS, method bs menerima sbuah argumen
//contoh pada method kirimNanti di class Mail.
//penulis memanfaatkan argumen delay untuk menetapkan arah dan waktu delay
// dalam menjalankan method nya
//method juga dapat mengakses ke nilai properti atau method lainnya melalui this

//method di dalam class hanya bisa dijalankan melalui instance dari class tsb
//contoh:
const gmail= new Surat("moeldock", "jokawwi","rahasia","gaskan anggara 2023!");
gmail.kirim();
//gmail.kirimNanti();
//gmail.saveAsDraft();

/**
 * method memang kental dengan kemampuan yang bs dilakukan sebuah class.
 * tapi pada prakteknya, method tidak hanya untuk itu saja.
 * method juga digunakan ketika kita mengekstrak sebuah kode agar lbh mudah dibaca
 * dan method tsb dpt digunakan utk kebutuhan internal saj
 * 
 * sebagai contoh pada class Mobil, kita menerapkan _serialNo dengan nilai random ditulis di dalam constructor
 * hal ini menjadikan kodenya sulit dibaca karena dicampuri dg logika dalam menghasilan angka acak.
 * 
 * agar kode dalam construcotr lebih rapi, kita bs membuat method yang digunakan internal utk menampung kode tsb.
 * biasanya kode tsb digunakan secara internal yg disebut private dan namanya diawali tanda underscore.
 */

class Card {
    constructor(shape, color, ingredient){
        this.shape=shape;
        this.color=color;
        this.ingredient=ingredient
        this._prodakNo=this._generateProdakNo(); //ambil nilai dg method
    }
    get prodakNo(){
        return this._prodakNo;
    }
    set prodakNo(prodakNo){
        console.log(`ngawoor kamu rubah2 nomor dg nomor ${this._prodakNo}prodak`) //jika ada yg akses prodakNo langsung akan terkena warning
    }
    //methode
    cetak() {
        console.log("sedang mencetak produk ini");
    }
    batal(){
        console.log("anda membatalkan pencetakan");
    }
    _generateProdakNo(){
        return `${this.color}-${Math.floor(Math.random() *5_000)}`;
    }
}
const kartuNdanga = new Card("square normal","pink", "bamboo");
kartuNdanga.cetak();
kartuNdanga.batal();

/**
 * ---Member Visibility---

* member visibility bs disebut juga sebagai hak akses pada sebuah properti
*dan method di dalam class.
*secara default, seluruh properti dan method yang dibuat di dalam class bersifat public,
*alias dapat diakses di luar dari kode class via instance.
*selain di publik, kita juga bs membuat properti dan method yang bersifat private,
* terutama ketika kita ingin properti atau method tsb hanya digunakan dalam cakupan
* kode di dalam class saja (penggunaan internal)
*
*pembahasan sebelumnya, kita sudah mengenal bahwa pemberian tanda underscore pada properti atau method bisa dijadikan
* sebagai penanda bahwa ia adalah private.
* masalahnya, cara tsb bercanda alias tidak benar benar memproteksi hak akses.
* pada class Card kita sudah membuat private properti _prodakNo dan method _generateProdakNo.
* namun kedua properti tsb tetap bisa diakses lewat instance, dan mengubah nilainya.
*/
//contoh:
class Roti {
    constructor(rasa, warnaRoti, harga){
    this.rasa=rasa;
    this.warnaRoti=warnaRoti;
    this.harga=harga;
    this._serialProduk=this._generateSerialProduk();
}
//getter n setter
get serialProduk(){
    return this._serialProduk;
}
set serialProduk(serialProduk){
    console.log("eitss ngubah serial produkk");
}
//metods 
pesan(){
    console.log(`roti rasa ${this.rasa} dengan harga ${this.harga} dipesan`);
}
cancel(){
    console.log("pesanan dibatalkan");
}
_generateSerialProduk(){
    return `roti-SN:${Math.floor(Math.random()*10_000)}`;
}
}
const rotiKempit=new Roti("aplokat", "oranje", 20_000);
console.log(rotiKempit._serialProduk); //melihat serial produk hasil properti berisi fungsi random
rotiKempit._generateSerialProduk="saya hack serial prodakmuuuu";
console.log(rotiKempit._serialProduk); // redeclare ke sini gagal
console.log(rotiKempit._generateSerialProduk); //redeclare ke sini berhasil donk wkwk

/**
 * untuk mengatasi hal diatas, JS versi ES2022 resmi mengenalkan
 * cara dalam menetapkan hak akses private pada properti dan method objek
 * dengan menambahkan tanda # di awal penamaan properti or method.
 */
 //contoh:
 class Tanaman{
    #tanamanNo=null; //ini adalah enclosing class khusus properti yang private
    constructor(spesies, warna, harga){
        this.spesies=spesies;
        this.warna=warna;
        this.harga=harga;
        this.#tanamanNo=this.#generateTanamanNo();
    }
    get tanamanNo(){ //akses kesini juga pasti error (syntaxError)
        return this.#tanamanNo;
    }
    set tanamanNo(tanamanNo){
        console.log("ketauan kamu ubah nomor tanaman");
    }
    //metode
    tumbuh(){
        console.log("tanaman sedang bertumbuhhhh");
    }
    pesan(){
        console.log(`tanaman spesies ${this.spesies} terpesan`);
    }
    bayar(){
        console.log(`bayar sebesar ${this.harga}`);
    }
    #generateTanamanNo(){ //akses langsung kesini pasti langsung syntaxError
        return `${this.spesies}-${Math.floor(Math.random()*10_000)}}`;
    }
 }
 //khusus utk properti yang bersifat private (dalam hal ini tanamanNo)
 //propertinya di deklar di enclosing class