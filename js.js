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
