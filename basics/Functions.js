function Say(){
    console.log("H");
    console.log("I"); 
}
//Say()

function add(num1, num2){ // Parameters -> during function definition (num1,num2)
    // let result = num1 + num2
    // return result
    //console.log("Addition done"); // this won't print ever b/c after return statement function 
    // doesn't do anything
    return num1 +num2 //another method, saves memory 
}
const result = add(4,7) // Arguments -> during calling function (3,4)
//console.log(result);


function loginMeassage(username ){
    if (username === undefined) {
        console.log("Please Enter a Valid Username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginMeassage("Michael"))
// console.log(loginMeassage());

function cartPrice(...num1){ //Rest operator(...)is used to print all the values in the argument 
    return num1
}
// console.log(cartPrice(100, 400, 700));

function CartPrice(val1, val2, ...num){ //we can use rest operator like this as well, first 
//value is stored in val1, same the with val2, rest of the values are gonna pass into rest op.
    return num
}
// console.log(CartPrice(400, 500, 7000, 600, 700));

// const user = {
//     objectName : "Js course",
//     Price:"1999"
// }
function handlObject(anyObject){
    console.log(`Object name is ${anyObject.objectName} and price is ${anyObject.Price}`);
}
//handlObject(user)

//alertnative mathod (direct)
handlObject({
    objectName : "Js course",
    Price: "2000"
})


