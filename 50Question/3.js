// 3.	Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223

let originalNumber=32243;
let reversedNumber=reverseNumber(originalNumber.toString());
console.log("Reverse of "+originalNumber+" is: "+reversedNumber);

function reverseNumber(num){
    return num.split('').reverse().join('');
}