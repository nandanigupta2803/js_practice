console.log(2 > 1)
console.log("2" > 1);
console.log("02" > 1);
console.log(null > 0);
console.log(null == 0);
console.log(null>= 0); // true because "==" and ">=/=<" works differently comparison converts 
// the null into a number treating it as 0 that's why (3) null >= 0 is true but (3) null > 0 is false
console.log("2" == 2);
console.log("2" === 2);

const myFunction = function(){
    console.log("Hello World");
    
}
