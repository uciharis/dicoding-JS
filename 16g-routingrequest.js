/** --Routing request--
 * 
 * ketika menangani rekuest, hal yang perlu kita acek selain metod aalah url yang dituju dari rekuest
 * saat kita akses dicoding.com dan dicoding.com/about tentu hasilnya akn berbeda
 * 
 * rekuest ke dicoding.com akan menampilkan homepage
 * sedangkan dicoding.com/about akan menampilkan halaman tentang dicoding
 * teknik ini dinamakan routing
 * routung merupakan istilah dalam menentukan respon server bedarsarkan path atau url yang diminta oleh client
 * 
 * dalam http.clientRequest utk mendapatkan nilai url sangat mudah
 * 
 * -- ini kode
 * 
 * const requestListener = (request, response)=>{
 * const{url}=request;
 * };
 * 
 * 
 * properti url akan mengembalikan nilai path secara lengkap tanpa host dan port yang digunakan server
 * contoh, ketika client meminta alamat http://localhost:5000/about atau http://localhost:5000/about/ maka url
 * akan bernilai '/about'
 * bila meminta alamat http://localhost:5000 atau http://localhost:5000/ maka url akan bernilai 'l'
 * 
 * dengan mendapatkan nilai url, kita dapat merespons client sesuai dengan path yang diminta
 * 
 * -- ini kode
 * 
 * const requestListener = (request, response)=> {
 * const {url}= request;
 * if(url ==='/' {
 * // curl http://localhost:5000/
 * 
 * }
 * if(url==='/about'){
 * // curl http://localhost:5000/about
 * }
 * 
 * // curl  http://localhost:5000/<any>
 * };
 * 
 * atau mengkombinasikan evaluasi dg method request agar respon lebih spesifik lagi
 * 
 * -- ini kode
 * 
 * const requestListener = (request, response) => {
    const { url, method } = request;
 
    if(url === '/') {
 
        if(method === 'GET') {
            // curl -X GET http://localhost:5000/
        }
 
        // curl -X <any> http://localhost:5000/
    }
 
    if(url === '/about') {
 
        if(method === 'GET') {
            // curl -X GET http://localhost:5000/about
        }
 
        if(method === 'POST') {
            // curl -X POST http://localhost:5000/about
        }
 
        // curl -X <any> http://localhost:5000/about
    }
 
    // curl -X <any> http://localhost:5000/<any>
};
 */

// latihan routing request