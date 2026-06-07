// for
for (let i = 0; i < 10; i++) {
    const element = i;
    //console.log(element);
    
}
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is in middle");
    }
   // console.log(element); 
}

for (let i = 0; i <= 10; i++) {
    //console.log(`otuer loop value: ${i}`);
    for (let j = 0; j <= 5; j++) {
        //console.log(`inner loop value: ${j} and inner loop ${i}`);  
        //console.log(i + '*' + j + '=' + i*j);
    }
}
myArray = [2,4,6,8,10,12,14]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}
// for (let i = 0; i < 10; i++) {
//     if (i == 5) {
//         console.log("Detected 5");
//         break
//     }
//     console.log(`Value of i is ${i}`);
// }
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        console.log("Detected 5");
        continue
    }
    console.log(`Value of i is ${i}`);
}