// Tugas Conditional
//if else

// Output untuk Input nama = '' dan peran = ''
var nama = ''
var peran = ''

if (nama == ''){
    console.log("Nama harus diisi!")
} else if (peran == ''){
    console.log("Nama harus diisi!")
}

//Output untuk Input nama = 'John' dan peran = ''
var nama = 'John'
var peran = ''

if (nama != '' && peran == ''){
    console.log("Halo" +" "+ nama + ", Pilih peranmu untuk memulai game!")
}

//Output untuk Input nama = 'Jane' dan peran 'Penyihir'
var nama = 'Jane'
var peran = 'Penyihir'

if (nama != '' && peran != ''){
    console.log("Selamat datang di Dunia Werewolf," + " " + nama)
    console.log("Halo" + " " + peran + " " + nama + ", kamu dapat melihat siapa yang menjadi werewolf!")
}

//Output untuk Input nama = 'Jenita' dan peran 'Guard'
var nama = 'Jenita'
var peran = 'Guard'

if (nama != '' && peran != ''){
    console.log("Selamat datang di Dunia Werewolf," + " " + nama)
    console.log("Halo" + " " + peran + " " + nama + ", kamu akan membantu melindungi temanmu dari serangan werewolf.")
}

//Output untuk Input nama = 'Junaedi' dan peran 'Werewolf'
var nama = 'Junaedi'
var peran = 'Werewolf'

if (nama != '' && peran != ''){
    console.log("Selamat datang di Dunia Werewolf," + " " + nama)
    console.log("Halo" + " " + peran + " " + nama + ", Kamu akan memakan mangsa setiap malam!")
}

//switch
var hari = 25; 
var bulan = 7; 
var tahun = 1999;

switch (bulan) {
    case 1:
        if (hari >=1 && hari <=31){
        } if (tahun >= 1990 && tahun <= 2200)
        console.log(hari + ' ' + 'Januari' + ' ' + tahun)
        else{
            console.log("Masukkan Tanggal yang Benar")
        }
        break;
    case 2:
        if (hari >=1 && hari <=31){
        } if (tahun >= 1990 && tahun <= 2200)
        console.log(hari + ' ' + 'Februari' + ' ' + tahun)
        else{
            console.log("Masukkan Tanggal yang Benar")
        }
        break;
    case 3:
        if (hari >=1 && hari <=31){
        } if (tahun >= 1990 && tahun <= 2200)
        console.log(hari + ' ' + 'Maret' + ' ' + tahun)
        else{
            console.log("Masukkan Tanggal yang Benar")
        }
        break;
    case 4:
        if (hari >=1 && hari <=31){
        } if (tahun >= 1990 && tahun <= 2200)
        console.log(hari + ' ' + 'April' + ' ' + tahun)
        else{
            console.log("Masukkan Tanggal yang Benar")
        }
        break;
    case 5:
        if (hari >=1 && hari <=31){
        } if (tahun >= 1990 && tahun <= 2200)
        console.log(hari + ' ' + 'Mei' + ' ' + tahun)
        else{
            console.log("Masukkan Tanggal yang Benar")
        }
        break;
    case 6:
        if (hari >=1 && hari <=31){
        } if (tahun >= 1990 && tahun <= 2200)
        console.log(hari + ' ' + 'Juni' + ' ' + tahun)
        else{
            console.log("Masukkan Tanggal yang Benar")
        }
        break;
    case 7:
        if (hari >=1 && hari <=31){
        } if (tahun >= 1990 && tahun <= 2200)
        console.log(hari + ' ' + 'Juli' + ' ' + tahun)
        else{
            console.log("Masukkan Tanggal yang Benar")
        }
        break;
    case 8:
        if (hari >=1 && hari <=31){
        } if (tahun >= 1990 && tahun <= 2200)
        console.log(hari + ' ' + 'Agustus' + ' ' + tahun)
        else{
            console.log("Masukkan Tanggal yang Benar")
        }
        break;
    case 9:
        if (hari >=1 && hari <=31){
        } if (tahun >= 1990 && tahun <= 2200)
        console.log(hari + ' ' + 'September' + ' ' + tahun)
        else{
            console.log("Masukkan Tanggal yang Benar")
        }
        break;
    case 10:
        if (hari >=1 && hari <=31){
        } if (tahun >= 1990 && tahun <= 2200)
        console.log(hari + ' ' + 'Oktober' + ' ' + tahun)
        else{
            console.log("Masukkan Tanggal yang Benar")
        }
        break;
    case 11:
        if (hari >=1 && hari <=31){
        } if (tahun >= 1990 && tahun <= 2200)
        console.log(hari + ' ' + 'November' + ' ' + tahun)
        else{
            console.log("Masukkan Tanggal yang Benar")
        }
        break;
    case 12:
        if (hari >=1 && hari <=31){
        } if (tahun >= 1990 && tahun <= 2200)
        console.log(hari + ' ' + 'Desember' + ' ' + tahun)
        else{
            console.log("Masukkan Tanggal yang Benar")
        }
        break;
    default:
        console.log("Masukkan Tanggalnya")
        break;
}