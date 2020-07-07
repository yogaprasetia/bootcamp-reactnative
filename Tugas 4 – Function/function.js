// Soal No 1
function teriak() {
    var string = "Halo Sanbers!"
    return string;
}

console.log(teriak()) // "Halo Sanbers!" 

// Soal No 2
function kalikan() {
    var kalikan = (num1 * num2)
    return kalikan;
    
}
var num1 = 12
var num2 = 4
 
var hasilKali = kalikan(num1, num2)
console.log(hasilKali) // 48

// Soal No 3
function introduce() {
    var string = ("Nama saya " + name + ", umur saya " + age + ", alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby)
    return string;
}

var name = "Agus"
var age = 30
var address = "Jln. Malioboro, Yogyakarta"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogyakarta, dan saya punya hobby yaitu Gaming!" 