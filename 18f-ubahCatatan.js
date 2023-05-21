// --- Ubah Catatan

// kriteria ketiga adalah web server harus bisa ubah catatan yang disimpan, baik perubahan pada title, tags atau body
// client akan mengirimkan permintaan ke route '/notes/{id}' dengan metod 'PUT' dan membawa objek catatan terbaru pada body req

// kita awali dg membuat konfig route-nya. silahkan buka kembali berkas routes.js lalu buat route dg path '/notes/{id}' dengan metod 'PUT' dan
// handler dengan nilai fungsi kosong

/*
{
    method : 'PUT',
    path: '/notes/{id}',
    handler: ()=> {},
},
*/

// yuk kita buat fungsi handler pada berkas handler.js dg nama fungsi editNoteByIdHandler

/*
const editNoteByIdHandler = (request, h) => {

};
*/

