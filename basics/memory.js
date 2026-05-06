// Memoery
//Stack (Primitive datatype), heap (non primitive)
//Stack - copy
let myName = "Nandani"
let anotherName = myName
anotherName = "Nandani Gupta"
console.log(anotherName);
console.log(myName);
//Heap - Reference
let userOne = {
    email:"abc@gmail.com", 
    age: "23"
};
let userTwo = userOne
userTwo.email = "xyz@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);




