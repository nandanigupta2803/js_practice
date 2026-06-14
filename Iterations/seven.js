//Map 
const myNum = [1,2,3,4,5]
//const newNums = myNum.map( (num) =>num + 10)
//console.log(newNums);

// Chaining (example :- mynum.map().map().filter())

const newNums = myNum
    .map( (num) => num*10)
    .map( (num) => num + 1) // in chaing the value of num is already processed and then passed to second map function 
    // so the value of num in the second chain is already num*10, we don't need to store it in a new variable.
    .filter( (num ) => num >= 40 ) // same foes with third chain 
console.log(newNums); 
