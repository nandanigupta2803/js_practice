const name = "Nandani"
const marks = "30"
 console.log(name + marks); // outdated sytnax
 console.log(name + " " + marks); // outdated syntax
 //we will use backticks (`) used in string interpolation
 console.log(`My name is ${name} and the mearks are ${marks}`);
 const namee = new String('NANDANI')
 console.log(namee[1]);
 console.log(namee.length);
 console.log(namee.toLowerCase());
 console.log(namee.charAt(3));
 console.log(namee.indexOf('A'));
 const newString = namee.substring(1,5);
 console.log(newString);
 const anotherString = namee.slice(-7,2); //neagative valuse can also be used, it strart form reverse
 console.log(anotherString);
 const newStringOne = "    Nandani  "
 console.log(newStringOne);
 console.log(newString.trim());
 const url = "www.nandani.yahaoo.com/google%20.com"
 console.log(url.replace('%20', '_'));
 console.log(url.includes('nandani'));
 const otherString = "nandani*gupta*com"
 console.log(otherString.split('*'));
 

 
 
 
 
 
 