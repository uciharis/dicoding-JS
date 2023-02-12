//mari kita lihat implementasi try-catch pada kasus yang lebih umum
let json = '{'nama': 'yoda', 'umur':20}';
try{
    let user = JSON.parse(json);
    console.log(user.nama);
    console.log(user.umur);
} catch (error){
    console.log(error.name);
    console.log(error.message);
} // fungsi JSON.parse melakukan parse atau konversi dari variabel json (string)
// ke sebuah objek. skenario diatas banyak ditemui ketika melakukan request ke API.
// jika json string tidak sesuai dg format objek JS ?

let json = '{ bad json }';
 
try {
    let user = JSON.parse(json);
 
    console.log(user.nama);
    console.log(user.umur);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
} // output : SyntaxError Unexpected token b in JSON at position 2
// json tidak sesuai format, JSON.parse akan menimbulkan eror dan ditangkap
// oleh catch dan kode dieksekusi

// bagaimana jika json seperti ini ?
let json = '{ "umur": 20 }';
 
try {
    let user = JSON.parse(json);
 
    console.log(user.name); // undefined
    console.log(user.age);  // 20
} catch (error) {
    console.log(error.name);
    console.log(error.message);
} // secara sintaksis, kode tidak eror sehingga blok catch akan diabaikan
// namun tidak ada properti name pada json sehingga menimbulkan eror
// utk mengatasainya kita menggunakan throw.
// operator throw akan melemparkan eror pada program shg dieksekusi masuk ke blok catch
//berikut implementasinya
let json = '{'umur': 20}';
try {
    let user = JSON.parse(json);
    if (!user.nama) { // jika user.name tidak ada pada json
        throw new SyntaxError("'nama' is required");
    }
    console.log(user.nama); //undefined
    console.log(user.umur);
} catch {
    console.log(`JSON Error: ${error.message}`);
} // output : JSON Error : 'nama' is required

// skarang kita telah mengetahui ada banyak kemungkinan eror yang bs muncul dalam sebuah program
// tentunya sangat membantu kita memberikan pesan yang sesuai kepada pengguna atau diri sendiri

// anggaplah json sudah sesuai tetapi ada eror lain yang terjai misal karna variabel belum terdefinisi
let json = '{"name" : "yodaa", "umur" : 21}';
try {
    let user = JSON.parse(json);
    if (!user.name) {
        throw new SyntaxError(" 'name' is required");
    }
    errorCode;
    console.log(user.name); //Yoda
    console.log(user.age); //21
} catch (error){
    console.log(`Json Error : ${error.message}`);
}// output : JSON Error : errorCode is not defined

// error behasil ditangani, tetapi konsol tetap menampilkan pesan diatas,
// lalu bagaimana menampilkan pesan error yang sesuai?
// gunakan if statement
try {
    // ...
} catch (error) {
    if (error instanceof SyntaxError) { //dengan instanceOf kita bs mendapatkan tipe error yg terjadi
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}
// sehingga kita bs membuat percabangan bagaimana cara menangani error nya