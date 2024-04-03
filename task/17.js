//24)how we reduce array in single value
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, current) => {
  return accumulator + current;
},0); // 0 is the initial value for the accumulator

console.log("Sum:", sum);
