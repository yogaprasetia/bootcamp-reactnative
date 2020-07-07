// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Tulis code untuk memanggil function readBooks di sini
var time=10000
var i=0;
baca = (time,books) => {if(time>0 && i<books.length)
    readBooks(time,books[i],sisaWaktu => {
        time=sisaWaktu;
        i++;
        baca(time,books)
    })
}

baca(time,books)