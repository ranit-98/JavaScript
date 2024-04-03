// let text = "Hello every hhh";
// const arr = text.split(" ");
// console.log(arr)

// let text = "Hello everyone";
// const arr = text[2].split(" ");
// console.log(arr)

// let text = "Hello everyone";
// const arr = text.split("", 4);
// console.log(arr)

// const items = "apple, banana, orange, mango";
// const fruits = items.split(","); // item string k array te convert korar somoy ekta comma add hoy so total 2 to kore comma thakbe protitar majhkhane tai , die split korle amra ektai comma dekhabe
// const fruit1 = items.split(" ");
// console.log(fruits);
// console.log(fruit1);


const date = "2023-08-04";
const parts = date.split("-");
console.log(parts);



// let an="rittik"
// let b=an.toUpperCase(an)
// console.log(b)

// let am="RITTIK"
// console.log(am.toLowerCase(am));

let str="kolkata, the city of joy";
let result_str=str.replace("joy","love")
console.log(str)
console.log(result_str)

let str1="Ranit";
let result_str1=str1.substring(0,3);
console.log(result_str1)

let str2=" Ranit Dey ";
let result_str2=str2.trim();

console.log(str2+" ,length: "+str2.length)
console.log(result_str2+" ,length: "+result_str2.length)