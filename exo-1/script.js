// you can write js here
console.log('hello from file'); 
var kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");

let celsius = kelvins - 273;

let fahrenheits = celsius * (9/5) + 32;

console.log(Math.floor(fahrenheits));