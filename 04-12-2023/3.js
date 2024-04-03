const fruits = ["apple", "banana", "orange", "apple", "banana"];
const a = fruits.reduce((count, fruit) => {
  count[fruit] = (count[fruit] || 0) + 1;
  console.log(count[fruit]);
  return count;
}, {});
console.log(a);