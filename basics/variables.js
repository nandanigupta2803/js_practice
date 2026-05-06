const accountId = 178
let accountEmail = "xyz@gmail.com"
var accountPassword = "123"
accountCity = "Jaipur"
let accountState

//accountId = 28 // not allowed
console.log(accountId);
accountEmail = "abc@gmail.com"
accountPassword = "!@#"
accountCity = "ggn"
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
/*
Prefer not to use "var" 
because of issue in block scope and functional scope
*/
