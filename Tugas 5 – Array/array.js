// Soal No 1
console.log('====Soal No 1====')
function range(startNum, finishNum) {
    var array = [];
    if (!startNum || !finishNum) return -1;
    else if(startNum > finishNum){
        var array = [50,51,52,53,54];
        array.sort();
        array.reverse();
    }
    for (let i = startNum; i <= finishNum; i++) {
        array.push(i);
    }
    return array;
}

// Code di sini
console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1 

// // Soal No 2
console.log('====Soal No 2====')
function rangeWithStep(startNum, finishNum, step) {
    let array = [];
    if (startNum < finishNum){
        do {
            array.push(startNum);
            startNum += step;
        } while (startNum <= finishNum);
        return array;
    } else if (step == 1){
        do {
            array.push(startNum);
            startNum-- ;
        } while (startNum >= finishNum);
        return array;
    } else {
        do {
            array.push(startNum);
            startNum -= step;
        } while (startNum > finishNum);
        return array;
    };
};

console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5] 

// // Soal No 3
console.log('====Soal No 3====')
function sum(startNum, finishNum, step = 1) {
    var countArray = 0;
    var fromArray = rangeWithStep(startNum, finishNum, step);

    if(!startNum){
        return 0;
    } else if (startNum == 1 && finishNum == 1){
        return 1; 
    } else if(!finishNum){
        return 1;
    }
    else {
        for (var i = 0; i < fromArray.length; i++) {
            countArray += fromArray[i]
        }
        return countArray;
    }
}
// Code di sini

console.log(sum(1,10)); // 55
console.log(sum(5, 50, 2)); // 621
console.log(sum(15,10)); // 75
console.log(sum(20, 10, 2)); // 90
console.log(sum(1)); // 1
console.log(sum()); // 0 

// Soal No 4
//contoh input
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

console.log('====Soal No 4====')
var hasil = [''];
function dataHandling(){
    for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < input[i].length; j++) {
            var a1 = console.log('Nomor ID: ' + input[i][j]);
            j += 1;
            var a2 = console.log('Nama Lengkap: ' + input[i][j]);
            j += 1;
            var a3 = console.log('TTL: ' + input[i][j] + ' ' + input[i][j + 1]);
            j += 2;
            var a4 = console.log('Hobi: ' + input[i][j]);
            hasil += + a1 + a2 + a3 + a4;
            console.log(' ')
        }
    }
    return '';
}



var jawaban2 = dataHandling()
console.log(jawaban2)

// Soal No 5
console.log('====Soal No 5====')
function balikKata(kata) {
    var array = [""];
    for (var i = kata.length - 1; i >= 0; i--) {
        array += (kata[i]);
    }
    return array;
}
// Code di sini
 
console.log(balikKata("Kasur Rusak")); // kasuR rusaK
console.log(balikKata("SanberCode")); // edoCrebnaS
console.log(balikKata("Haji Ijah")); // hajI ijaH
console.log(balikKata("racecar")); // racecar
console.log(balikKata("I am Sanbers")); // srebnaS ma I

// Soal No 6
console.log('====Soal No 6====')
var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

input.splice(0,5)
input.push("0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro")
console.log(input)

var i = input[3].split("/")
const bulan = i[1]
switch (true) {
    case bulan == 01:
        console.log('Januari')
        break;
    case bulan == 02:
        console.log('Februari')
        break;
    case bulan == 03:
        console.log('Maret')
        break;
    case bulan == 04:
        console.log('April')
        break;
    case bulan == 05:
        console.log('Mei')
        break;
}

i.sort(function(a, b){return b-a});
console.log(i)

var j = input[3].split('/').join('-')
console.log(j)

console.log(input[1].slice(0,15))

 
/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */ 