// Truthy and Falsy Values
// truthy values are those which is assumed truesame ith falsy values
// const userEmail = "N@Nandani.ai"
// if (userEmail) {
//     console.log("Got User Email");
// }
// else{
//     console.log("Don't have a valid Email");
// } // In this we didn't compare the string still it is executing it means it is assuming this 
// string is right
const UserEmail = ""
if (UserEmail) {
    console.log("Got User Email");
}
else{
    console.log("Don't Have a valid email");
} // while in this case where we give an empty string it is executing the else condition
//Some Examples
//Falsy Values --> false, 0 , -0, BigInt 0n, "", null, undefined, NaN
//Truthy Values --> "0", 'false', " ", [], {}, function(){} (anything with a string)

//to check an empty array
// const newUserEmail = []
// if (newUserEmail.length === 0) {
//     console.log("Array is empty");
// }

//how to check empty object
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) { // (object.keys will return an array)
    console.log("Object is empty");
}

//Nullish Coalescing Operator (??) --> Null , undefined 
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
// val1 = 10 ?? null
val1 = null ?? 10 ?? 30
console.log(val1);
// not to be confused between Nullish operator and ternery operator
// ternary Operator 
// condition ? true : false
Price = 100
Price <= 80 ? console.log("Less than 80") : console.log("More than 80");


