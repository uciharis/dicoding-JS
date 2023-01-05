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
const mail1 = new Mail("joko", "muldoko", "rahasia negoro", "cepet bayar utang RI bos!"); //memakai blueprint Mail
console.log(mail1.isi);
//misal kita akan membuat blueprint merk mobil,warna dan plat acak(autogenerate bukan diisi user)
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
membuat private propery. hal ini memecahkan masalah diatas.
materi ini akan dibahas di judul "Member Visibility"
*/
