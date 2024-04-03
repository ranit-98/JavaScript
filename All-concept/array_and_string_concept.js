//findIndex
let ranks = [1, 5, 7, 8, 10, 7];

let index = ranks.findIndex(
    (rank, index) => rank === 7 && index > 2
);

console.log(index);

//indexOf
var scores = [10, 20, 30, 10, 40, 20];
console.log(scores.indexOf(10)); // 0
console.log(scores.indexOf(30)); // 2
console.log(scores.indexOf(50)); // -1
console.log(scores.indexOf(20)); // 1

//lastIndexOf
console.log(scores.lastIndexOf(10));// 3
console.log(scores.lastIndexOf(20));// 5


//charAt
let myString = "Hello, World!";
let characterAtIndex = myString.charAt(7);

console.log(characterAtIndex);  // Outputs 'W'


//includes
let email = 'admin@example.com';
console.log(email.includes('@'));//true

//padStart
let str = '1234'.padStart(8,'*');
console.log(str); // "00001234"

//padEnd
str = 'abc'.padEnd(5,'*');
console.log(str); // "abc**"

//trimStart
const str1 = '   JavaScript   ';
const result = str1.trimStart();

console.log({ str1 });
console.log({ result });

//trimEnd
const str2 = '   JavaScript   ';
const result1 = str2.trimEnd();

console.log({ str2 });
console.log({ result1 });

//trim
let str3 = '  JS trim  ';
let result2 = str3.trim();

console.log(result);
