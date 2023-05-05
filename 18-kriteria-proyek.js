// --- KRITERIA PROYEK ---
// kita akan membangun RESTful API utk membuat aplikasi catatan sederhana
// dimana aplikasi tsb berfungsi utk create, read, update dan delete atau dikenal dengan istlilah CRUD
// dari segi client, sudah dideploy aplikasinya dengan alamat berikut:
// http://notesapp-v1.dicodingacademy.com/
// namun aplikasi tsb tidak bs digunakan, karna blm terhubung dg RESTful API

// -- kriteria 1- web server dapat menyimpan catatan --
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


// -- Kriteria 2- Web Server dapat menampilkan catatan --
// web server dapat mengirimkan seluruh data notes yang tersimpan
// ketika client melakukan permintaan pada path '/notes' dengan metod 'GET' maka server harus mengembalikan status code 200 (OK)
// serta mengembalikan seluruh data notes dalam bentuk array menggunakan JSON seperti berikut:
/**
 * {
  "status": "success",
  "data": {
    "notes": [
      {
        "id":"notes-V1StGXR8_Z5jdHi6B-myT",
        "title":"Catatan 1",
        "createdAt":"2020-12-23T23:00:09.686Z",
        "updatedAt":"2020-12-23T23:00:09.686Z",
        "tags":[
          "Tag 1",
          "Tag 2"
        ],
        "body":"Isi dari catatan 1"
      },
      {
        "id":"notes-V1StGXR8_98apmLk3mm1",
        "title":"Catatan 2",
        "createdAt":"2020-12-23T23:00:09.686Z",
        "updatedAt":"2020-12-23T23:00:09.686Z",
        "tags":[
          "Tag 1",
          "Tag 2"
        ],
        "body":"Isi dari catatan 2"
      }
    ]
  }
}
 * 
 */

// jika belum ada catatan satu pun pada array, server bs mengembalikan data notes dengan nilai array kosong sbb:
/**
 * {
  "status": "success",
  "data": {
    "notes": []
  }
}
 */

// selain itu, client bs melakukan permintaan utk mendapakan catatan secara spesifik menggunakan id melalui path '/notes/{id}' dengan metod 'GET'
// server harus mengembalikan status code 200 (OK) serta nilai satu objek catatan dalam bentuk JSON sbb:
/**
 * {
  "status": "success",
  "data": {
    "note": {
      "id":"notes-V1StGXR8_Z5jdHi6B-myT",
      "title":"Catatan 1",
      "createdAt":"2020-12-23T23:00:09.686Z",
      "updatedAt":"2020-12-23T23:00:09.686Z",
      "tags":[
        "Tag 1",
        "Tag 2"
      ],
      "body":"Isi dari catatan 1"
    }
  }
}
 */

// bila klien melampirkan id catatan yang tidak ditemukan, server harus merespon dg status code 404 dan data dalam bentuk JSON seperti ini:

/**
 * {
  "status": "fail",
  "message": "Catatan tidak ditemukan"
}
 */



// -- Kriteria 3- Web Server dapat mengubah catatan --
// perubahan yang dimaksud bisa berupa judul,  isi maupun tag catatan
// ketika client meminta perubahan catatan, ia akan membuat permintaan ke path '/notes/{id}' menggunakan metod 'PUT' serta membawa data JSON pada body request
// yang merupakan data catatan terbaru
/**
 * {
  "title":"Judul Catatan Revisi",
  "tags":[
    "Tag 1",
    "Tag 2"
  ],
  "body":"Konten catatan"
}
 */

// jika perubahan data berhasil dilakukan, server harus menanggapi dg status code 200 (OK) dan membawa data JSON objek berikut pada body respons
/**
 * {
  "status": "success",
  "message": "Catatan berhasil diperbaharui"
}
 */

// perubahan data catatan harus dismpan  ke catatan yang sesuai dg id dan digunakan pada path parameter
// bila id catatan tidak ditemukan, maka server harus merespons dg status code 404 seperti berikut:
/**
 * {
  "status": "fail",
  "message": "Gagal memperbarui catatan. Id catatan tidak ditemukan"
}
 */


// -- Kriteria 4- Web server dapat menghapus catatan
// untk menghapus catatan, clien akan membuat permintaan pada path '/notes/{id}' dengan metode 'DELETE'
// ketika request berhasil maka server mengembalikan status code 200 (OK) serta data jSON sbb:
/**
 * {
  "status": "success",
  "message": "Catatan berhasil dihapus"
}
 */

// catatan yg dihapus harus sesuai dg id catatan yang digunakan client pada path parameter.
// bila id catatan tidak ditemukan, server harus return respon dg status code 404 dan data JSON sbb:
/**
 * {
  "status": "fail",
  "message": "Catatan gagal dihapus. Id catatan tidak ditemukan"
}
 */
