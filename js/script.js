/*

class PowerArray extends Array {
    isEmpty() {
        return this.length ;
    }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
console.log(arr.isEmpty()); // false

let filteredArr = arr.filter(item => item >= 10);
console.log(Symbol.species); // 10, 50
console.log(filteredArr.isEmpty()); // fal*/

/*
class Mammal {
    constructor(name) {
        this.name = name;
        _
    }

// Non-static method
    eat() {
        console.log(this.name + " eats");
    }

// static method
    static sleep() {
        console.log(this.name + " sleeps");
    }
}

class Cat extends Mammal {
// not writing any constructor relying on the default one.
    walk() {
        console.log(this.name + " walks");
    }
}

let cat = new Cat("kitty");

// Cat class own method - Works
cat.walk(); // kitty walks
// Non static method of parent class - Works
cat.eat(); // kitty eats
// Static method of parent class - Error!!
cat.sleep(); // Error : not a function
*/
/*
let obj = {

}
console.log(obj)*/

/*
class Rabbit {}
class Rabbit2 {}
let rabbit = new Rabbit();
let rabbit2 = new Rabbit2();

// is it an object of Rabbit class?
console.log( rabbit instanceof Rabbit2 ); // true
*/

/*
class Rabbit{}

//a
let die = ({}).toString.call(new Rabbit()) // Uncaught SyntaxError: Unexpected token '.'
console.log(die)
//but below works fine (Note : I haven't set Symbol.toStringTag - but I guess that shouldn't give the error)
//b
Object.prototype.toString.call(new Rabbit())// "[object Object]"
//c
var s = {}.toString;
s.call(new Rabbit())//"[object Object]"
//d
console.log(Object.prototype.toString.call(new Rabbit()) === {}.toString.call(new Rabbit())) // returns true*/


/*
try{
    s.call(new Rabbit())//"[object Object]"
}
catch (err)
{
    console.log(err)
}
window.onerror = function(message, url, line, col, error) {
    alert(`${message}\n At ${line}:${col} of ${url}`);
};

function readData() {
    badFunc(); // Whoops, something went wrong!
}

readData();
*/

/*
class FormatError extends SyntaxError {
    constructor(message) {
        super(message);
        this.name = "FormatError";
    }
}

let err = new FormatError("ошибка форматирования");

console.log( err.message ); // ошибка форматирования
console.log( err.name ); // FormatError
console.log( err.stack ); // stack

console.log( err instanceof SyntaxError ); // true*/

/*function sayHi() {
    alert("Hello");
}

// global functions are methods of the global object:
window.sayHi();*/
/*

setTimeout(() =>  document.body.style.background = "red", 1000)
{
    document.body.style.background = "red"


    setTimeout(() => document.body.style.background = "blue", 1000);
    document.body.style.background = "green"

}
*/
/*
const draw = (table, color) => {
    const count = table.rows.length
    const trows = table.rows

    for (let i = 0; i < count; i++) {
        trows[i].children[i].style.backgroundColor = color
    }
}

draw(document.body.firstElementChild, 'red')*/
/*for (let elem of document.body.children) {
    if (elem.matches('a[href$="file.zip"]')) {
        console.log("The archive reference: " + elem.href);
    }
}*/
/*
let coll = document.querySelectorAll("div");
for (let i = 0, len = coll.length; i < len; i++) {
    if (coll[i].matches(".someClass")) {
        console.log(coll[i].id +": Я выжил!");
    }else{
        coll[i].remove();
    }
}
console.log(coll)
*/
/*

let inputs = table.getElementsByTagName('input');

for (let input of inputs) {
    alert( input.value + ': ' + input.checked );
}*/
/*

let tav = document.querySelectorAll('#age-table label')

for (let elem of tav) {
    console.log(elem.innerHTML); // "test", "passed"
}*/

/*

let div = document.createElement("div")
let p = document.createElement("pipi")
div.append(p)

console.log(div.childNodes)*/

/*
let i = document.querySelector('.bebra')
console.log(i.innerHTML)

console.log(i.innerHTML = "Hi, Ben")*//*
function add (a)
{
    return function (b)
    {
        return a + b
    }
}*/
/* new Promise((resolve, reject) => {
 setTimeout(() => reject("hello"), 2000)
})*/

/*.then(error => console.log(error),*/
/*
    result => console.log(result)); */

/*
function delay(ms) {
    return new Promise (resolve => setTimeout(resolve,ms) )
}
delay(3000).then(() => console.log('runs after 3 seconds'));
 */

