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
// memanggil method super() artinya memanggil constructor superclass, yaitu
// MailService. dengan begitu kita tidak perlu mendefinisikan dan menetapkan nilai properti umum satu per satu
// meskipun dalam contoh kali ini properti yang bersifat umum hanya ada satu, yaitu sender,
// tetapi jika jumlah propertinya bertambah, kita tidak perlu menulis kode yang berulang pada setiap subclass
// pada sintak class, pemanggilan super() tidak boleh terlewatkan karena akan menyebabkan ReferenceError

class MailService {
    constructor(sender){
        this.sender = sender;
    }
}
class WhatsAppService extends MailService{
    constructor(sender, isBussines){
        this.sender=sender;
        this.isBusinnes=isBussines;
    }
}
const whatsapp = new WhatsAppService("+628123456789", true); // output ReferenceError: must call super constructor in derived class before accesing "this" or returining from derived constructor

// --- method overriding ---
// konsep overriding juga bisa diterapkan pada method class.
// method overriding biasanya dilakukan ketika kita ingin mengubah implementasi method warisan
// superclass. contoh pada class MailService terdapat method send() yang sudah didefinisikan implementasinya.
// namun jika pada subclass WhatsAppService kita membutuhkan implementasi yang berbeda, kita bisa
// override methode send()
// cara override method pada subclass mirip seperti override constructor, tetapi kita tidak perlu memanggil method super di dalamnya

class MailService{
    constructor(sender){
        this.sender= sender;
    }
    sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
}
}
class WhatsAppService extends MailService{
    constructor(sender, isBusinnes){
        super(sender);
        this.isBusinnes=isBusinnes;
    }
    // overriding method
    sendMessage(message, receiver){
        console.log(`${this.sender} sent ${message} to ${receiver} via whatsapp`);
    }
}
const mailService = new MailService("some sender");
const whatsappService = new WhatsAppService("+6281234567890", true);
mailService.sendMessage("hai apa kabar?", 'someReceiver');
whatsappService.sendMessage("hai apakabar?", "+68289876543210");
// output service : 
/**
 * someSender sent Hai, apa kabar? to someReceiver
 * +6281234567890 sent Hai, apa kabar? to +6289876543210 via Whatsapp
 */
// jika dibutuhkan, kita juga bisa memanggil method sendMessage() dari superclass
// melalui keyword super.sendMessage().
class MailService {
    constructor(sender) {
    this.sender = sender;
    }
    sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
    }

}  
class WhatsAppService extends MailService {
    constructor(sender, isBusiness) {
    super(sender);
    this.isBusiness = isBusiness;
    }
    
    // Overriding method
    sendMessage(message, receiver) {
      // memanggil method sendMessage pada superclass
    super.sendMessage(message, receiver);

    console.log('message sent via WhatsApp');
    }



const mailService = new MailService('someSender');
const whatsappService = new WhatsAppService('+6281234567890', true);

mailService.sendMessage('Hai, apa kabar?', 'someReceiver');
whatsappService.sendMessage('Hai, apa kabar?', '+6289876543210');

/**
  * Output:
  * someSender sent Hai, apa kabar? to someReceiver
  * +6281234567890 sent Hai, apa kabar? to +6289876543210
  * message sent via WhatsApp
  */