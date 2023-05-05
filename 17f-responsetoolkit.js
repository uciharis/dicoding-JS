// --- response toolkit ---
// fungsi handler pada Hapi memiliki 2 parameter yaitu request dan h
// request parameter merupakan objek yang menampung detail permintaan client, seperti path dan query parameter, payload, header
// berikut penjelasan lbh lengkap fungsi dari parameter request pada link berikut : https://hapi.dev/api/?v=20.1.0#request-properties

// parameter ke-2 yaitu h ( inisial dari hapi)
// parameter ini merupakan response toolkit yg berfungsi sbg objek yang menampung banyak sekali metod
// yg digunakan utk menanggapi sebuah permintaan clien. 
// objek ini serupa dg objek response pada request handler ketika menggunakan nodejs native

// jika hanya ingin mengembalikan nilai pada sebuah request yang datang, Hapi dapat langsung return nilai dala bentuk teks, html, json, steam atau bahkan promise
/**
 * server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return `Homepage`;
    },
});
 */

// jika kita dapat mengembalikan request secara singkat, lalu apa fungsi dr h?

// pada kasus sederhana diatas, memang lbh baik langsung mengembalikan dengan nilai secara eksplisit.
// dengan cara tsb, status response selalu bernilai 200 OK.
// ketika perlu mengubah nilai statust respons, disinilah kita membutuhkan parameter h
/**
 * server.route({
    method: 'POST',
    path: '/user',
    handler: (request, h) => {
        return h.response('created').code(201);
    },
});
 */

// fungsi handler harus selalu mengembalikan nilai, bila menggunakan h ketika menangani request,
// maka kembalikan dg nilai h.response() seperti kode di atas

// parameter h tidak hanya berfungsi utk menetapkan status kode respons saja. melali h, anda juga bisa menetapkan header response, content type, content lenght dan banyak lagi
/**
 * // Detailed notation
const handler = (request, h) => {
    const response = h.response('success');
    response.type('text/plain');
    response.header('X-Custom', 'some-value');
    return response;
};
 
// Chained notation
const handler = (request, h) => {
    return h.response('success')
        .type('text/plain')
        .header('X-Custom', 'some-value');
};
 */

// untuk mendalami tentang respons toolkit, bisa membaca disini : https://hapi.dev/api/?v=20.1.0#response-toolkit