// document.getElementById("pesan").textContent = "hello world";
// console.log("hello world");
// const namaPengguna = prompt("Masukkan nama anda:", "");
// if (namaPengguna && namaPengguna.trim() !== ""){
//     alert("hallo " + namaPengguna + "!");
//     document.getElementById("pesan").textContent = "selamat datang, " + namaPengguna + ".";
// }else{
//     alert("nama belum diisi");
// }
// function operasidasar(a, b){
//     console.log("penjumlahan:", a + b);
//     console.log("pengurangan:", a - b);
//     console.log("perkalian:", a * b);
//     console.log("pembagian:", a / b);
// }
// operasidasar(10, 5);

// const inputNilai =prompt("masukan nilai (0-100):");
// const nilaiMahasiswa= Number(inputNilai);

// if (inputNilai == null || inputNilai.trim() === "" || Number.isNaN(nilaiMahasiswa) || nilaiMahasiswa < 0 || nilaiMahasiswa > 100){
//     alert("nilai tidak valid");
// }else if(nilaiMahasiswa >= 60){
//     alert("lulus");
// }else{
//     alert("tidak lulus");
// }
// const inputPilihan = prompt("masukan pilihan (1-5):");
// switch (inputPilihan) {
//     case "1":
//         alert("bilangan satu");
//         break;
//     case "2":
//         alert("bilangan dua");
//         break;
//     case "3":
//         alert("bilangan tiga");
//         break;
//     case "4":
//         alert("bilangan empat");
//         break;
//     case "5":
//         alert("bilangan lima");
//         break;
//     default:
//         alert("pilihan tidak tersedia");
// }
// function cekBilangan() {
//     const input = document.getElementById("bilangan").value;
//     const angka = Number(input);
//     const hasil = document.getElementById("hasilBilangan");
    
//     if (input.trim() === "" || !Number.isInteger(angka)) {
//         hasil.textContent = "Masukkan bilangan bulat yang valid.";
//     } else if (angka % 2 === 0) {
//         hasil.textContent = "Bilangan genap";
//     } else {
//         hasil.textContent = "Bilangan ganjil";
//     }
// }
// function ubahWarnaLatar(warna) {
//     document.body.style.backgroundColor = warna;
// }
// const daftarMenu = document.querySelectorAll(".menu");

// daftarMenu.forEach((item) => {
//     item.addEventListener("change", hitungTotal);
// });

// function hitungTotal() {
//     let total = 0;
//     daftarMenu.forEach((item) => {
//         if (item.checked) total += Number(item.value);
//     });
//     document.getElementById("total").textContent = total.toLocaleString("id-ID");
// }


const hitungNilaiAkhir = (tugas, uts, uas) => {
    return tugas * 0.30 + uts * 0.30 + uas * 0.40;
};

function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}

const tugas = 85;
const uas = 78;
const uts = 88;

const akhir = hitungNilaiAkhir(tugas, uts, uas);

console.log("Nilai akhir:", akhir.toFixed(2));
console.log("Predikat:", tentukanPredikat(akhir));
console.log("Status:", akhir >= 60 ? "Lulus" : "Belum lulus");
