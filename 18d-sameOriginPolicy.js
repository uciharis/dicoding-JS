// --- Same-Origin Policy ---

// server dapat tampung sebuah web, aplikasi, gambar, video dll
// ketika server menampung wbm mungkin beberapa dta gambar, video, stylesheet biasanya diambil dari
// alamat server lain atau origin berbeda
// contoh stylesheet yang diambil dari Bootstrap CDN atau gambar dari server Unsplash
// hal ini wajar dan dapat dilakukan

// tahukah anda bahwa tidak semua data bisa diambil dari origin yang berbeda ?
// jika web request sesuatu dg teknik di luar originnya, maka permintaan tsb akan ditolak, karna kebijaka same-origin
// kasus ini terjadi pada aplikasi dan web server yang kita buat

// origin terdiri dari 3 hal : protokol, host dan port number
// origin dari aplikasi client kita adalah :
// http://notesapp-v1.dicodingacademy.com

// - http:// adalah protokol
// - notesapp-v1.dicodingacademy.com adalah host
// - :80(implisit) adalah port

// selama aplikasi client akses data dari origin yang sama, hal ini dpat dilakukan.
// bila ada salah satu saja yang berbeda misal port 8001, maka permintaan itu ditolak

// origin web server kita saat ni adalah http://localhost:5000/

// solusi utk menangani hal tsb adalah dengan mekanisme Cross-Origin Resource sharing (CORS)

// pada web server, kita hanya perlu memberikan nilai header "Access-Control-Allow-Origin" dengan nilai origin luar yang akan mengkonsumsi datanya

/*
  const response = h.response({error: false, message: 'Catatan berhasil ditambahkan});

  response.header('Access-Control-Allow-Origin', 'http://notepad-v1.dicodingacademy.com');

  return response;
 */

  // atau anda bisa menggunakan tanda * pada nilai origin untuk memperbolehkan data dikonsumsi oleh seluruh origin

  /*
  const response =h.response({error: false, message:'Catatan berhasil ditambahkan'});
  response.header('Access-Control-Allow-Origin','*');

  return response
   */

  // penerapan ini akan jauh lebih mudah menggunakan Hapi. Hapi dapat menetapkan CORS secara spesifik ke route yang dituju
  // dengan menambahkan properti option.cors di konfigurasi route. contohnya sbb:

  /*
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
    options: {
        cors: {
            origin: ['*'],
        },
    },
  },
   */

  // bila ingin cakupan yang lebih luas CORS diaktifkan di seluruh route yang ada di server, anda bisa tetapkan CORS pada konfig ketika henda membuat
  // server dengan menambahkan properti routes.cors seperti berikut:

  /*
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
        cors: {
            origin : ['*'],
        },
    },
  });
  */

  // simpan perubahan pada berkas server.js
  // pastikan server masih berjalan
  