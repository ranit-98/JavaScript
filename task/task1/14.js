// const matrix = [
//     [1, 0, 0],
//     [0, 1, 0],
//     [0, 0, 1]
//   ];
  
//   for (let i = 0; i < matrix.length; i++) {
//     const rowString = matrix[i].join(' ');
//     console.log(rowString);
//   }
  
const resultArray = Array(3)
  .fill()
  .map((_, i) =>
    Array(3)
      .fill(0)
      .map((value, j) => (i === j ? 1 : value))
  );

console.log(resultArray);
