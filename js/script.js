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
