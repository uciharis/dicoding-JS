// --- Hapus Catatan ---

// kriteria terakhir adalah menghapus catatan

// buka berkas routes.js
// tambahkan konfig route dengan nilai path '/notes/{id}'
// metod 'DELETE' dan handler dengan fungsi kosong seperti ini:

/*
{
    method: 'DELETE',
    path: '/notes/{id}',
    handler: ()=> {}
},
*/

// selanjutnya buat fungsi handler baru dengan nama deleteNoteByIdHandler pada handler.js

/*
const deleteNoteByIdHandler = (request, h) => {

};
*/

// seteah itu kita tulis logikanya
// pertama, dapatkan dulu id yang dikirim ke path parameter

/*
const deleteNoteByIdHandler = (request. h) => {
    const {id} = request.params;
};
*/

// selanjutnya dapatkan index dari objek catatan sesuai dg id yang didapat

/* const deleteNoteByIdHandler = (requst, h) => {
  const {id}  = request.params;
};
*/

// selanjutnya kita dapatkan index dri objek catatan sesuai dg id yang didapat

/*

const deletNoteByIdHandler = (request, h) => {
    const {id} = request.params;

    const index = notes.findIndex((note)=> note.id === id);
};
 */

// lakikan pengecekan thd nilai index
// pastikan nilainya tidak -1 bila hendak hapus catatannya
// utk hapus data pada array berdasarkan index, gunakan method array splice()

/*

const deleteNoteByIdHandler = (request. h) => {
    const {id} = request.params;

    const index = notes.findIndex((note)=> note.id === id);

    if (index!== -1){
        notes.splice(index, 1);
        const response = h.response({
            status: 'success',
            message: 'catatan berhasi dihapus',
        });
        response.code(200);
        return response;
    }
};
*/

// bila index bernilai -1 maka kembalikan handler dengan respons nilai gagal

/*
const deleteNoteByIdHandler = (request. h) => {
    const {id} = request.params;

    const index = notes.findIndex((note)=> note.id === id);

    if (index!== -1){
        notes.splice(index, 1);
        const response = h.response({
            status: 'success',
            message: 'catatan berhasi dihapus',
        });
        response.code(200);
        return response;
    }
const response = h.response({
    status: 'fail',
    message: 'Catatan gagal dihapus, id tidak ditemukan',
});
response.code(404);
return response;
};
*/

// janlup utk ekspor fungsi handler

/*
const deleteNoteByIdHandler = (request. h) => {
    const {id} = request.params;

    const index = notes.findIndex((note)=> note.id === id);

    if (index!== -1){
        notes.splice(index, 1);
        const response = h.response({
            status: 'success',
            message: 'catatan berhasi dihapus',
        });
        response.code(200);
        return response;
    }
const response = h.response({
    status: 'fail',
    message: 'Catatan gagal dihapus, id tidak ditemukan',
});
response.code(404);
return response;
};
module.exports = {
    addNoteHandler,
    getAllNotesHandler,
    getNoteByIdHandler,
    editNoteByIdHandler,
    deletNoteByIdHandler,
};
*/

// gunakan fungsi handler pada konfig route. buka berkas routes.js lalu tambahkan fungsi handlernya
/*
{
  method : 'DELETE',
  path: '/notes/{id}',
  handler: deleteNoteByIdHandler,  
},
*/

// janlup utk impor fungsinya :

/*
const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
} = require('./handler');
*/