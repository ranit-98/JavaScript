//18)Write a function that takes a variable number of arrays as arguments and returns a single array containing all the elements from the input arrays, using the rest parameter.

function mergeArrays(...arrays) {
   
    return [].concat(...arrays);
  }
  
  
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const array3 = [7, 8, 9];
  
  const resultArray = mergeArrays(array1, array2, array3);
  
  console.log(resultArray);
  