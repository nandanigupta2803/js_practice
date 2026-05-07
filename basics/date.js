let aDate = new Date()
// console.log(aDate);
// console.log(aDate.toString());
// console.log(aDate.toDateString());
// console.log(aDate.toISOString());
// console.log(aDate.toJSON());
// console.log(aDate.toLocaleString());
// console.log(aDate.toLocaleDateString());
// console.log(aDate.toLocaleTimeString());
// console.log(aDate.toTimeString());
// console.log(typeof aDate);
// let myDate = new Date(2026,4,20); // months start from 0
// console.log(myDate.toString());
// let oneDate = new Date(2026,4,7,5,7) //We can also provide specific time like hours and minutes
// console.log(oneDate.toString());
let otherDate = new Date("2026-05-07") //yyyy-mm-dd
 console.log(otherDate.toLocaleString());

//Timestamp - comes handy while creating quizzes and poles
let myTimestamp = Date.now()
console.log(myTimestamp); // time in milliseconds
console.log(otherDate.getTime());
console.log(Date.now()/1000); // converted in seconds but the output comes in decimal so
console.log(Math.floor(Date.now()/1000)); // converted into integer value

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getFullYear());
console.log(newDate.getUTCDay());

// console.log(`Today is the ${newDate.getDay()}rd day in the this week`)

newDate.toLocaleString('default', {
    weekday:"long"
})









