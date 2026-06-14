//for each loop does not return anything.
const coding = ["java", "css", "react", "js", "c++"]
// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })
// console.log(values); // it will always give undefined
//this is why we use 'filter'

const myNum = [1,2,3,4,5,6,7,8]
// const filteredNum = myNum.filter( (num) => num > 4)
// console.log(filteredNum);
// when we want to use curly braces in the call back function wemust use return.
const newNum = [1,2,3,4,5,6,7]
// const myNums = newNum.filter( (num) => {
//      return num > 4 // if we don't use the return keyword o/p will be an empty array
// })
// console.log(myNums);

//If we want to use for each
const myNums = []
newNum.forEach( (num) => {
    if (num > 4) {
        myNums.push(num)
    }
})
console.log(myNums);

