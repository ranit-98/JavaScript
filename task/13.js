//20)Write a function that finds the maximum value in an array of numbers using the reduce function.
function findMaxValue(arr) {
    if (arr.length === 0) {
      return undefined;
    }
  
    const maxValue = arr.reduce((max, current) => {
      return current > max ? current : max;
    }, arr[0]); // Set the initial value to the first element of the array
  
    return maxValue;
  }
  
  const numbers = [3, 8, 1, 6, 2, 10, 4];
  
  const maxNumber = findMaxValue(numbers);
  
  console.log("Maximum value:", maxNumber);
  