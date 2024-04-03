const numbers = [175, 50, 25];
const result = numbers.reduce(myFunc);  

function myFunc(total, num) {  // total e first no ta nebe ar num e baki number gulo nebe array theke then je operation amra chai tai krte pari..
    // console.log("a "+num)
  
  return total - num;  // ekhane amra minus kre6 ...
}

console.log(result);

const s = ["apple", "banana", "cherry", "date"];
const result1 = s.reduce(myFunc1);

function myFunc1(total1, num) {
  
  return total1 + num;
}

console.log(result1);