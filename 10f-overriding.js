// --overriding--
//adalah konsep lain yang dekat dengan pewarisan
// overriding merupakan fitur OOP yang memperbolehkan subclass mendefinisi
// implementasinya sendiri pada sebuah method yang sebenarnya sudah didefinisikan
// pada superclass. overriding diterapkan ketika kita ingin menetapkan
// implementasi spesifik di subclaas pada metod yang berasal dari superclass
// overriding juga diterapkan ketika kita ingin menambah properti baru secara spesifik
// pada sebuah subclass
// di JS dan bahasa pemorgraman lainnya yang menerapkan paradigma OOP, 
// overriding umumnya dilakukan pada constructor dan metod class.
// -- constructor overriding -- 
// merupakan metod spesial pada class yang akan dipanggil pada saat pembuatan instance
// lebih tepatnya ketika menggunakan keyword new diikuti nama class.
const mailService = new MailService // akan memanggil metod constructor pada class MailService

// constructor akan mengembalikan objek yang merupakan instance dari class tsb.
// perbedaan dengan metod pada umumnya, pada constructor kita tidak perlu menulis return
// ketika hendak mengembalikan nilai karena sudah dilakukan secara implisit
// dalam constructor, biasanya kita mendefinisikan properti dan menetapkan nilainya.
// contoh pada superclass MailService, kita mendefinisikan properti sender yang nilainya
// diambil dari argumen method constructor
// contoh : 
class MailService {
    constructor(sender){
        this.sender = sender;
    }
    // metod lain disembunyikan
}
const mailService = new MailService ("someReceiver");
console.log(mailService);
/**
 * output;
 * MailService{sender: "someReceiver"};
 */
// ketika kita melakukan pewarisan, seringkali kita perlu menambahkan properti
// baru yang spesifik hanya pada subclass tertentu.
// contoh pada WhatsAppService yang merupakan subclass dari MailService, kita
// membutuhkan properti yang mengindikasikan akun bisnis atau bukan, sehingga
// kita perlu membuat properti baru bernama isBussiness hanya pada subclass tsb
// agar bisa melakukan hal tsb, perlu kita lakukan constructor overriding
class WhatsAppService extends MailService {
    // overriding constructor
    constructor(sender, isBusinnes) {
        super(sender);
        this.isBussines = isBussines;

    }
}
//overriding constructor dilakukan sesimpel kita mendefinisikan kembali method constructor
// pada sebuah class. selain itu, metod constructor didefinisikan dengan perubahan sesuai kebutuhan kita.
// misal menambahkan properti dan argumen isBusinnes. satu hal yang sangat penting dalam menerapkan
// constructor overriding adalah jangan sampai lupa memanggil metod super()