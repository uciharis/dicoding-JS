// --- Mengubah Catatan ---

// kriteria ketiga adalah webserver dapat mengubah catatan yang tersimpan
// ketika terjadi perubahan, clien akan kirim request ke route '/notes/{id} dengan metode 'PUT'
// dan membawa objek catatan terbaru ke body request

// kita buat konfig routenya terlebih dulu pada berkas routes.js
// lalu membuat route dengan path '/notes/{id}' dengan metod 'PUT' dan handler dg fungsi kosong

/*
{
    method: 'PUT',
    path: '/notes/{id}',
    handler: ()=> {},
},
 */

// lalu buat fungsi handler-nya pada berkas handler.js dengan nama fungsi editNoteByIdHandler

/*
const editNotesByIdHandler = (request,h) => {

};
*/

// catatan yang diubah aan diterapkan sesuai id yang digunakan pada route parameter
// jadi kita perlu dapatkan nilai id-nya

/*
const editNoteByIdHandler = (request, h) => {
    const {id} = request.params;
};
*/

// setelah itu, kita daptkan data notes ternaru yang dikirimkan oleh client melalui body req

/*
const editNoteByIdHandler = (request,h) => {
    const {id} = request.params;

    const {title, tags, body} = request.payload;
}
*/

// lalu kita perbarui nilai dari properti updatedAt menggunakan new Date().toISOString()

/*

const editNotedByIdHandler = (request,h) => {
    const {id} = request.params;

    const {title, tags, body} = request.payload;
    const updatedAt = new Date().toISOString()
}
 */

// data terbaru sudah siap, saatnya ubah catatan lama dg data terbaru
// kita akan memanfaatkan indexing array
// pertama, dapatkan dulu index array pada objek catatan sesuai id yang ditentukan. gunakan method array findIndex()

/*
const editNoteByIdHandler = (request, h)=> {
    const {id} = request.params;

    const {title, tags, body} = request.payload;
    const updateAt = new Date().toISOString();

    const index = notes.findIndex((note) => note.id ===id);
};

 */

// bila note dengan id yang dicari tidak ditemukan, maka index akan bernilai array index dari objek catatan
// yang dicari
// namun bila tidak ditemukan, maka index bernilai -1
// jadi kita bs menentukan gagal atau tidaknya permintaan dari nilai index menggunakan if else

/*
const editNoteByIdHandler = (request, h)=> {
    const {id} = request.params;

    const {title, tags, body} = request.payload;
    const updateAt = new Date().toISOString();

    const index = notes.findIndex((note) => note.id ===id);

    if (index!== -1) {
        notes[index] = {
            ...notes[index],
            title,
            tags,
            body,
            updatedAt,
        };

        const response = h.response ({
            status: 'success',
            message: ' catatan berhasil diperbarui',
        });
        response.code(200);
        return response;
    }
    const response = h.response({
        status: 'fail',
        message: 'gagal memperbarui catatan, id tidak ditemukan',
    });
    response.code(404);
    return response;
};
*/
// nb : spread operator digunakan utk mempertahankan nilai notes[index], cek referensi berikut:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

// fungsi handler selesai, jangan lupa diekspor

/*
const editNoteByIdHandler = (request, h) => {
  const { id } = request.params;
 
  const { title, tags, body } = request.payload;
  const updatedAt = new Date().toISOString();
 
  const index = notes.findIndex((note) => note.id === id);
 
  if (index !== -1) {
    notes[index] = {
      ...notes[index],
      title,
      tags,
      body,
      updatedAt,
    };
 
    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil diperbarui',
    });
    response.code(200);
    return response;
  }
 
  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui catatan. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = {
    addNoteHandler,
    getAllNotesHandler,
    GetNoteByIdHandler,
    editNoteByIdHandler,
};
*/

// sekarang gunakan fungsinya pada route

/*
{
    method : 'PUT',
path: '/notes/{id}',
handler: editNoteByIdHandler,
},
*/

// lalu import fungsinya

/*
const {

    addNoteHandler,
    getAllNotesHandler,
    getNoteByIdHandler,
    editNoteByIdHandler,
} = require('./handler');
*/