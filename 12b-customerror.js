/** --- custom error ---
 * setelah mengembangkan suatu aplikasi, akan ada banyak kemungkinan
 * munculnya error. seringkali kita membutuhkan kelas eror sendiri utk 
 * menunjukkan kesalahan yang lebih spesifik dan tidak tersedia dalam
 * kelas error bawaan JS.
 */
// mari kita lihat materi error sebelumnya
/** --- kode error sebelumnya ---
 * 
 * let json = '{"age":30}';
 * try {
 * let user = JSON.parse(json);
 * if (!username) {
 * throw new SyntaxError(" 'name' is required.");
 * }
 * console.log(user.name);
 * console.log(user.age);
 * } catch (error){
 * if (error instanceof SyntaxError){
 * console.log(`Json Error: ${error.message}');
 * } else if (error instanceof ReferenceError){
 * console.log(error.message);
 * } else {
 * console.log(error.stack);
 * }
 * }
 */
// awalnya, JSON.parse akan mengkonversi data string menjadi objek.
// apabila format string tidak sesuai, maka funct tsb akan melemparkan SyntaxError
// meskipun format atau sintax json string tidak sesuai, tetap ada kemungkinan data di dalamnya tdk lengkap
// saat ini kita masih menggunakan SyntaxError untuk menandai error akibat data yang tidak lengkap,
// padahal secara sintax , tidak ada masalah dari variabel jsonnya.
// tentunya akan lebih baik jika kita punya error yang lebih spesifik
// utk itu kita bs membuat kelas eror sendiri dengan nama dan pesan yang lebih sesuai
// kelas ini merupakan turunan dari kelas error yang sudah ada.
// sebagai contoh kita akan mengecek validasi data dari json, kita bs membuat kelas error seperti ini
{class ValidationError extends Error {
    constructor (message){
        super(message);
        this.name = "ValidationError";
    }
}}
// kelas ValidationError memiliki parameter constructor berupa message yang berisi pesan detail terkait error
//coba kita terapkan ke kode diatas sebelumnya
class ValidationError extends Error {
    constructor (message){
        super(message);
        this.name = "validationError";
    }
}
let json = '{"age": 30}';
try {
    let user = JSON.parse(json);
    if (!user.name) {
        throw new ValidationError("'name' is required");
    }
    if (!user.age){
        throw new ValidationError("'age' is required");
    }
    console.log(user.name);
    console.log(user.age);
} catch (error) {
    if (error instanceof SyntaxError){
        console.log(`JSON Syntax Error : ${error.message}`);
    } else if (error instanceof ValidationError){
        console.log(`invalid data: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
} // output : invalid data: 'name is required

// sekarang kode utk menangani error menjadi lbh baik
// penggunaan instanceof akan memberikan hasil error yanglebih detail dan sesuai dg
// error yang terjadi