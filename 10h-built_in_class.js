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

    //lihat betapa mudahnya kita mendapatkan data waktu di JS dengan menggunakan class bawaan Date.
    // masih banyak fitur dari class Date dengan mencari keyword berikut " Date() constructor"
    // built-in class lain yg menjadi favorit adalah Array. 
    // dengan class ini kita bis membuat struktur data dalam bentuk array.
    