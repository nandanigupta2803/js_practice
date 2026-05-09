//object.create (constructor method)

//object literals
const mySym = Symbol("Key1") // how to use a symbol
const user = {
    name: "Nandani",
    "Location" : "Jaipur",
    mySym: "Key1", //(Don't use like this)
    [mySym] :"Key1",
    age : 18,
    email: "abc@gmail.com"
}
console.log(user.email);// accssing the object 
//another method of accessing the object
// console.log(user[email]); // this will give error b/c email is not aconsidered as string
// console.log(user["email"]); //  that's why we use double qoutes
// console.log(user.Location);
// console.log(user.mySym); 
// console.log(typeof(user.mySym)); // here symbol is working as s string we want to use it as a symbol
// always remember the syntax os symbol is [mySym]
// console.log(user[mySym]);

//Properties
user.email = "abc@google.com" //overwriting 
//Object.freeze(user) // if we want no changes in the object
user.email = "xyz@google.com"
// console.log(user); // by this output we can also see the difference b/w the  symbol and string

user.greeting = function(){
    console.log("Hii User"); 
}
user.updatedGreeting = function(){
    console.log(`Hii, ${this.name}`);
    
}
console.log(user.greeting);
console.log(user.greeting());
console.log(user.updatedGreeting());





