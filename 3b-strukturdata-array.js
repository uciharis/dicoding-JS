//Array seperti object tapi tidak punya nilai pasangan
const myArray=[1, "coklat", true, "sambel",33];
console.log(myArray);

//----------akses--------
//akses array karena tidak adak key, maka gunakan indeks
//seperti cara kerja key
//indeks dimulai dr-0
console.log(myArray[0]);
console.log(myArray[2]);
console.log(myArray.length); //keyword cek panjang array

//-------tambah value array-------
//gunakan metode push()
//letak tambahan ada d belakang
myArray.push("kecomank");
console.log(myArray);

//-----------membuang value terakhir---------
//gunakan metode pop()
myArray.pop();
console.log(myArray); //kecomank ilang

//------------mengeluarkan dan menambahkan^--------
//utk elemen pertama saja
//shift() utk keluarkan elemen awal
//unshift() utk mennambahkan elemen awal
myArray.shift();
console.log(myArray); //1 ilang
myArray.unshift("jerami"); //ditambahkan d baris pertama
console.log(myArray);

//----------menghapus data dr array tertentu-----------
delete myArray[3]; //keyword delete menghapus sambel
console.log(myArray); //meninggalkan keterangan posisi array
//33 tetap menempati posisi sambel
//metode lain gunakan splice();
myArray.splice(3);
console.log(myArray); //menghapus 33