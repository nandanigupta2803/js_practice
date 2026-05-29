let a = 100 // Global scope
if (true) {
    let a = 20
    const b = 30
    console.log("Block Scope:", a); // block scope always within {}
}
console.log(a);
/* there is a difference between the scope from the "node" of the code environment and scope 
from the console.
DOM - document object model - how we can manipulate a HTML page through javascript
*/

function one(){
    const user = "Michael"
    function two(){
        const Place = "Scranton"
        //console.log(user);
    }
    //console.log(Place);
    two()
}
//one()
if (true) {
    const mother = "Pam"
    if (mother === "Pam") {
        const baby = "Cece"
        console.log(baby + " is the baby of " + mother + ".");
    }
}
// INTERESTING
console.log(addOne(3)) // in this type of function declaration it will run without any error
function addOne(num) {
    return num + 1
}
console.log(addTwo(7)) //Gives this error-> Cannot access 'addTwo' before initialization
const addTwo = function (num) { //another method of function declaration
    return num + 2
}
