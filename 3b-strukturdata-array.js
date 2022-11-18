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

console.log("-----------spread operator---------------")
//---------------------spread operator----------------
//membuat pengelolaan array menjadi lbh mudah
//spread digunakan utk menyebarkan nilai array atau iterable object mnjd beberapa elemen
//spread operator dituliskan dg titik tiga (...)
//contoh kode:
const makananku= ["seafood", "salad", "nugget", "soup"];
console.log(makananku);
//mencetak dengan memanggil arraynya tentu akan menampilkan kurung kurawal
//agar memanggil isi array tanpa menyertakan kurung kurawal, gunakan ...
console.log(...makananku);
//misalkan menggabungkan 2 array dan memanggilnya
const warna=["merah", "kuning", "abu-abu"];
const hewan=["kambing", "bebek", "sapi"];
const warnaHewan=[warna, hewan];
console.log(warnaHewan);
//tercetak warnaHewan menampilkan gabungan warna dan hewan namun isi array tidak lebur
//masih terlihat tanda kurung kurawal dan koma
const warnaHewanBaru=[...warna,...hewan];
console.log(warnaHewanBaru);
//hasil cetak terbaru menampilkan array hewan dan warna bergabung/lebur
console.log(...warnaHewanBaru);
//hasil cetak menghilangkan kurung kurawal dan koma

//selain array, spread dapat digunakan utk object
const obj1={firstName:"obi-tol", age:30};
const obj2={lastName:"kenotol", gender:"man"};
const objNew={...obj1, ...obj2};
console.log(objNew);