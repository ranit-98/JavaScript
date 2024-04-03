//10)Implement a function that takes a variable number of arguments and returns the largest number using the rest parameter.

function findLargestNumber(...numbers) {
    
    let maxNumber = Math.max(...numbers);
  
    return maxNumber;
  }
  
  
  let result = findLargestNumber(10, 5, 8, 20, 15);
  
  console.log(result); 
  