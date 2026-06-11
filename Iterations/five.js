// for each loop
 const coding = ["js", "react", "python", "java"]
// coding.forEach( function (item) {
//     console.log(item);
// } )

// We can also use arrow functions
coding.forEach ( (val) => {
    //console.log(val);
})
 
// another method if there is already a function
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe) // in this we have to give reference only no ned for this ->()

// coding.forEach( (item, index, arr) => {
//      console.log(item, index, arr);
     
// })

//Objects in array
const programing = [
    {
        languageName :"Javascript",
        languageFileName :"Js"
    },
    {
        languageName :"Pyhton",
        languageFileName :"Py"
    },
    {
        languageName :"Java",
        languageFileName :"Java"
    }
]
programing.forEach( (item) => {
    console.log(item.languageName); // accessing the elments of the objcts in array
})