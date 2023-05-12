// --- Menampilkan Catatan ---

// pertama kita buat konfig route terlebih dahulu pada berkas routes.js
// tetapkan path dengan nilai '/notes' dan metod nilai 'GET'. untuk handler kita berikan fungsi kosong dulu

/*
const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },
    {
        method: 'GET',
        path: '/notes',
        handler: ()=> {},
    },
];

 */

// lalu kita buat fungsi handler nya pada berkas handler.js, dengan nama getAllNotesHandler dan kembalikan data dengan nilai notes di dalamnya
/*
const getAllNotesHandler = ()=> ({
    status: 'success',
    data: {
        notes,
    },
});

 */

// lakukan eksport nilai getAllNotesHandler agar dapat digunakan di routes.js

/*
const getAllNotesHandler = ()=> ({
    status: 'success',
    data: {
        notes,
    },
});

module.exports = {addNoteHandler, getAllNotesHandler};
 */

// kembali ke berkas routes.js gunakan fungsi tsb pada konfig route

/*
{
    method : 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
},
*/

// jangan lupa diimport

// const {addNoteHandler, getAllNotesHandler} = require('./handler')

// kembali ke berkas routes.js lalu tambahkan route dengan path '/notes/{id}, dan metod 'GET'
// utk handler isi dengan fungsi kosong dulu

/*
const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },
    {
        method: 'GET',
        path: '/notes/{id},
        handler: ()=> {},
    },
];
*/
// lanjut kita buat fungsi handler, di file handler.js lalu buat fungsi dengan nama getNoteByIdHandler

// di dalam fungsi ini kita harus mengembalikan objek catatan secara spesifik berdasarkan id yang digunakan oleh path parameter.
// pertama kita buatkan dulu nilai id dari request.params

/*
const getNoteByIdHandler = (request, h)=> {
    const {id} = request.params;

    const note = notes.filter((n) => n.id === id[0]);
};
*/

 // kita kembalikan fungsi handler dengan data beserta objek note di dalamnya.
 // namun sebelum itu, pastikan dulu objek, note tidak bernilai undefined
 // kembalikan respons gagal

 /*
 const getNoteByIdHandler = (request, h) => {
    const {id} = request.params;

    const note = notes.filter((n) => n.id === id)[0];

    if (note !== undefined){
        return {
            status : 'success',
            data: {
                note,
            },
        };
    }

    const response = h.response({
        status: 'fail',
        message: 'catatan tidak ditemukan',
    });
    response.code(404);
    return response;
 };
 */

 // fungsi handler selese

 // janlup ekspor fungsi nya

 /*
 const getNoteByIdHandler = (request, h) => {
  const { id } = request.params;
 
  const note = notes.filter((n) => n.id === id)[0];
 
 if (note !== undefined) {
    return {
      status: 'success',
      data: {
        note,
      },
    };
  }
 
  const response = h.response({
    status: 'fail',
    message: 'Catatan tidak ditemukan',
  });
  response.code(404);
  return response;
};
 
module.exports = { addNoteHandler, getAllNotesHandler, getNoteByIdHandler };
 */

// lanjut gunakan fungsi tsb pada konfig route d berkas routes.js

/*
{
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
}
*/

/*
const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler} = require('./handler');

*/

// 