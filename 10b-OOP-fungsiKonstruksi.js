//kebanyakan paradigma OOP pada bahasa class based language
//-seperti java, c++ dan c#. 
//JS bukanlah bahasa berbasis class setidaknya sblm adanya ES6.
//namun beberapa konsep OOP dr bahasa lain dapat diterapkan di JS

//JS bukan class based language tetapi prototype based language
//tetapi konsep class bs dipakai pada JS yg sifatny prototype.
//cara membuat blue print (class) dg constructor funct.
function mobil(merek, warna, maxSpeed){ //ini adalah blue print
    this.merek=merek;
    this.warna=warna;
    this.maxSpeed=maxSpeed;
}
mobil.prototype.drive= function(){ //prototype adalah fitur pada JS es6 utk mewariskan sifat
    console.log(`${this.merek} ${this.warna} sedang jalan`);
}
mobil.prototype.reverse= function(){
    console.log(`{this.merek} ${this.warna} mundur bosku` );
}
mobil.prototype.belok=function(){
    console.log(`${this.merek} ${this.warna} belok cuiii ..`)
}

//membuat objek mobil dg constructor func. mobil
const mobilToyota= new mobil("toyota", "silver",200); // operator new utk membuat objek baru dr blueprint
console.log(mobilToyota.warna); //akses warna toyota
mobilToyota.drive(); //akses metod drive 

//catatan:
//penamaan fungsi seperti function mobil(merk, warna,maxSpeed){
// this.merek=merek;
// this.warna=warna;
// this.maxSpeed=maxSpeed;    
//}
// harusnya menjadi function Mobil (huruf pertama Kapital)
//hal ini utk membedakan fungsi biasa dengan fungsi konstruksi
//fungsi konstruksi dapat memanfaatkan keyword this yg bernilai 
// -dirinya sendiri
// fungsi konstruksi memiliki internal properti atau fitur yaitu prototype.
// digunakan memang khusus utk mewarisi sifat
// keyword new digunakan utk menginisiasi properti kedalam blue print
//catatan:
// fungsi konstruksi hanya dapat digunakan dalam bentuk reguler funct
// -tdk bs menggunakan arrow funct.