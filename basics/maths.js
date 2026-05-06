const score = 40
console.log(score);
const value = new Number(100)
console.log(value);
// console.log(value.toString().charAt(0)); // now it is a string, we can apply all the properties of string
// console.log(value.toFixed(2)); // after decimal 
const newNumber = 56.789;
console.log(newNumber.toFixed(2));

console.log(newNumber.toPrecision(2));
//const otherNumber = 1000000;
//console.log(otherNumber.toLocaleString()); // just for fun
// console.log(otherNumber.toLocaleString('en-IN')); // just for fun also but make it Indian


//MATH
console.log(Math.PI);
console.log(Math.abs(-6)); // negative to positive
console.log(Math.round(7.7));
console.log(Math.ceil(7.1)); // it will round off the number even it is slightly bigger after decimal
console.log(Math.floor(7.9)); // it will nor round off even if there is bigger number after decimal
//console.log(Math.min(4,7));

console.log(Math.random()); // gives value b/w 0 and 1
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random()*10+1)); // for integers

//general Formula
min = 50
max= 100
console.log(Math.floor(Math.random()*(max - min+1)+ min));




