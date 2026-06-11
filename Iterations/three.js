// for of 
// const arr = [10, 30, 50, 70, 90]
// for (const val of arr) {
//     console.log(val);
// }
// for of loop in strings
const greeting = "Hello World!"
for (const greet of greeting) {
    //console.log(greet);
}
//Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
//console.log(map);

for (const key of map) {
    console.log(key);
} // this will give an array of key pair both 
// we can use this method for destructuring the array
for (const [key, value] of map) {
    console.log(key, ':-' , value);
}
// this method is not applicable on objects
