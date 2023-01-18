/**
 * ---pewarisan---
 * ibarat sebuah kendaraan roda 4 yang bermacam-macam seperti mobil ambulance, truk, bis,mobil balap.
 * meskipun punya fitur yang berbeda tetapi merupakan 1 jenis yaitu kendaraan roda 4.
 * kcepatan maksimum berbeda, fitur berbeda, bentuk body beda, dll.
 * 
 * sama halnya dengan objek pada pemrograman, ada 2 buah objek yang sama tetapi
 * memiliki perbedaan kecil seperti misal objek EmailService dan WhatsappService.
 * sama2 memiliki fitur sender tetapi sifatnya berbeda.
 * properti sender pada whatsapp adalah brodcast sedangkan
 * properti sender pada email adalah delay.
 * meskipun kita bs membuat langsung 2 class yang berbeda tetapi sangat tidak efektif
 * karena mereka bs dituliskan dg 1 blueprint saja.
 * contoh:
 */
class WhatsappService {
    constructor(sender){
        this.sender=sender;
    }
    //method
    sendMessage(message,receiver){
        console.log(`${this.sendMessage} sent ${message} to ${receiver}`);
    }
    sendBroadcastMessage(message, receivers){
        for (const receiver of receivers){
            this.sendMessage(message, receiver);
        }
    }
}
class EmailService{
    constructor(sender){
        this.sender=sender;
    }
    //method
    sendMessage(message, receiver){
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
    sendDelayedMessage(message, receiver,delay){
        setTimeout(()=>{
            this.sendMessage(message, receiver);
        }, delay);
    }
}

// jika kita lihat kode diatas terdapat duplikasi kode utk bagian yg sama
// pada objek tsb.walau sederhana tetapi tdk menutup kemungkinan kesamaan tsb
//terus berkembang shg duplikasi tsb semakin sering terjadi
// untuk menghindari duplikasi kode maka bisa saja kita membuat 1 class
// yang mencakup kemampuan kedua objek tersebut.
// kita cukup membuat instance(anak) WhatsAppService dan EmailService
// menggunakan satu class saja

class MailService {
    constructor(sender) {
        this.sender=sender;
    }
    sendMessage(message, receiver) {
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
    sendDelayedMessage(message, receiver, delay){
        setTimeout(()=>{
            this.sendMessage(message, receiver);
        }, delay);
    }
    sendBroadcastMessage(message, receivers){
        for (const receiver of receivers){
            this.sendMessage(message, receiver);
        }
        
    }
}
const whatsapp = new MailService("+6281234567890"); //ini adalah instance
const email = new MailService("dimas@dicoding.com"); //ini adalah instance juga

//namun, cara membuat objek/ instance whatsapp dan email tidak memiliki perbedaan
// masalah yang ditimbulkan adalah terdapat kemampuan yang tidak dibutuhkan diantara
// kedua objek tsb.
// whatsapp tidak membutuhkan sendDelayedMessage() dan email tidak membutuhkan
// fitur sendBroadcastMessage()

const whatsapp = new MailService("+6281234567890");
const email = new MailService ("dimas@dicoding.com");
whatsapp.sebdDelayedMessage();// ??
email.sendBroadcastMessage(); // ??

//paradigma OOP menawarkan solusi dalam memecahkan masalah ini dengan konsep
// pewarisan atau inheritance
//dg konsep in, diwariskan sifat sifat yang berada di dalam sebuah class ke class lain.
// konsep ini cocok ketika kita ingin membuat objek mirip dan memiliki sedikit perbedaan seperti kasus yang kita hadapi
// implementasinya, kita tampung seluruh sifat yang sama pada sebuah class induk (superclass)
// -dan sifatnya nanti akan diwariskan kepada class di bawahnya (subclass)
// kemudian pada subclass kita tambahkan kemampuan lain yg lebih spesifik
// contoh, kita buat superclass bernama MailService yang mengandung
// seluruh sifat yang sama pada WhatsAppService dan EmailService
// contoh superclass
class MailService {
    constructor (sender) {
        this.sender = sender;
    }
    sendMessage(message, receiver){
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
}

//contoh subclass 1
class WhatsAppService extends MailService {

}
//contoh subclass 2
class EmailService extends MailService {

}

//di dalam masing2 subclass, kita dapat mendefinisikan metod yang
//spesifik seperti sendBroadcastMessage() untuk WhatsAppService dan
// -sendDelayedMessage() untuk EmailService

// subclass 1
class WhatsAppService extends MailService {
    sendBroadcastMessage(message, receivers) {
        for (const receiver of receivers) {
            this.sendMessage(message. receiver);
        }
    }
}

// subclass 2
class EmailService extends MailService (
    sendDelayedMessage(message, receiver,delay){
        setTimeout(()=>{
            this.sendMessage(message, receiver);
        }, delay);
    }
)
//lihat bahwa di dalam subclass WhatsAppService dan EmailService kita tetap
// memiliki akses terhadap method dari superclass melalui keyword this
// karena subclass mewarisi sifat dari superclass.
// dengan teknik pewarisan seperti ini, kita dpat membuat objek serupa
// dengan cara yang jauh lebih efektif.

const whatsapp= new WhatsappService('+6281234567890');
const email = new EmailService('dimas@dicoding.com');
whatsapp.sendMessage('hello', '+6289876543210');
whatsapp.sendBroadcastMessage('hello', ['+6289876543210','+6282234567890 ']);
whatsapp.sendDelayedMessage(); //error

email.sendMessage('hello', 'john@doe.com');
email.sendDelayedMessage('hello', 'john@doe.com', 3000);
email.sendBroadcastMessage(); //error

// ---pewarisan sifat tanpa ES6 class---
// bagaimana jika pewarisan dilakukan tanpa atau sblmnya hadirnya sintak class ES6 ?
// berikut adalah teknik prototype inheritance :
function MailService(sender){
    this.sender= sender;   
}
MailService.prototype.sendMessage = function (message,receiver){
    console.log(`${this.sender} sent ${message} to ${receiver}`);
}
function WhatsAppService(sender){
    MailService.call(this, sender);
}
// prototype inheritance
WhatsAppService.prototype = Object.create(MailService.prototype);
WhatsAppService.prototype.constructor = WhatsAppService;
WhatsAppService.prototype.sendBroadcastMessage= function (message, receivers) {
    for (const receiver of receivers) {
        this.sendMessage(message, receiver);
    }
} 
function EmailService(sender){
    MailService.call(this, sender);
}
//prototype inheritance
EmailService.prototype = Object.create(MailService.prototype);
EmailService.prototype.constructor = EmailService;
EmailService.prototype.sendDelayedMessage = function (message, receiver, delay){
    setTimeout(()=>{
        this.sendMessage(message, receiver);
    }, delay);
}
const whatsapp = new WhatsAppService('+6281234567890');
const email = new EmailService('dimas@dicoding.com');
whatsapp.sendMessage("hellow", ['+6289876543210', '+6282234567890']);
email.sendMessage("hellow", "john@doe.com");
email.sendDelayedMessage("hello", "john@doe.com", 3000);

//pewarisan dengan keyword function sulit dibaca, alasan inilah yang membuat sintak class
// hadir pada ES6. meskipun sintaks class terkesan jauh berbeda dengan function namun sebenarnya
//implementasi keduanya sama-sama menggunakan prototype inheritance.
//ingat, class hanyalah cara lain dalam membuat costructor function

// --- instanceof ---
// saat menulis kode, kita perlu mengecek jenis dari objek tsb. salah satu cara untk mengecek
// adalah menggunakan instanceof. ini digunakan utk mengecek rantai prototypenya, atau lebih tepatnya
// mengecek prototype dari constructor function atau classnya. maka dari itu gunakan instanceof
//contoh:
// operand1 instanceof operand2
// operand1 merupakan objek yang ingin dites prototype nya
// operand2 merupakan constructor function atau class
// berikut ini merupakan contoh penggunaan dari instanceof dalam mengecek objek whatsapp yang merupakan
// instance dari class WhatsAppService
const whatsapp = new WhatsapppService('+628123467890');
console.log(whatsapp instanceof WhatsAppService); // true
console.log(whatsapp instanceof EmailService); //false

// operator instanceof mengembalikan boolean. hasilnya true jika bje yang ditens (operand1)
// memiliki prototype yang sama dari operand2, bernilai salah jika bukan.
// instanceof juga mengecek prototype secara berantai. instanceof mengecek hingga prototype diwarisi oleh objek tsb
const whatsApp = new WhatsAppService("+6281234567890");
const email = new EmailService("dimas@dicoding.com");
console.log(whatsapp instanceof WhatsAppService); //true
console.log(whatsapp instanceof EmailService); //false
console.log(whatsapp instace MailService); //true, Mailservice induk kelas

console.log(email instance of EmailService); //true
console.log(email instanceof WhatsAppService); //false
console.log(email instanceof MailService); //true