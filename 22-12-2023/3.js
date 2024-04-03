//Write a JavaScript function that returns a string that has letters in alphabetical order.Example string : 'webmaster'
function sortedString(str) {
    return str.split('').sort().join('');
}

let str="webmaster"
let sortString=sortedString(str);
console.log(sortString)