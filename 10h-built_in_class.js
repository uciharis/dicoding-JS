/**
 *  --- Built-in class
 * di JS sudah terdapat built-in class seperti Date, Object, Array,Math dan String.
 * class bawaan dapat dimanfaatkan berbagai hal dari manipulasi data, operasi natenatika
 * manipulasi objek dan array.
 * 
 * misalkan kita pakai class Date. Date digunakan utk utilitas tanggal dan waktu.
 * Class sangat membantu ketika program yang kita buat memanipulasi tanggal dan waktu.
 * contoh penggunaan class Date :
 */

    const date = new Date();
    const timeJakarta = date.toLocaleString('id-Id', {
        timeZone: 'Asia/Jakarta',
    });

    const timeTokyo = date.toLocaleString('ja-JP',{
        timeZone: 'Asia/Tokyo',
    });
    
    const timeMakassar =date.toLocaleString('id-ID', {
        timeZone: "Asia/Makassar",
    });
    console.log(`waktu jakarta: ${timeJakarta}, waktu Tokyo ${timeTokyo}, waktu Makassar${timeMakassar}`);
console.log( " ----------");
    //lihat betapa mudahnya kita mendapatkan data waktu di JS dengan menggunakan class bawaan Date.
    // masih banyak fitur dari class Date dengan mencari keyword berikut " Date() constructor"
    // built-in class lain yg menjadi favorit adalah Array. 
    // dengan class ini kita bis membuat struktur data dalam bentuk array.
    const array1 = new Array('a', 'b', 'c', 'a', 'b', 'c');
    console.log(array1); // output : ['a', 'b', 'c', 'a', 'b', 'c']
    // membuat sturktur data dalam bentuk array
    // sekilas tidak ada yang istimewa karena kita bs membuat array dg cara biasa
    // namun dg class Array kita bs menerapkan konsep pewarisan utk membuat subclass baru yang dapat dimodifikasi

    // misal kita membuat array tetapi dengan nilai elemen yg unik memakai class UniqueArray yang mewarisi
    // class Array dg cara sbb:

    class UniqueArray extends Array {
        constructor ( ...args) {
            // make sure args is unique before passing it
            const uniqueValue = args.filter((item,index)=> args.indexOf(item)=== index);
            super(...uniqueValue);
        }
        add(item) {
            // make sure only unique item is added
            if(!this.includes(item)){
                super.push(item);
            }
        }
    }
    const someArray = new UniqueArray('a', 'b', 'c', 'a', 'b', 'c');
    console.log(someArray);
    someArray.add('d');
    console.log(someArray);
    someArray.add('a');
    console.log(someArray);

    // dengan kemampuan OOP kita bs extends kemampuan JS lebih dr standar yang ada.
    // disamping Date dan Array, terdapat banyak class bawaan JS yang lainnya seperti
    /**
     * Date
     * Object
     * Math
     * String
     * Number
     * dll
     */