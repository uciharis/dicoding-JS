// --- SKEnario




// -- 1. skenario adding notes

// buka tab collections
// klik add request, kasih nama adding notes
// isi url : localhost:5000/notes dan gunakan method POST
// pada body tambahkan catatan data, klik Body dan pilih opsi raw kemudian ganti format teks menjadi JSON
// tulis berikut ini :
/*
{
    "title" : "catatan A",
    "tags" : ["android", "web"],
    "body" : " Isi dari catatan A"
}
 */

// pilih tab test
// tulis skenario tesnya disini
/*
nb : Postmen memiliki global object pm, utk membuat testing, gunakan method pm.test()
metod tsb punya 2 parameter, pertama adalah nama tes dan kedua adalah spec funct.
method test() mirip seperti method it() pada jest

buat testing baru dengan nama " response status code should have 201 values"

*/
/*

pm.test('respons status code should have 201 values', ()=> {
    pm.response.to.have.status(201);
});
 */

// bila nanti respons status tidak memiliki nilai 201, maka tesnya gagal 