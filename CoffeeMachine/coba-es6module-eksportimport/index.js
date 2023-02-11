import coffeStock from "./state.js";

const displayStock = stock =>{
    for (const type in stock){
        console.log(type);
    }
}
displayStock(coffeStock); 
// lalu jalankan : node index.js

/* -- Akan muncul error sbb :

(node:22521) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use `node-default --trace-warnings ...` to show where the warning was created)
/home/nopi/Documents/dicoding-JS/CoffeeMachine/coba-es6module-eksportimport/index.js:1
import coffeStock from "../state";
^^^^^^

SyntaxError: Cannot use import statement outside a module
    at Object.compileFunction (node:vm:360:18)
    at wrapSafe (node:internal/modules/cjs/loader:1084:15)
    at Module._compile (node:internal/modules/cjs/loader:1119:27)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1209:10)
    at Module.load (node:internal/modules/cjs/loader:1033:32)
    at Function.Module._load (node:internal/modules/cjs/loader:868:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
 */
// solusi :
// - tambah properti pada package.json : "type" : "module"
// atau 
// - mengubah ekstensi js menjadi .mjs
// setelah ditambahkan, jalankan : node index.js
// output : 
/*
 *
nopi@localhost:~/Documents/dicoding-JS/CoffeeMachine/coba-es6module-eksportimport> node index.js
arabica
robusta
liberica
 */
// jika kita sebelumnya kita hanya melakukan eksport satu nilai pada berkas JS
// selanjutnya kita akan membahas bagaimana mengeksport banyak nilai dalam satu berkas JS menggunakan es6
// named export digunakan utk mengekspor banyak nilai dalam berkas JS.
// cara kerjanya mirip seperti node.js
// nilai yang diekspor ditulis di dalam objek literal seperti :
