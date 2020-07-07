var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise 
var time=10000
var i=0;
baca = (time,books) => {
    if(time>0 && i<books.length)
    readBooksPromise(time,books[i])
        .then(sisaWaktu => {
            time=sisaWaktu;
            i++;
            baca(time,books);})
        .catch = () => {
            return;
        };
}

baca(time,books)