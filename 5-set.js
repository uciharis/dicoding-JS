//struktur data berikutnya adlah Set.
//Set adalah kumpulan nilai yang tidak berurutan dan tdk terindeks
const numberSet = new Set([1,3,4,3,1]);
console.log(numberSet);//tidak menampilkan duplikasinya
//metode menambah data ke dalam set add()
numberSet.add(5);
numberSet.add(18);
numberSet.add(16);
console.log(numberSet);
//fungsi add hnya menerima 1 argumen. jika dimasuki array maka
//array tsb dianggap sbg 1 elemen dan nilai yang duplikat diabaikan
numberSet.add(1);
numberSet.add(3);
console.log(numberSet); //seolah tidak ada penambahan karna penambahanny merupakan duplikasi data sblmny
numberSet.delete(4);
console.log(numberSet); //4 terhapus
//fungsi hapus akan menghapus value nya. bukan berdasarkan indeksny
