//9)Create a function that takes any number of arguments (numbers)
//and calculates the average using the rest parameter.
function calculateAverage(...numbers) {
    let sum = numbers.reduce((total, current) => total + current);
  
    let average = sum / numbers.length;
  
    return average;
  }
  
  let result = calculateAverage(1, 2, 3, 4, 5);
  
  console.log(result); 
  