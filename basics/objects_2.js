//const User = new Object() -> Singlrton
// Declaring Objects
const User = {}  // ->non singleton
User.id = "XYZ",
User.name = "Nat"
User.age = "56"
//console.log(User);

// Declaring Objects in objects
const otherUser = {
    email: "abc@gmail.com",
    fullname : {
        userFullName : {
            firstName : "Bob",
            lastName : "Vance"

        }
    }
}
console.log(otherUser.fullname.userFullName.firstName);
const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"c", 4:"d"}
const obj = {obj1,obj2}
//console.log(obj); // It gets a problem lik we faced in array that is it gives object in object
const obj3 = Object.assign({}, obj1, obj2) // we use assign operator to solve ths problem
//To remember: we use empty paranthesis in this b/c we consider that this adddition is going into that space
//console.log(obj3);
const finalObj = {...obj1,...obj2} //we mostly use spread operator
//console.log(finalObj);
// console.log(User);
// console.log(Object.keys(User)); // returns an array
// console.log(Object.values(User));
// console.log(Object.entries(User));
console.log(User.hasOwnProperty('age')); // we can confirm the properties of the object

//Destructuring the object 
const course = {
    courseName : "JS",
    coursePrice : "1500",
    coursePlatform : "YouTube"
}
const {courseName :cName} = course // const {Property : New name (if we want to give a new name 
// to the property)}= object
//console.log(courseName);
console.log(cName);

// {
//     "Name": "JS",
//     "Price" : "Free",
//     "Duration" : "4 months"
// }












