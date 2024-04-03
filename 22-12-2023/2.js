//Write a JavaScript function that reverses a number.

function reversedNumber(num){
    return num.split('').reverse().join('')
}

let num=123;
let reversenum=reversedNumber(num.toString())
console.log(reversenum)