function reverseString(str) {
    return str.split('').reverse().join('');
}

function sortedString(str) {
    return str.split('').sort().join('');
}


let originalString = "webskitters'";
let reversedString = reverseString(originalString);
let sortString=sortedString(originalString);

console.log("Reverse of "+originalString+" is: "+reversedString); 
console.log("Sorting in alphabetical order of "+originalString+" is: "+sortString);
