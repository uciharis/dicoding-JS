// --- Skenario Delete Note

// -- skenario ke 5

// bikin sebuah req baru dalam collection 'Delete Note'
// isikan url : localhost:5000/notes/{{noteId}} dg method DELETE
// langsung ke tab Tests dan tuliskan pengujian

// buat test nama uji status code 200
// isi dg nilai status code 200



/*
pm.test('response status code should have 200 value', ()=>{
pm.response.to.have.status(200);
});
*/

// lanjut buat tes dg nama 'response Content-Type header shuould have application/json value'
// isi dg uji response header Content-Type dg nilai 'application/json; charset=utf-8'



/*
pm.test('response Content-Type header should have application/json value', ()=>{
pm.expect(pm.response.headers.get('Content-Type)).to.equals('application/json; charset=utf-8');
})
 */

// uji body response bahwa ia harus objek. buat nama tes 'response body should be an object'
// di daamnya dapatkan nilai response body sbg JSON object
// uji responseJson bahwa ia adalah sebuah objek

/*
pm.test('response body should be an object', ()=>{
const responseJson = pm.response.json();
pm.expect(responseJson).to.be.an('object');
})
*/

// lanjutkan uji nilai objek body response dg tes baru bernama 'response body should have correct property n value'
// dapatkan nilai body response dalam bentuk JSON objek
// uji nilai responseJson bahwa ia harus memiliki properti dan nilai yg sesuai

/*
pm.test('response body should have correct property n value', ()=>{
const responseJson = pm.response.json();

pm.expect(responseJson).to.have.ownProperty('status');
pm.expect(responseJson.status).to.equals('success');
pm.expect(responseJson).to.have.ownProperty('message');
pm.expect(responseJson.message).to.equals('Catatan berhasil dihapus');
});
*/

// terakhir, kita harus memastikan catatan bener2 dihapus di server, server harus mengembalikan respons dg status code 404 dg objek body yg relevan

// buat test baru dg 'when request the deleted note'
// isikan url : http://localhost:5000/notes/${noteId} dg nilai noteId didapat dr environment var.
// bila param error tdk memiliki nilai, silahkan buat test dg nama 'the deleted note should be not found'
// uji status code dg nilai 404
// kita bs uji nilai body response dg properti dan nilai yg relevan

/*
pm.test('when request the deleted note', ()=> {
    pm.sendrequest('http://localhost:5000/notes/${noteId', (error, response)=>{
    if(!error) {
        pm.test('the deleted note should be not found', ()=>{
            pm.expect(response.code).to.equals(404);

            const responseJson = response.json();
            pm.expect(responseJson.status).to.equals('fail');
            pm.expect(responseJson.message).to.equals('Catatan tidak ditemukan');
        });
    }
    });

});

*/

// silahkan kirim dg klik tombol send
// jangan lupa utk simpan