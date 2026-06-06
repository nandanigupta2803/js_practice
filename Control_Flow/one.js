//If - else
// comparision operators - <, >, <=, >=, ==, !=(negative), ===(strict checking, 
// also checks the datatype), !== (negative of the previous)
// const temperature = 29
// if (temperature === 29 ){
//     console.log("less than 30");
// }else{
//     console.log("Greater than 30");
// }
// const score = 100
// if(score > 50){
//     const power = "Fly"
//     console.log(`User can ${power}`);
// }
// const balance = 1000
// if (balance < 500) {
//     console.log("Less than 500");
// } else if(balance < 750){
//     console.log("Less than 750");
// } else if(balance < 900){
//     console.log("Less than 900");
// } else {
//     console.log("Less than 1200");
// }
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true 
const loggedInFromEmail = false 
if (userLoggedIn && debitCard) {
    console.log("You are alllowed to buy course");
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("Welcome");
    

}