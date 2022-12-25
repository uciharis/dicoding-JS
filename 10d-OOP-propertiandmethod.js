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