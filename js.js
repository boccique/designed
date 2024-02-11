"use strict";
/*
let name = "John";
admin = name;
alert(admin)*/

/*let name = "John";
admin = name;
alert(`Hello ${admin}!`);*/

/*

let MyLove = prompt("Who's loving you?", 'Anastasia');
alert(`${MyLove} falls in love with you!`);

let being;
being = prompt("Who are you?");
alert(`I am actually ${being}`);

result = confirm("Are you this dummy and pretty kitty here? 🐈");
*/

/*
let LoveQuestion = prompt(`Do you love me? pick (yes/no)`);
if(LoveQuestion === `yes`) alert(`I love you too!`);
*/

/*let name = prompt(`What's your name?`);
if(name === name){
    alert(`Hello, ${name}! And welcome to our website!`);
}*/

// let LoveQuestion = prompt(`Do you love me? pick(yes/yes)`)
// if(LoveQuestion === `yes`){
//     alert(`I love you too, baby!`);
// }else if(LoveQuestion === `no`){
//     alert(`But i love you...`);
// }else{
//     alert(`...`);
// }

/*let AcceptableAge = prompt(`What's your age?`, ``);
age = AcceptableAge;
if (age > 18){
    // alert(`You are old enough!`);
    AcceptableAge = true;
    alert(`You are old enough!`);
} else {
    // alert(`You are still young, go out of here, now!`);
    AcceptableAge = false;
    alert(AcceptableAge);
}*/

/*let WarQuestion = prompt(`When WW2 begins?`, ``);
(WarQuestion === String(1939)) ?
    alert(`You are right! Well done!`) :
    alert(`You are wrong... try it again!`);*/

// WHILE
/*let et = 1;
while (et < 3){
    alert(et);
    ++et;
}*/

// DO WHILE
/*
let et;
do {
    prompt(`Would you marry me?`, et);
} while(et !== `yes`);*/

// FOR
/*
let x = 0;
for (x = 0; x<=4; x++){
    alert(x);
}
alert(x);*/

// INFINITE FOR
/*
for (;;){
    alert(`I love you ^^!`);
}*/

/*let sum = 0;
while (true) {
    let value = prompt(`To count - press the number button!`);

    if (value === ``)break;

    sum += value;
}
alert(`Equals = ${sum}`);*/

/*
let word = `I love you, too!`;
while (true) {
    let value = prompt(`Do you love me>>>?`);
    if (value === `yes`)break;
}
alert(word);
*/

// CONTINUE
/*for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) continue;
    alert(i);
}*/

// for (let i = 0; i <= 10; i+=2) alert(i)

/*let i = 0;
while (i < 3){
    alert(`number: ${i}`);
    i++;
}*/

// SWITCH
/*
let i = 7+7;
switch (i){
    case 4:
        alert(`TOO LOW`);
        break;
    case 10:
        alert(`ALMOST`);
        break;
    case 14:
        alert(`YOU ARE RIGHT!!!`)
}
*/

// Function
/*
let Myname = `John`;
function ShowMyName(){
    alert(`Your name is ${Myname}`);
}
ShowMyName()*/

/*
function sum(x, y){
    return x + y;
}
function subtract(x, y){
    return x-y;
}
function miltyply(x,y){
    return x*y;
}
function divide(x,y){
    return x / y;
}
alert(sum(2, 7))
alert(subtract(2, 7))
alert(miltyply(2, 7))
alert(divide(2, 7))
*/

/*
function IsEvenOrOdd(X){
    X = prompt(X);
    if (X % 2 === 0){
        alert(`This number is even!`);
    }else{
        alert(`This number is odd!`);
    }
}
IsEvenOrOdd();*/

/*function IsEvenOrOdd(X){
    X = prompt(X);
    X % 2 === 0 ? alert(`This number is even!`) : alert(`This number is odd!`);
}
IsEvenOrOdd();*/

// FUNCTION EXPRESSION
/*
let IsEvenOrOdd = function(x){
    x = prompt(`Enter your number to learn even it or odd:`, x);
    x % 2 === 0 ? alert(`Your number is even!`) : alert(`Your number is odd!`);
};
IsEvenOrOdd();*/

// FUNCTION ARROW
/*const age = function(x){
    x = prompt(`What's your actual age?`);
    alert(`Your actual age is ${x}`);
};
age();*/
// it is function expression

// const age = (x) => alert(`Your age is ${x}`);
// age(prompt(`What's your actual age?`));

// const age = (x) => {
//     x = prompt(`What's your age?`);
//     alert(`Your age is ${x}`);
// };
// age();


