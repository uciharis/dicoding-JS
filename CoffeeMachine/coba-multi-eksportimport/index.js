import { coffeStock, isCoffeMachineReady } from "./state.js"; // namavariabel destructuring import harus sama dg nama objek yang diekspor pada state.js
console.log(coffeStock);
console.log(isCoffeMachineReady);
// jangan lupa tambahkan 'type': 'module' pada package.json
// jika inginmengubah nama variabel imported, gunakankeywor as
// contoh : import {coffeStock as stok, isCoffeMachineReady as mesinSiap}