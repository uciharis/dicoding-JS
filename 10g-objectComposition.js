/**
 * --Object Composition--
 * fitur pewarisan pada class begitu memudahkan developer dalam memangkas
 *  - duplikasi kode. kita tidak perlu repetitif menuliskan kode yang sama ketika dua class
 *  - atau lebih memliki memampuan yang sama.
 * namun apakah pewarisan di JS dapat memecahkan masalah apapun?
 * 
 * di dunia nyata, ada banyak peran dari seorang developer dengan tiga peran penting yang
 * familiar seperti frontend dev, backend dev dan devOps serta fullstack.
 * semuanya masuk ke dalam kategori developer dan mampu menulis serta mengubah kode.
 * selain itu, terdapat kemampuan yang spesifik dari mereka pada perannya masing2.
 * 
 * frontend dev yang membangun antar muka( UI),
 * backend dev membangun API
 * devOps mendeploy aplikasi.
 * fullstack adalah satu satunya peran yang mampu melakukan banyak hal. disamping menulis kode,
 * dia juga mampu membangun antarmuka, membangun API dan mendeploy.
 * 
 * jika kita gambarkan skenario diatas dalam konsep OOP maka developer merupakan superclass sedangkan
 * frontend dev, backend dan devops merupakan subclass. struktur pewarisannya sbb:
 */
{
class Developer {
    constructor(name){
        this.name = name;
    }
    commitChanges (){
        console.log(`#{this.name} is commiting changes ...`);
    }
}
class frontEndDeveloper extends Developer {
    buildUI(){
        console.log(`${this.name} is building UI ...`);
    }
}
class backEndDeveloper extends Developer {
    buildAPI(){
        console.log(`${this.name} is building API ...`);
    }
}
class devOps extends Developer {
    deployApp (){
        console.log(`${this.name} is deploying app`)
    }
}
}
// seluruh class terdefinisi dg baik tetapi kurang class fullStack Developer.
//karena sifat dari fullstack dev ada keseluruhan dari class di atas maka akan tidak efektif
// menuliskan kode seluruh metod class diatas(kelas sebelumnya) ke dalam milik fullstack. maka cara yang plg mudah adlh
// tidak menggunakan teknik inheritance tetapi menggunakan teknik object composition.
// maka dr itu dg object composition, kode distruktur berdasarkan kemampuan yang dilakukan
//sbb :

    class Developer {
        constructor (name){
            this.name = name;
        }
        commitChanges(){
            console.log(`${this.name} is committing ...`);
        }
    }
    function canBuildUI(developer){
        return {
            buildUI: ()=>{
                console.log(`${developer.name} is building UI ...`);
            }
        }
    }
    function canBuildAPI(developer){
        return {
            buildAPI: ()=> {
                console.log(`${developer.name} is building API ...`)
            }
        }
    }
    function canDeployApp(developer){
        return {
            deployApp: ()=> {
                console.log(`${developer.name} is deploying app ...`)
            }
        }
    }


// dengan memecah kode berdasarkan kemampuan, kedepannya akan lebih mudah membuat objek dengan peran apapun
// tanpa ada kode yang repetitif
// agar lbh mudah membuat objek, kita buat fungsi sebagai object creator dg komposisi kemampuan yang dibutuhkan.
// lalu kita delegasikan kemampuan2 tsb ke objek dg method Object.assign()

    function createFrontEndDeveloper(name){
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer));
}
    function createBackEndDeveloper(name){
        const developer = new Developer(name);
        return Object.assign(developer, canBuildAPI(developer));
    }
function createDevOps(name){
    const developer = new Developer(name);
    return Object.assign(developer, canDeployApp);
}
function createFullStackDev(name){
    const developer = new Developer(name);
    return Object.assign(developer, canBuildAPI(developer), canBuildUI(developer), canDeployApp(developer));
}

// implementasi kode lengkapnya dibawah ini
{
    class Developer {
        constructor(name) {
          this.name = name;
        }
       
        commitChanges() {
          console.log(`${this.name} is committing changes...`);
        }
      }
       
      function canBuildUI(developer) {
        return {
          buildUI: () => {
            console.log(`${developer.name} is building UI...`);
          }
        }
      }
       
      function canBuildAPI(developer) {
        return {
          buildAPI: () => {
            console.log(`${developer.name} is building API...`);
          }
        }
      }
       
      function canDeployApp(developer) {
        return {
          deployApp: () => {
            console.log(`${developer.name} is deploying app...`);
          }
        }
      }
       
      function createFrontEndDeveloper(name) {
        const developer = new Developer(name);
        return Object.assign(developer, canBuildUI(developer));
      }
       
      function createBackEndDeveloper(name) {
        const developer = new Developer(name);
        return Object.assign(developer, canBuildAPI(developer));
      }
       
      function createDevOps(name) {
        const developer = new Developer(name);
        return Object.assign(developer, canDeployApp(developer));
      }
       
      function createFullStackDeveloper(name) {
        const developer = new Developer(name);
        return Object.assign(developer, canBuildUI(developer), canBuildAPI(developer), canDeployApp(developer));
      }
       
      const frontEndDeveloper = createFrontEndDeveloper('Fulan');
      frontEndDeveloper.commitChanges();
      frontEndDeveloper.buildUI();
      console.log(`is ${frontEndDeveloper.name} developer? `, frontEndDeveloper instanceof Developer);
       
      const backEndDeveloper = createBackEndDeveloper('Fulana');
      backEndDeveloper.commitChanges();
      backEndDeveloper.buildAPI();
      console.log(`is ${backEndDeveloper.name} developer? `, backEndDeveloper instanceof Developer);
       
      const devOpsDeveloper = createDevOps('Fulani');
      devOpsDeveloper.commitChanges();
      devOpsDeveloper.deployApp();
      console.log(`is ${devOpsDeveloper.name} developer? `, devOpsDeveloper instanceof Developer);
       
      const fullStackDeveloper = createFullStackDeveloper('Fulanah');
      fullStackDeveloper.buildUI();
      fullStackDeveloper.buildAPI();
      fullStackDeveloper.deployApp();
      console.log(`is ${fullStackDeveloper.name} developer? `, fullStackDeveloper instanceof Developer);
       
}