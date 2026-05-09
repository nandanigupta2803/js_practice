//Declaration
// const myArr = [0, 1, 2, 3, 4]
// //console.log(myArr);
// const myArr2 = new Array(1,2,3,4)
// console.log(myArr2);
// console.log(myArr2[2]); // finding element through index
// myArr.push(5) // adding element
// console.log(myArr);
// myArr.pop() // removing element (Last by default)
// console.log(myArr);
//myArr.unshift(6); // the only problem is that it adds the element in the starting of array
// console.log(myArr);
// myArr.shift();
// console.log(myArr);// removes the element from starting as well
// console.log(myArr.includes(5));
// console.log(myArr.indexOf(1));
// const newArr = myArr.join()
// console.log(newArr);
// console.log(typeof(newArr)); // join converted the array in string

/*slice, splice
Difference b/w them is in slice -> (1,3) 3rd index is not inclusive
                       in splice->(1,3) 3rd index is inclusive
Also it manipulates the array we can see in the output in "C" the array is cut short to only
[0,4] removing 1,2,3 while using slice the array remains the same
*/
// console.log("A", myArr);
// const myAr1 = myArr.slice(1,3)
// console.log(myAr1);
// console.log("B", myArr);
// const myAr2 = myArr.splice(1,3)
// console.log(myAr2);
// console.log("C",myArr);

// const Numbers_1 = ["1", "2","3"]
// const Numbers_2 = ["4", "5", "6"]
// Numbers_1.push(Numbers_2)
// console.log(Numbers_1); // now the addition of 2nd array is taken as a element in the 1st array
// // that's not what we want

// const all = Numbers_1.concat(Numbers_2)//another method to add withot the problem just remember 
// // to always store this in a new variable
// console.log(all);
// We can also use spread operator for adding by this method we can addd more than two arrays
// const all_new = [...Numbers_1 , ...Numbers_2] //here we add more than two arrays
// console.log(all_new);

//when we have arrays in array
const real_array = [1,2,3,[4,5], 6,[7,[9,1]]]
const final_array = real_array.flat(2) // infinity is depth we can put any depth we want
console.log(final_array);

console.log(Array.isArray("HELLO")); // we can confirm if this an array
console.log(Array.from("HELLO")); //converts into array
console.log(Array.from({name: "Nandani"})); // in this case function iss confused whether to make
//an array of the keys given or indexes, that's why it gives an empty array

let s_1 = 10
let s_2 = 20
let s_3 = 30
console.log(Array.of(s_1,s_2,s_3)) // another method making array












