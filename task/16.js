//23))Create a function that takes any number of arguments and calculates the average using the rest parameter.
function calculateAverage(...numbers) {
    if (numbers.length === 0) {
      return undefined;
    }
  
    const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
  
    const average = sum / numbers.length;
  
    return average;
  }
  
  const average1 = calculateAverage(2, 4, 6, 8, 10);
  const average2 = calculateAverage(5, 10, 15);
  const average3 = calculateAverage();
  
  console.log("Average 1:", average1);
  console.log("Average 2:", average2);
  console.log("Average 3:", average3);
  