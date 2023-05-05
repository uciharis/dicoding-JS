// --- Query Parameters ---

// selain dg path param, ada teknik lain yg sering digunakan utk mengirimkan data melalui url, yakni dg query param
// teknik ini umum digunakan pada permintaan yang membutuhkan kueri dari client, contoh seperti pencarian dan filter data

// data yang dikirim melalui query memiliki format key=value, contohnya :
// localhost:5000?name=harry&location=bali

// contoh diatas memiliki 2 query param yang pertama adalah name=harry dan location=bali
// di Hapi anda bs mendapatkan nilai dr query Param melalui request.query

/**
 * server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        const { name, location } = request.query;
        return `Hello, ${name} from ${location}`;
    },
 });
 */

 // --Latihan Query param
 // kita akan menambahkan dukungan bahasa terhadap path /hello/{name} yang sudah dibuat.
 // bila path tsb memiliki query lang dengan nilai id, maka server akan menanggapi dengan pesan "hai,{name}!"
 // selain itu, biarkan pesan tetap sama seperti latihan sebelumnya
 // buka router.js dan pada fungsi handler GET /hello/{name} dapatkan nilai query lang melalui properti request.query
 /**
  * {
    method: 'GET',
    path: '/hello/{name?}',
    handler: (request, h) => {
        const { name = "stranger" } = request.params;
        const { lang } = request.query;
        
        return `Hello, ${name}!`;
    },
},
  */

// lalu sesuaikan pesan kembalian handler berdasarkan evaluasi nilai lang sbb:
/**
 * {
    method: 'GET',
    path: '/hello/{name?}',
    handler: (request, h) => {
        const { name = "stranger" } = request.params;
        const { lang } = request.query;
 
        if(lang === 'id') {
            return `Hai, ${name}!`;
        }
        return `Hello, ${name}!`;
    },
},
 * 
 */

// simpan perubahan pada berkas route.js lalu jalankan server, lalu lakukan request seperti di bawah ini:

// curl -X GET http://localhost:5000/hello/dicoding?lang=id
// output: Hai, dicoding!
// curl -X GET http://localhost:5000/hello/dicoding
// output: Hello, dicoding!