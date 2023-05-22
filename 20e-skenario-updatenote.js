// --- Skenario Update Note

// -- skenario 4

// isikan url : localhost:5000/notes/{{notesId}} dg method PUT
// sisipkan data catatan terbaru pada body req.
// pilih tab Body, pilih raw dan ubah jadi JSON
/*
{
    "title" : "Catatan A Revised",
    "tags" : ["Android", "Web"],
    "body" : "Isi dari Catatan A Revised"
}
 */

// pilih tab Tests da mulai pengujian
// buat test dg nama "response status code should have 200 value"
// isi response code 200

/*
pm.test('response status code should have 200 value', ()=>{
pm.response.to.have.status(200);
});
 */

// lanjut dg nilai Content-Type yg ada pada response. Buat tes baru dg nama "response Content-Type header should have application/json value"
// uji response header Content-Type dg nilai "application/json;charset=utf-8"

/*
pm.test('response Content-Type header should have application/json value', ()=>{
pm.expect(pm.response.headers.get('Content-Type').to.equals("application/json;charset=utf-8"))
});
*/

// uji body response bahwa ia adalah sebuah objek
// buat test baru dg nama "response body should be an object"
// di dalamnya, dapatkan nilai response body sbg JSON objek
// uji nilai responseJson sbg objek atau bukan

/*
pm.test('response body should be an object', ()=>{
const responseJson = pm.response.json();
pm.expect(responseJson).to.be.an('object);
});
*/

// lanjut, uji nilai objek body response dg nama 'response body should have correct property n value'
// di dalamnya, dapatkan nilai body response dalam bentuk JSON objek
// uji responJson apakah memiliki property dan nilai yg sesuai

/*
pm.test('response body should have correct property n value', ()=>{
const responseJson = pm.response.json();

pm.expect(responJson).to.have.ownProperty('status');
pm.expect(responseJson.status).to.equals('success');
pm.expect(responseJson).to.have.ownProperty('message');
pm.expect(responseJson.message).to.equals('Catatan berhasil diperbarui');
});
*/

// memastikan catatan yang diperbarui memiliki nilai terbaru.
// caranya dg melakukan permintaan utk mendapatkan cattatan secara spesifik
// buat tes baru dg nama 'when request the updated note'
// buatlah request ke http://localhost:5000/notes/${notesId} dg metod pm.sendRequest()
// sendRequest() memiliki 2 parameter yakni req url dan fungsi callback response
// respons callback akan dipanggil ketika permintaan sudah ditanggapi oleh response ataupun mengalami error
// error dapat terjadi karena berbagai hal, salah satunya tidak ada inet
// ketika error, param error yg berada di response callback akan terisi nilai
// namun bila permintaan berhasil dilakukan dan dapat response dr server, maka param response yang terisi nilai
// pola ini disebut error first, dimana callback funct mendahulukan param error dibanding dg ketika
// operasi berhasil dijalankan
// nodejs banyak menerapkan pola ini pada sebuah fungsi callback
// selanjutnya di dalam fungsi callback, kita buat test terbaru dg nama 'then the updated note should contain the latest data'
// utk menguji nilai dr body response. 
// lalu dapatkan nilai objek note pada data melalui response body dlm bentuk JSON
// sblm nguji properti dan nilai dr objek note, tentukan nilai ekspektasi dr title, tags dan body
// lalu uji nilai properti title, tags, dan body yang memiliki objek note dg nilai ekspektasi

/*
pm.test('when request the updated note', ()=>{
    const noteId = pm.environment.get('noteId');
pm.sendRequest('http://localhost:5000/notes/${notesId', (error, response)=>{
if(!error) {
    pm.test('then the updated note should contain the latest dta', ()=>{
        const responseJson = response.json();
        const {data: {note}} = responseJson;

        const expectedTitle = 'Catatan A Revised';
        const expectedTags = ['Android', 'Web'];
        const expectedBody = 'Isi dari Catatan A Revised';
    
        pm.expect(note.title).to.equals(expectedTitle);
        pm.expect(note.tags).to.eql(expectedTags);
        pm.expect(note.body).to.equals(expectedBody);
    
    });
    }
});
});
*/

// kirim permintaan dg klik send
// jangan lupa simpan request dg klik save