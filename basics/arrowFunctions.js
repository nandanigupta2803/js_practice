const user = {
    username: "Nandani",
    age: "22",
    welcomeMessage:function(){
       // console.log(`${this.username}, welcome to website`);
        //console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "Jim"
// user.welcomeMessage()
// console.log(this);
// function investigation() {
//     let user1 = "XYZ"
//     console.log(this.user1); //We can't accesss this in directly functions, objects should be i
// }
// investigation()
//HOW TO DECLARE FUNCTIONS THROUGH ARROW FUNCTIONS

const investigation = () => {
    let username = "Nandani"
    console.log(this);
    
}
//investigation()
// () => {} Basic syntax
// Basic Arrow Function
const addTwo= (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(2,3));

//Implicit Return
// const addtwo = (num1, num2) => num1 + num2
const addtwo = (num1, num2) => (num1 + num2) // we can also wrap them around parenthesis
// if we use curly braces then we have to to write "return"
//how to return object implcit
const add = () => ({username: "Nandani"})
console.log(add());

