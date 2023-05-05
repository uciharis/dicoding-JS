/** -- body request--
 * 
 * ketika client melakukan permintaan dengan metode POST dan PUT, biasanya permintaan tsb
 * memiliki sebuah data yang disimpan pada body request.
 * data pada body bisa berupa format teks, JSON, berkas gambar atau format lain.
 * data tsb nantinya akan digunakan oleh server utk diproses di database atau disimpan dalam bentuk objek utuh
 * 
 * ketahuilah bahwa http.clientRequest merupakan turunan dari readable stream yang utk mendapatkan data body
 * akan sedikit sulit dibandingkan dengan mendapatkan data header
 * data di body didapatkan dengan teknik stream, seperti yang sudah  kita ketahui, teknik ini memanfaatkan EventEmmiter utk mengirimkan bagian-bagian datanya
 * dalam kasus http.clientRequest event data dan end lah yang digunakan untuk mendapatkan data body.
 * 
 * berikut adlah contoh bagaimana mendapatkann data body:
 * 
 * -- ini kode
 * 
 * const requestListener = (request, response)=>{
 * let body = [];
 * request.on('data', (chunk)=> {
 * body.push(chunk);
 * });
 * request.on('end', ()=>{
 * body = Buffer.concat(body).toString();
 * });
 * };
 * 
 * penjelasan kodenya sbb:
 * 
 * 1. kita deklare var body dan isi nilai dg array kosong utk nampung buffer pada stream
 * 2. ketika event data terjadi pada request, kita isi array body dg chunk yg dibawa callback func pada event tsb
 * 3. ketika proses stream berakhir, event end akan dibangkitkan, disinilah kita ubah var body yg sblmnya
 *  menampung buffer menjadi data sebenarnya dalam bentuk string melalui perintah Buffer.concat(body).toString()
 */

// latihan mendapatkan body request
// kita akan mendapatkan data body request ketika client mengirim request dg methode POST
// buatlah web server merespon permintaan method POST dengan menampilkan sapaan dan nama berdasarkan data body yang dikirim oleh client
// bila client mengirimkan nama "dicoding", maka respon akan menampilkan "halo dicoding"
// client akan mengirimkan data nama tsb menggunakan format JSON
// {"name": "dicoding"}
// namun sebelum itu agar latihan lebih fokus terhadap bagaimana mendapatkan data pada body,
// kita hapus logika metod yang sebenarnya sebelum kita butuhkan seperti PUT DELETE.
// masuk pada projek nodejs-web-server lalu isikan berikut ke server.js
/**-- ini kode
 * 
 * const http = require('http');
 
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
 
    const { method } = request;
 
    if(method === 'GET') {
        response.end('<h1>Hello!</h1>');
    }
 
    if(method === 'POST') {
        let body=[];
        request.on('data', (chunck)=>{
            body.push(chunk);
        });
        request.on('end',()=>{
            body=Buffer.concat(body).toString();
            response.end(`<h1>Hai ${body}!</h1>`);
    }
};
 
const server = http.createServer(requestListener);
 
const port = 5000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});
 * 
 */

// perhatikan kode diatas. kita memindahkan proses respons di dalam callback event end
// hal ini diperlukan karena data body siap dikonsumsi hanya ketika event end telah dibangkitkan.
// dalam arti lain, server tidak akan mengirimkan respon apabila proses stream belum selesai
// simpan perubahan pada berkas server.js, jalankan ulang server dengan perintah npm run start
// lalukan permintaan ke server dengan menggunakan metod POST melalui cURL sperti ini:

// curl -X POST -H "Content-Type:application/json" http://localhost:5000 -d "{\"name\":\"dicoding\"}"

// server akan merespon dg :
//<h1>hai, {"name":"dicoding"!}</h1>

// ini masih bukan hasil yang kita harapkan. body masih bernilai data string JSON
// data ini perlu kita olah lagi agar mendapatkan nilai name yang sebenarnya.
// gunakan JSON.parse() untuk mengubah JSON string menjadi javascript objek.
// sesuaikan kembali kode pada blok POST menjadi seperti ini

/**
 * const http = require('http');
 
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
 
    const { method } = request;
 
    if(method === 'GET') {
        response.end('<h1>Hello!</h1>');
    }
 
    if(method === 'POST') {
        let body=[];
        request.on('data', (chunck)=>{
            body.push(chunk);
        });
        request.on('end',()=>{
            body=Buffer.concat(body).toString();
            const {name}= JSON.parse(body)
            response.end(`<h1>Hai ${name}!</h1>`);
    }
};
 
const server = http.createServer(requestListener);
 
const port = 5000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});
 */

// simpan kembali lalu jalankan ulang npm run start
// lalukan request POST lagi
// curl -X POST -H "Content-Type: application/json" http://localhost:5000 -d "{\"name\": \"Dicoding\"}"
// output : <h1>hai, dicoding!</h1>