let score = "28"
console.log(typeof score);
console.log(typeof(score)); // Both ways are correct second line is using score as a method

let valueInNumber = Number(score)
console.log(score);
console.log(typeof(valueInNumber)); // converted into number
// let score = "28q"
// then print valueInNumber
 console.log(valueInNumber);
 // by printing this we got 'NaN' not a number it is a special type it comes when the the 
 // number is not pure(integral).
// integer -> integer
//integer + string -> NaN (32q -> NaN)
let IsLoggedIn = 1
let booleanIsLoggedIn = Boolean(IsLoggedIn)
console.log(booleanIsLoggedIn);
// Coneverted into boolean
// 1 - true, 0 - false
// "" - false
// "abc" - true 
let = anyNumber = 28
let stringNumber = String(anyNumber)
console.log(stringNumber);
console.log(typeof(stringNumber));
// conversion into string

