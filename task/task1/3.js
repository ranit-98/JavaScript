//3)JavaScript function in reverses a number.

let originalNumber=321;
let reversedNumber=reverseNumber(originalNumber.toString());
console.log("Reverse of "+originalNumber+" is: "+reversedNumber);

function reverseNumber(num){
    return num.split('').reverse().join('');
}