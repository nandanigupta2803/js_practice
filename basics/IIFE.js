//Immediately Invoked Function Expressions(IIFE) -> to save from polluting from global scope
// basic syntax :()() first parenthesis is for function definition, second one is for calling the function

(function investigation(){
    //Named IIFE
    console.log(`DB Connect`);
}) (); // this semicolon we have to put explicitly b/c iife knows how to invoke but does not know
// when to end the context, especially when we have to write two IIFEs

// we can also use arrow function in iife
( (name) => {
    console.log(`DB Connect Again ${name}`);
})('Nandani') // we can pass normally argument here since this is used for calling the function