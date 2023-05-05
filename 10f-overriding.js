/**
 * Konsep lain yang lekat dengan pewarisan adalah overriding.
 * Overriding di dalam OOP merupakan fitur yang memperbolehkan subclass mendefinisikan implementasinya sendiri pada sebuah method yang sebenarnya sudah didefinisikan pada superclass-nya. Overriding diterapkan ketika kita ingin menetapkan implementasi yang spesifik di subclass pada sebuah method yang berasal dari superclass. Overriding juga biasa diterapkan ketika kita ingin menambah properti baru secara spesifik pada sebuah subclass.

Di JavaScript dan bahasa pemrograman yang menerapkan paradigma OOP 
lainnya, overriding umumnya dapat dilakukan pada constructor dan method class.
 */
/**
 * Constructor merupakan method spesial pada class yang akan dipanggil pada saat pembuatan instance,
 * lebih tepatnya ketika menggunakan keyword new diikuti dengan nama class.
 */
{
    const mailService = new MailService(); // akan memanggil method constructor pada class MailService
}
/**
 * Constructor akan mengembalikan objek yang merupakan instance dari class 
 * tersebut. Perbedaan dengan method pada umumnya, pada constructor kita 
 * tidak perlu menulis return ketika hendak mengembalikan nilai karena 
 * sudah dilakukan secara implisit.

Di dalam constructor, biasanya kita mendefinisikan properti dan menetapkan 
nilainya. Contoh, pada superclass MailService, kita mendefinisikan properti 
sender yang nilainya diambil dari argumen method constructor.
 */
{
    class MailService {
        constructor(sender) {
          this.sender = sender;
        }
       
        // ... method lain disembunyikan
      }
       
      const mailService = new MailService('someReceiver');
      console.log(mailService);
       
      /* Output:
      MailService { sender: 'someReceiver' }
      */
}

/**
 * Ketika kita melakukan pewarisan, sering kali kita perlu menambahkan
 *  properti baru yang spesifik hanya pada subclass tertentu. Contoh, 
 * pada WhatsAppService yang merupakan subclass dari MailService, kita 
 * membutuhkan properti yang mengindikasikan akun bisnis atau bukan, 
 * sehingga kita perlu membuat properti baru bernama isBusiness hanya pada 
 * subclass tersebut. Agar bisa melakukan ini, kita perlu melakukan 
 * constructor overriding.


 */
{
    class MailService {
        constructor(sender) {
          this.sender = sender;
        }
      }
       
      class WhatsAppService extends MailService {
        // overriding constructor
        constructor(sender, isBusiness) {
          super(sender);
       
          this.isBusiness = isBusiness;
        }
      }
}
/**
 * Overriding constructor dilakukan sesimpel kita mendefinisikan kembali 
 * method constructor() pada sebuah subclass. Selain itu, method constructor 
 * didefinisikan dengan perubahan sesuai kebutuhan kita, misalnya menambahkan 
 * menambahkan properti dan argumen isBusiness. Satu hal yang penting 
 * dalam penerapan constructor overriding adalah jangan sampai lupa untuk 
 * memanggil method super(). 

Memanggil method super() artinya memanggil constructor superclass, yaitu 
MailService. Dengan begitu, kita tidak perlu mendefinisikan 
dan menetapkan nilai properti umum satu per satu. Meskipun dalam 
contoh kali ini properti yang bersifat umum hanya ada satu, 
yaitu sender, tetapi jika jumlah propertinya bertambah, kita tidak perlu 
menulis kode yang berulang pada setiap subclass.

Pada sintaks class, pemanggilan super() tidak boleh 
terlewatkan karena akan menyebabkan ReferenceError.
 */
{
    class MailService {
        constructor(sender) {
          this.sender = sender;
        }
      }
       
      class WhatsAppService extends MailService {
        constructor(sender, isBusiness) {
          this.sender = sender;
          this.isBusiness = isBusiness;
        }
      }
       
      const whatsapp = new WhatsAppService('+6281234567890', true);
       
      /**
      * Output:
      * ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
      */
}
/**
 * Konsep overriding juga bisa diterapkan pada method class. 
 * Method overriding biasanya dilakukan ketika kita ingin 
 * mengubah implementasi method warisan superclass. Contohnya, pada class 
 * MailService terdapat method send() yang sudah didefinisikan 
 * implementasinya. Namun, jika pada subclass WhatsAppService kita 
 * membutuhkan implementasi yang berbeda, kita bisa override method send().

Cara override method pada subclass mirip seperti 
override constructor, tetapi kita tidak perlu memanggil 
method super di dalamnya.
 */
{
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
          console.log(`${this.sender} sent ${message} to ${receiver} via WhatsApp`);
        }
      }
       
       
      const mailService = new MailService('someSender');
      const whatsappService = new WhatsAppService('+6281234567890', true);
       
      mailService.sendMessage('Hai, apa kabar?', 'someReceiver');
      whatsappService.sendMessage('Hai, apa kabar?', '+6289876543210');
       
       
      /**
      * Output:
      * someSender sent Hai, apa kabar? to someReceiver
      * +6281234567890 sent Hai, apa kabar? to +6289876543210 via WhatsApp
      */
}
/**
 * Jika dibutuhkan, kita juga bisa memanggil method sendMessage() 
 * dari superclass melalui keyword super.sendMessage()
 */
{
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
}