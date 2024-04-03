const numbers = [14, 6, 42, 8, 78, 32];

const x = numbers.reduce((accu, current) => {
  return Math.max(accu, current);
});

console.log(x);