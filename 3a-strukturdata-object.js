//jenis struktur data :
//object, array, map, set

//object digunakan utk menyimpan nilai berbagai macam tipe data
//isi data berupa pasangan data (key dan value) yg dsebut property

//contoh object:
const user ={nama:"burhan",umur:19,asal:"pamulang"}; //properti
//------akses properti--------
console.log(user.nama); //cara akses value dg panggil key nya
console.log(`halo nama saya ${user.nama} umur saya ${user.umur}`); //akses value dg panggil objek dan key
const user1={"nama lengkap":"joko lelono"};
//utk akses value yang memiliki space atau karakter khusus, kita gunakan bracket
console.log(user1["nama lengkap"]);

//--------ubah properti----------
const spaceship={
    name:"millenium falcon",
    manufacturer:"corelllian engineering corporation",
    maxspeed:1200,
    color:"light gray"
};
//mengubah nilai tidak sm dengan menginisiasi nilai
//terutama sifat const
spaceship.color="glossy red"; //ubah nilai cara-1
spaceship["maxspeed"]=1300; //ubah nilai cara-2
console.log(spaceship);
//coba rubah lagi color dg cara-2
spaceship["color"]="old black";
console.log(spaceship);

//--------- menambah----------
//jika kita merubah properti yang belum ada di dalam nilai properti, itu akan menambahkan 
//nilai yg baru
spaceship.class="light freighter"; //properti baru di belakang.
console.log(spaceship);

//---------menghapus-----------
//menggunakan keyword delete
delete spaceship.maxspeed;
console.log(spaceship);