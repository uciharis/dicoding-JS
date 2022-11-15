//selain if else, JS juga mendukung switch statement.
//switch mendukung pengecekan banyak kondisi dg mudah dan ringkas.
//bentuk switch :
/*
switch (ekspresi){
    case nilai1:
        //jalankan sesuatu;
        break;
    case nilai2:
        //jalankan sesuatu;
        break;
    dsb...
    default:
        //jalankan sesuatu yg else;
}
*/
let kode=2;

switch (kode){
    case 1:
        console.log("pilihan yang tepat");
        break;
    case 2:
        console.log("mendekati tepat, belajar lagi ya");
        break;
    case 3:
        console.log("maaf kurang beruntung");
        break;
    case 4:
        console.log("salah total. hentikan");
        break;
    default:
        console.log("coba lagi beberapa tahun kedepan ya");
}
//default memiliki fungsi seperti if else