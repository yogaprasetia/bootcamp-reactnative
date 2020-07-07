//1. Animal Class
console.log("1. Soal 1 Animal Class");
console.log("===Release 0===");
class Animal {
    // Code class di sini
    constructor(name){
        this.name=name;
        this.legs=4;
        this.cold_blooded=false;
    }
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

console.log("===Release 1===");
// Code class Ape dan class Frog di sini
class Frog extends Animal{
    constructor(name){
        super(name);
    }
    jump(){
        console.log("hop hop");
    }
}

class Ape extends Animal{
    constructor(name){
        super(name);
        this.legs=2;
    }
    yell(){
        console.log("Auooo");
    }
}

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
 
var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 

//2. Function to Class
console.log("");
console.log("2. Soal 2 Function to Class");
class Clock {
    // Code di sini
    constructor(obj){
        this.template=obj.template;
        this.timer=0;
    }

    render() {
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        var output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(this.render.bind(this), 1000);
    }    
}

var clock = new Clock({template: 'h:m:s'});
clock.start();