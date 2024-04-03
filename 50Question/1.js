//1.	Write a function that takes a string as input and returns the reverse of the string?

let originalString="webskitter";
let reversedString=reverseString(originalString);
console.log("Reverse of "+originalString+" is: "+reversedString);

function reverseString(str){
    return str.split('').reverse().join('');
}