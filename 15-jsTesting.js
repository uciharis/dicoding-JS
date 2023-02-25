//--- Javascript Testing---
// ada 4 jenis pengujian yaitu :
// static test (ngecek typo dan eror types)
// unit test (cek unit kode, baik itu komponen maupun kelas)
// integration test (guna memastikan serangkaian fungsi berjalan dg menuliskan script)
// e2e test (menguji lfow aplikasi dr awal smpe akhir)

// dalam pengujian kode, kita menggunakan library tambahan utk mempermdah penulisan pengujian kode
// jest adalah salah satu framework testing yg terkenal utk menuliskan kode pengujian pada JS

// perhatikan kode berikut ini
// ini adalah unit test jest
// format :
/** --- kode framework jest ---
 * 
 * ini formatnya :
 * 
 * test('deskripsi test mu', ()=> {
 * expect(perintah).matcher(nilai yg diekspektasikan);
 * });
 * 
 * contoh penulisan :
 * 
 * test('kode penjumlahan', ()=> {
 *  expect(2+2).toBe(4);
 * });
 * --- akhir kode ---
 * 
 * toBe(4) : disebut sbg matcher
 * terdapat beberapa pilihan matcher yaitu :
 * 
 *      toBe(x) : nilai yg diharapkan adalah x
 *      toEqual(x) : nilai yg diharapkan sama
 *      toBeNull() : nilai yg diharapkan 0
 *      toBeTruthy() : nilai yg diharapkan truth
 *      toBeFalsy() : nilai yg diharapkan false
 * 
 * info matcher yang lain : https://jestjs.io/docs/using-matchers
 * 
 */

// pada framework jest, kita juga bs membuat test secara grup berdasar karakteristik atau grup yg sama
// pake : describe

/** --- penggunaan describe ---
 * 
 * --- ini kode ---
 * 
 * describe('pengujian aritmatika', ()=> {
 *      test1('#dua tambah dua adalah 4', ()=> {
 *       expect(2+2).toBe(4);
 * });
 * test2('#dua dikali tiga adalah enam', ()=> {
 * expect(2*3).toBe(6)});
 * });
 * });
 * 
 * 
 * 
 * 
 */

/** --- pengujian kode ---
 *
 * kode pengujian kode ada di folder latihantesting/_test_/gradeCalculation.js
 * kode terdapat 2 fungsi :
 *
 * averageExams : menghitung nilai rata2 siswa dari sebuah inputan berupa daftar angka dalam bentuk array
 * isStudentPassExam : melakukan kalkulasi apakah seorang siswa lulus ujian tidak berdasarkan nilai rata-rata yang didapatkan
 *
 * berikut testcase framework utk kode diatas :
 * - apa yang akan diuji
 * -- fungsi menghitung rata-rata
 * -- fungsi untuk mengecek apakah seorang siswa lulus ujian
 *
 * -ekspektasi yang diharapkan
 * -- menghasilkan nilai yang sesuai dari inputan
 * -- inputan harus berupa angka
 * -- menghasilkan hasil kelulusan iya/ tidak pada siswa dengan nilai kriteria tertentu
 *
 * langkah selanjutnya adalah
 *
 * simpan script test dlam sebuah folder bernama _test_.
 * 1 file utk 1 lingkup perintah dengan format namaScopeFunctions.test.js (gradeCalculation.test.js)
 *
 * lalu dilanjutkan dengan kode averageExams ke file gradeCalculation.test.js
 *
 *lalu jalankan dengan :
 * npm run test atau
 * npm runt test -- --coverage
 *
 *setelah proses selesai, jest akan menggenerate laporan pengujian dalam folder coverage
 */

