// --- Skenario Getting All notes

// membuat request baru pada collection Notes API test
// klik kanan pada collection lalu add request
// beri nama request dg Getting All Notes
// isi url : localhost:5000/notes dan metode GET
// tidak ada isian data apapun pada request. langsung lakukan tes
// tulis testing pertama utk nguji response code bernilai 200
// buat testing baru dg nama "response status code should have 200 value"
/*
pm.test('response status code should i have 200 value, ()=> {
pm.response.to.have.status(200);
});
 */
// buat lagi testing baru dg nama "response Content-Type header should have application/json"
/*
pm.test('response Content-Type header should have application/json value', ()=>{

});
 */
// buat testing baru dg nama 'response body should an object'
/*
pm.test('response body should an object', ()=> {
    const responseJson = pm.response.json();
    pm.expect(responseJson).to.be.an('object);
});
*/
// buat testing baru 'response body should have the correct property n value'

/*
pm.test('response body should have the correct property n value', ()=>{
    const responseJson= pm.response.json();

    pm.expect(responseJson).to.have.ownProperty('status');
    pm.expect(responseJson.status).to.equals('success');
    pm.expect(responseJson).to.have.ownProperty('data');
    pm.expect(responseJson.data).to.be.an('object');
})
*/

// pengujian terakhir
// uji objek data yang ada di dalam response body. objek data harus
// memiliki array notes yang minimal memiliki 1 item note di dalam
// buat tes dg nama 'response body data should have a note array and contain at least 1 item'
// kemudian uji nilai objek data bahwa ia harus memiliki properti notes yang merupakan
// array dan minimal memiliki 1 item di dlamnya

/*
pm.test('response body data should have a notes array and contain at least 1 item', ()=>{
  const responseJson = pm.response.json();
  const {data} = responseJson;  

  pm.expect(data).to.have.ownProperty('notes');
  pm.expect(data.notes).to.be.an('array');
  pm.expect(data.notes).lenghtOf.at.least(1);
});
*/

// selanjutnya mengirim permintaan dg klik 'send'
// simpan req. tsb dg klik tombol save
