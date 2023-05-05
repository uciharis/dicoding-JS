/** --- setTimeout ---
 * funct setTimeout() merupakan cara paling mudah utk membuat kode yg dijalakan secara asynchronous
 * fungsi ini menerima 2 parameter.
 * parameter -1 adalah fungsi yg akan dijalankan secara asycnhronous
 * parameter -2 adalah nilain number dlm miliseken sbg nilai tunggu sblm fungsi dijalankan
 * berikut contoh penggunaan :
 */

    console.log("slamat datang!");
    setTimeout(()=> {
        console.log("terimakasih dah mampir, dtg lagi besok yahhh");
    },3000);

    console.log("ada yg bs dbantu? ");
// jika hanya mengenal program scr synchronous maka urutan kode diatas sbb:
// cetak("selamat datang")-> menunggu 3 detik ->cetak("terimakasih dha mampir, dtg lagi besok yahh") ->cetak("ada yg bs dbantu?")

//namun nyatanya, setTimeout() tidak akan menghentikan JS utk melakukan eksekusi kode pada baris berikutnya.
// shg urutannya akan menjadi sebagai berikut:
//cetak ("selamat datang!")-> cetak ("ada yg bs dbantu?")-> menunggu selama 3000ms -> mencetak ("terimakasih dah mampir, dtg lagi besok yahh")
