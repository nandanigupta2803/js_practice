//Reduce - used in shopping cart
/*reduce function mainly use two values accumulator and currentValue
the accumulator takes its initial value what we have provided after function i.e. 0
cuurent value is the value of the array
It follows a loop first the initial value goes to accumulator and then add acc + currvalue 
in the second iteration the value of accumulator becomes acc + currvalue 
this happens till we are out of the array*/
const myNums = [1,2,3]
// const myTotal = myNums.reduce(function (accumulator, currentValue){
//     console.log(`acc is ${accumulator} and currentValue is ${currentValue}`);
//     return accumulator + currentValue
// }, 0)
// console.log(myTotal);

//using arrow functions
const myTotal = myNums.reduce( (acc , currvalue) => acc + currvalue , 0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "Js Course",
        price: 999
    },
    {
        itemName: "Python Course",
        price: 1999
    },
    {
        itemName: "Java Course",
        price: 2999
    }
]
const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(totalPrice);

