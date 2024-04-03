// 5.	Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'

function sortedString(str) {
    return str.split('').sort().join('');
}

let originalString = "webskitters'";
let sortString=sortedString(originalString);
 
console.log("Sorting in alphabetical order of "+originalString+" is: "+sortString);