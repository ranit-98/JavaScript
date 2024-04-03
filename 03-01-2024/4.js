//4)Write a function that finds the maximum value in an array of numbers using the reduce function.

const numbers = [14, 6, 42, 8, 78, 32];

const x = numbers.reduce((accu, current) => {
  return Math.max(accu,current);
});

console.log(x);