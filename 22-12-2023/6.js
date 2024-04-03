//Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'

let a='tHE qUICK bROWN fOX'
let b = a.toLowerCase().replace(/(^|\s)[a-z]/g, (match) => match.toUpperCase());
console.log(b)