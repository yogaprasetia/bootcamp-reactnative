//Soal No. 1 (Array to Object)
console.log("Soal No. 1");
var now = new Date()
var thisYear = now.getFullYear() // 2020 (tahun sekarang)

function arrayToObject(arr) {
    // Code di sini 
    let x={}
    for(let i=0;i<arr.length;i++){
        x[(i+1)+"."+arr[i][0]+' '+arr[i][1]]={
            firstName:arr[i][0],
            lastName:arr[i][1],
            gender:arr[i][2],
            age: (!arr[i][3] || arr[i][3]>thisYear)?"Invalid Birth Year":thisYear-arr[i][3]
        }
    }
    console.log(x);
}
// Driver Code
var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ]
arrayToObject(people) 
/*
    1. Bruce Banner: { 
        firstName: "Bruce",
        lastName: "Banner",
        gender: "male",
        age: 45
    }
    2. Natasha Romanoff: { 
        firstName: "Natasha",
        lastName: "Romanoff",
        gender: "female".
        age: "Invalid Birth Year"
    }
*/
 
var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ]
arrayToObject(people2) 
/*
    1. Tony Stark: { 
        firstName: "Tony",
        lastName: "Stark",
        gender: "male",
        age: 40
    }
    2. Pepper Pots: { 
        firstName: "Pepper",
        lastName: "Pots",
        gender: "female".
        age: "Invalid Birth Year"
    }
*/
 
// Error case 
arrayToObject([]) // ""

//Soal No. 2 (Shopping Time)
console.log("Soal No. 2");
function shoppingTime(memberId, money) {
  // you can only write your code here!
  if(!memberId)
    return "Mohon maaf, toko X hanya berlaku untuk member saja";
  if(money<50000)
    return "Mohon maaf, uang tidak cukup";
  var HargaProduk=[{
      product:"Sepatu brand Stacattu",
      price:1500000
  },
  {
      product:"Baju brand Zoro",
      price:500000
  },
  {
      product:"Baju brand H&N",
      price:250000
  },
  {
      product:"Sweater brand Uniklooh",
      price:175000
  },
  {
      product:"Casing Handphone",
      price:50000
  }];
  
  HargaProduk = UrutHarga(HargaProduk);
  
  var changeMoney = money;
  var listPurchased = [];
  for(var i = 0; i < HargaProduk.length; i++){
    if(changeMoney > HargaProduk[i].price){
        listPurchased.push(HargaProduk[i].product)
        changeMoney -= HargaProduk[i].price
    }
  }

  let invoice = {
      memberId: '1820RzKrnWn08',
      money: 2475000,
      listPurchased,
      changeMoney
  }
  return invoice;
}

UrutHarga = (x) => {
    var y;
    for(var i = 0; i < x.length-1; i++){
        for(var j = i+1; j < x.length; j++){
            if(x[i].price < x[j].price){
                y = x[i];
                x[i] = x[j];
                x[j] = y;
            }
        }
    }
    return x;
}
 
// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja

//Soal No. 3 (Naik Angkot)
console.log("Soal No. 3");
function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  var Angkot={}
  for(var i=0; i < arrPenumpang.length; i++){
      var naik = false;
      var ongkos = 0;
      var naikDari = arrPenumpang[i][1] 
      var tujuan = arrPenumpang[i][2]
      for(var j=0;j < rute.length; j++){
          if(naik == false && rute[j] == naikDari) naik = true;
          if(naik == true && rute[j] != tujuan) ongkos += 2000;
          if(rute[j] == tujuan)
          break;
      }

      Angkot[i]={
          penumpang: arrPenumpang[i][0], naikDari, tujuan, 
          bayar: ongkos
      }
  }
  return Angkot;
}
 
//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
 
console.log(naikAngkot([])); //[]