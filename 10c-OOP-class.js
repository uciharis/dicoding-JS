//ES6 menawarkan cara membuat fungsi konstruktor dg keyword class
//hal ini membuat OOP d JS mirip dg bahasa lain yg OOP nya berbasis class
//contoh:
class Mobil { //menggunakan class
    constructor(merek, warna, maxSpeed){ //menggunakan constructor
        this.merek=merek;
        this.warna=warna;
        this.maxSpeed=maxSpeed;
    }
    drive(){
        console.log(`${this.merek} ${this.warna} sedang otw coi ..`);
    }
    reverse(){
        console.log(`${this.merek} ${this.warna} mundur gan ..`);
    }
    belok(){
        console.log(`${this.merek} ${this.warna} belok dong ach..`);
    }
}

//membuat objek baru melalui blueprint class diatas
const mobilToyota= new Mobil("Toyota", "ireng", 120);
const mobilHonda= new Mobil("Honda", "putih", 130);
console.log(mobilToyota, mobilHonda);
mobilHonda.belok();
//sekarang kita tahu bahwa membuat blue print dapat dg 2 cara yaitu
// -dengan fungsi konstruksi dan class.
//enak pake class coiiiiii hehe