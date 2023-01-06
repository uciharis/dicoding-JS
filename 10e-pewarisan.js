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
//terus berkembang shg duplikasi tsb semakin sering