// --- Getting specified note

//pengujian ke-3

// buat req. baru di dalam Notes API test dengan nama req. Getting specified Note
// url isikan : localhost:5000/notes{{noteId}} dg metod GET

// noteId merupakan nilai yang diambil dari environment var.
// klik tab Tests
// buat tes uji utk menguji status code dari respons dg nama
// 'response status code should have 200 value'
/*
pm.test('response status code should have 200 value, ()=>{
        pm.response.to.have.status(200);
});
*/

// buat testing baru dg nama 'response Content-Type header should have application/json value

/*
pm.test('response Content-Type header should have application/json value'()=>{
    pm.expect(pm.response.headers.get('Content-Type')).to.equals('application/json;charset=utf-8');
});
*/

// lanjutkan tes baru dg nama 'response body should be an object'
// dapatkan nilai respon dlm bentuk Json
// uji responJson kalau dia objek
/*
pm.test('response body should be an object',()=>{
    const responseJson = pm.response.json();
    pm.expect(responseJson).to.be.an('object');
});
*/

// lanjutkan uji objek response body agar properti yg dimiliki sesuai
// buat test baru dg nama 'response body should have the correct property and value'
// dapatkan respon Json
// lalu uji responJson ia harus punya properti status dg nilai success dan data object

/*
pm.test('response body should have the correct propery and value', ()=>{
const responseJson = pm.response.json();

pm.expect(responseJson).to.have.ownProperty('status');
pm.expect(responseJson.status).to.equals('success');
pm.expect(responseJson).to.have.ownProperty('data');
pm.expect(responseJson.data).to.be.an('object');
});
*/

// buat tes objek data dari response body bahwa ia harus memiliki
// properti note yang merupakan objek
// buat tes baru dg nama 'response body data should contain note object'
//dapatkan data objek berbentu json dr response body
// uji objek data agar punya properti note sbg objek


/*
pm.test('response body data should contain note object', ()=>{
const responseJson = pm.response.json();
const {data} = responseJson;

pm.expect(data).to.have.ownProperty('note');
pm.expect(data.note).to.be.an('object');
});
*/

// pengujian terakhir
// kita menguji objek note, harus punya properti id, title, body dan tags
// properti tsb harus punya nilai yang sesuai dg nilai yang dimasukkan pada skenario pertama

// bikin tes dg nama 'note object should contain correct value for id, title, body n tags property'
// dapatkan objek note dari data dalam response body

/*
    pm.test('note object should contain correct value for id, title, body, and tags property', () => {
     const responseJson = pm.response.json();
     const {data: {note}} = responseJson;

    }); 
*/

// sebelum menguji properti dan nilai di dalam objek note,
// tentukan dulu nilai ekspektasi dari id, title, body dan tags
// nilai id bs didapatkan dar var. environment lewat metod pm.environment.get('noteId')
// sedangkan yang lain anda bs lihat nilainya pada req. Adding Notes yang dikirim melalui body

/*
    pm.test('note object should contain correct value for id, title, body, and tags property', () => {
     const responseJson = pm.response.json();
     const { data: { note } } = responseJson;
     
     const expectedId = pm.environment.get('noteId');
     const expectedTitle = 'Catatan A';
     const expectedTags = ['Android', 'Web'];
     const expectedBody = 'Isi dari catatan A';

     pm.expect(note).to.have.ownProperty('id');
     pm.expect(note.id).to.equals(expectedId);

     pm.expect(note).to.have.ownProperty('title');
     pm.expect(note.title).to.equals(expectedTitle);
    }); 

 */

// selanjutkan tekan send
// terjadi error karena kita tdk bs cek array dg object
/*
['harry', 'potter'] === ['harry', 'potter']
output : false
*/

// maka dari itu harus di dikonvert lewat JSON.stringify

/*
JSON.stringify(['harry', 'potter']) === JSON.stringify(['harry', 'potter'])
output : True

 */

// JSON.stringify metodnya menjadi eql() di POSTMAN

/*
    pm.test('note object should contain correct value for id, title, body, and tags property', () => {
       const responseJson = pm.response.json();
       const { data: { note } } = responseJson;
     
       const expectedId = pm.environment.get('noteId');
       const expectedTitle = 'Catatan A';
       const expectedTags = ['Android', 'Web'];
       const expectedBody = 'Isi dari catatan A';
     
       pm.expect(note).to.have.ownProperty('id');
       pm.expect(note.id).to.equals(expectedId);
     
       pm.expect(note).to.have.ownProperty('title');
       pm.expect(note.title).to.equals(expectedTitle);
     
       pm.expect(note).to.have.ownProperty('tags');
       pm.expect(note.tags).to.eql(expectedTags);
     
       pm.expect(note).to.have.ownProperty('body');
       pm.expect(note.body).to.equals(expectedBody);
    });

*/

// tekan send dan sukses !