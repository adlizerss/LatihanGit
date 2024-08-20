// Mengubah teks heading <h1> menjadi "Latihan JavaScript Selesai" setelah halaman dimuat
window.onload = function() {
    document.querySelector('h1').textContent = 'Latihan JavaScript Selesai';

    let outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Bersihkan div output

    // 1. Membuat array students dan menambahkan nama baru
    let students = ["Alice", "Bob", "Charlie"];
    students.push("David"); // Menambahkan satu nama lagi ke array

    // Menggunakan forEach untuk menampilkan semua nama siswa
    outputDiv.innerHTML += "Daftar siswa:<br>";
    students.forEach(function(student) {
        outputDiv.innerHTML += student + "<br>";
    });

    outputDiv.innerHTML += "<br>";

    // 2. Membuat objek car dan menampilkan semua properti menggunakan for...in loop
    let car = {brand: "Toyota", model: "Corolla", year: 2020};

    outputDiv.innerHTML += "Informasi mobil:<br>";
    for (let key in car) {
        outputDiv.innerHTML += `${key}: ${car[key]}<br>`;
    }

    outputDiv.innerHTML += "<br>";

    // 3. Membuat array objek untuk menyimpan data beberapa mobil
    let cars = [
        {brand: "Toyota", model: "Corolla", year: 2020},
        {brand: "Honda", model: "Civic", year: 2019},
        {brand: "Ford", model: "Focus", year: 2018},
        {brand: "Tesla", model: "Model 3", year: 2021}
    ];

    // Menggunakan forEach untuk menampilkan informasi setiap mobil
    outputDiv.innerHTML += "Daftar mobil:<br>";
    cars.forEach(function(car) {
        outputDiv.innerHTML += `Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}<br>`;
    });
};

// Fungsi greet yang mengembalikan pesan "Hello, " diikuti dengan nama
function greet(name) {
    return `Hello, ${name}`;
}

// Fungsi calculateSquare yang mengembalikan kuadrat dari angka yang diberikan
function calculateSquare(number) {
    return number * number;
}

// Fungsi untuk memeriksa nilai yang dimasukkan pengguna
function cekNilai() {
    // Membaca nilai dari input
    let userInput = document.getElementById('userInput').value;
    let outputDiv = document.getElementById('output');

    // Bersihkan output sebelumnya
    outputDiv.innerHTML = '';

    // Cek apakah nilai lebih besar dari, sama dengan, atau kurang dari 10
    if (userInput > 10) {
        outputDiv.innerHTML = "Nilai lebih besar dari 10<br>";
    } else if (userInput == 10) {
        outputDiv.innerHTML = "Nilai sama dengan 10<br>";
    } else {
        outputDiv.innerHTML = "Nilai kurang dari 10<br>";
    }

    // Perulangan for untuk menampilkan angka 1 hingga nilai yang dimasukkan pengguna
    outputDiv.innerHTML += "Menampilkan angka 1 hingga " + userInput + ":<br>";
    for (let i = 1; i <= userInput; i++) {
        outputDiv.innerHTML += i + "<br>";
    }
}