// Soal 1
var angka = 2

console.log('LOOPING PERTAMA')
while(angka <= 20){
    if(angka % 2 == 0){
        console.log(angka + ' - I love coding');
    }
    angka++
}

console.log('LOOPING KEDUA')
while(angka >= 2){
    if(angka % 2 == 0){
        console.log(angka + ' - I will become a mobile developer');
    }
    angka--
}

// Soal 2
console.log('OUTPUT')
for(var i = 1; i <= 20; i++){
    if(i % 3 == 0 && i % 2 != 0)
    console.log(i + ' - I Love Coding')
    else if(i % 2 == 0){
        console.log(i + ' - Berkualitas')
    }
    else {
        console.log(i + ' - Santai')
    }
}

// Soal 3
console.log('Nomor 3');
for (var i = 0; i < 4; i++){
    var pagar = "";
    for (var j = 0; j < 8; j++){
        pagar += "#";
       }
       console.log(pagar);
    }

// Soal 4
console.log('Nomor 4');
for (var i = 7; i >= 1; i--){
    var pagar = "";
    for (var j = i; j <= 7; j++){
    pagar += "#";
       }
       console.log(pagar);
    }

// Soal 5
console.log('Nomor 5');
var catur = "";
for (var i = 0; i < 8; i++){
    if(i > 0) catur += "\n";
    for (var j = 0; j < 8; j++){
        if((i + j) % 2 == 0){
            catur += " ";
        } else {
            catur += "#";
        }
    }
}
console.log(catur);