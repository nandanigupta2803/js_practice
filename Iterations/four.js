//For in loop
const myObj = {
    js : 'Javascript',
    cpp : 'C++',
    rb : 'Ruby',
    swift : 'swift by apple'
}
//for printing keys
for (const key in myObj) { 
    //console.log(key);
}
// for printing values
for (const key in myObj) {
    //console.log(myObj[key]);
}
//for key value pair
for (const key in myObj) {
    //console.log(`${key} is shortcut for ${myObj[key]}`);
}
 // For in loop in array
const language = ["js", "react","cpp"]
for (const key in language) {
    //console.log(key);
    // here we are getting keys of the array that is technically index so for values
    console.log(language[key]);
}
/* 
To remember
This is the main difference b/w for of and for in loop 
In for of we can get the values directly but in for in loop we get keys

*/