/*
console.log("Request data...")
let p = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("Preparing data")
        let Student = {
            age: 10,
            course: 3,
            university: "NAU"
        }
        resolve(Student)
    },4000)

})
p.then(newStud => {
    console.log(newStud)
    return new Promise((resolve, reject) =>
    {
        setTimeout(() => {
            newStud.friends = 10;
        }, 6000)
        resolve(newStud)
    })
}).then((mod) => console.log(mod))*/

/*
let img = document.querySelector('.img');
img.addEventListener("click", addClass )

function addClass () {

     img.classList.add("growing")
    let a = img
    img.addEventListener('transitionend', () => {
        addBack(a)
    });


}
function addBack(a){
    console.log("img", a)
img.classList.remove("growing")
        img.classList.add("growingBack")
    a.addEventListener('transitionend', addAlert);
}

function addAlert(){

console.log("Done")
    img.removeEventListener("transitionend", addAlert)

}*/
/*

let button = document.createElement("BUTTON");
button.innerText = "showCircle(150, 150, 100)"
document.body.appendChild(button)
document.body.style.background = "white"
button.style.border = "1px solid black"
button.style.width = "200px"
button.onclick = function (){
    showCircle(150,150,100)
}
let div = document.createElement("div")
document.body.appendChild(div)
div.classList.add("cx")
div.classList.add("cy")
div.classList.add("radius")

div.style.transitionDuration = "2s";
let wight = document.querySelector(".cx")
let height = document.querySelector(".cy")
let radiusCircle = document.querySelector(".radius")
wight.style.width = "0px"
height.style.height = "0px"
radiusCircle.style.borderRadius = "100px"
function showCircle(cx, cy, radius)
{
    div.style.background = "red"
    div.style.margin = "20px"

wight.style.width = `${cx}px`;
    height.style.height = `${cy}px`;
    radiusCircle.style.borderRadius = `${radius}px`;
}
*/

/*
let circle = document.querySelector(".circle")
let button = document.querySelector(".button")
button.addEventListener("click", clickHandler)
function clickHandler(){
    button.removeEventListener("click", clickHandler)
    showCircle(150,150,100)
}
function showCircle(cx, cy, radius) {
    circle.style.left = cx + "px"
    circle.style.top = cy + "px"
    circle.style.width = radius * 2 + "px"
    circle.style.height = radius * 2 + "px"
}*/

/*
function go() {
    showCircle(150, 150, 100, div => {
        div.classList.add('text');
        div.append("Hello, world!");
    });
}

function showCircle(cx, cy, radius, callback) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    setTimeout(() => {
        div.style.width = radius * 2 + 'px';
        div.style.height = radius * 2 + 'px';

        div.addEventListener('transitionend', function handler() {
            div.removeEventListener('transitionend', handler);
            callback(div);
        });
    }, 0);
}
*/
/*
let start = Date.now(); // remember start time
let timer = setInterval(()=> {
    let timePassed = Date.now() - start;
    console.log(timePassed)
    if (timePassed => 2000)
    {
        clearInterval(timer)
    }
    }
,2000)*/
/*
let prev = performance.now();
console.log(prev)
setInterval(()=> console.log(performance.now()), 10000)*/

/*
let prev = performance.now();
let times = 0;

requestAnimationFrame(function measureddd(faf) {


    if (times++ < 10) requestAnimationFrame(measure);
})
*/
let path = document.querySelector("#path")

let brick = document.querySelector("#brick")
/*

elem.onclick = () =>{

    animate({
        duration: 1000,
        timing: function bounce(timeFraction) {
            for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
                if (timeFraction >= (7 - 4 * a) / 11) {
                    return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
                }
            }
        },

        draw: function(progress) {

            elem.style.width = progress * 100 + '%';

        }
    });
};*/
/*
function makeEaseOut(timing) {
    return function(timeFraction) {
        return 1 - timing(1 - timeFraction);
    }
}

function bounce(timeFraction) {
    for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
            return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
        }
    }
}

let bounceEaseOut = makeEaseOut(bounce);

brick.onclick = function() {
    animate({
        duration: 3000,
        timing: bounceEaseOut,
        draw: function(progress) {
            brick.style.left = progress * 500 + 'px';
        }
    });
};*/

function delay(ms) {
    return new Promise(function(resolve, reject) {
        resolve(1);

        setTimeout((ms) => resolve(2),ms);
    });
}

jsada