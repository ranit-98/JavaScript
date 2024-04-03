//3)Implement a function that calculates the sum of all the elements in an array using the reduce function.
const numbers = [14, 6, 42, 8, 78, 32];

const x = numbers.reduce((accu, current) => {
  return accu+current;
});

console.log(x);