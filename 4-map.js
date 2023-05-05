//map adalah tipe data yg simpan koleksi data dg format key-value
//seperti objek ,namun lbh kaya format karena bisa simpan data tipe apapun
//mendefinisikan map , menggunakan constructor seperti di bawah ini:
const myMap = new Map();
//menetapkan nilai dr Map secara langsung, gunakan array multi dimensi
const myMap1 = new Map([['1', 'a string key'],[1, 'a number key'], [true,true]]);
console.log(myMap1);
//utk mendapatkan nilai berdasar key tertentu, gunakan get().
//utk menambah key-value baru gunakan metode set().
const capital = new Map([["jakarta","indonesia"],["london", "england"],
["tokyo","japan"]]);
console.log(capital.size); //ukuran map
console.log(capital.get("london")); //mencari london
capital.set("new delhi","india");
console.log(capital.size);
console.log(capital);
//fitur Map lainnya seperti .has & .delete
const iniMap = new Map([['1', 'jawa'],['2','sumatra'],['3','kalimantan']]);
console.log(iniMap.has('2')); //true karna '2' ada
console.log(iniMap.delete('3')); //hapus key 3 dan isinya
console.log(iniMap);