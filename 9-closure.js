//---closure---
//suatu fungsi yg dapat mengakses variabel didalam fungsi yg bersarang
// -disebut closure
//contoh:
function init (){
    var name="obi wan" //local dlm scope fungsi
    function greet(){ //fungsi dlm fungsi (closure)
        console.log(`halo si ${name}`); //dpt panggil variabel diatasny
    }
    greet();
}
init();