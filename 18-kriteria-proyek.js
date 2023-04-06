// --- KRITERIA PROYEK ---
// kita akan membangun RESTful API utk membuat aplikasi catatan sederhana
// dimana aplikasi tsb berfungsi utk create, read, update dan delete atau dikenal dengan istlilah CRUD
// dari segi client, sudah dideploy aplikasinya dengan alamat berikut:
// http://notesapp-v1.dicodingacademy.com/
// namun aplikasi tsb tidak bs digunakan, karna blm terhubung dg RESTful API

// kriteria 1- web server dapat menyimpan catatan
// menyimpan tanpa perlu ke server, ckup ke memory server dalam bentuk array
// berikut struktur objek catatannya :
/**
 * {
 id: string,
 title: string,
 createdAt: string,
 updatedAt: string,
 tags: array of string,
 body: string,
},
 */

// contoh nyata sbb:
/**
 * {
 id: 'notes-V1StGXR8_Z5jdHi6B-myT',
 title: 'Sejarah JavaScript',
 createdAt: '2020-12-23T23:00:09.686Z',
 updatedAt: '2020-12-23T23:00:09.686Z',
 tags: ['NodeJS', 'JavaScript'],
 body: 'JavaScript pertama kali dikembangkan oleh Brendan Eich dari Netscape di bawah nama Mocha, yang nantinya namanya diganti menjadi LiveScript, dan akhirnya menjadi JavaScript. Navigator sebelumnya telah mendukung Java untuk lebih bisa dimanfaatkan para pemrogram yang non-Java.',
},
 */
// agar web server dpt simpan catatan, web server harus sediakan route dg path '/notes' dan metod POST
// client akan kirim req ke path dan metod tsb dg bawa data JSON berikut pada req body
/**
 * {
 "title": "Judul Catatan",
 "tags": ["Tag 1", "Tag 2"],
 "body": "Konten catatan"
}
 */
// properti id, createdAt, dan updatedAt harus di olah di server, client tidak akan kirim itu
// server harus memasikan id selalu unik
// jika req client berhasil, respon dr server harus memiliki status code 201(created) dan kembalikan data berformat JSON sbb:
/**
 * {
  "status": "success",
  "message": "Catatan berhasil ditambahkan",
  "data": {
    "noteId": "V09YExygSUYogwWJ"
  }
}
 */

// nilai dr properti nodeId diambil dari properti id yang dibuat unik
// bila req gagal, kirim status code 500 dan kembalikan dg dta JSON dengan format :
/**
 * {
  "status": "error",
  "message": "Catatan gagal untuk ditambahkan"
}
 */