//11)Write a function that takes a variable number of arrays as arguments and returns a single array containing all the elements from the input arrays, using the rest parameter.

function mergeArrays(...arrays) {
    let mergedArray = [].concat(...arrays);
    return mergedArray;
  }
  
  let array1 = [1, 2, 3];
  let array2 = [4, 5, 6];
  let array3 = [7, 8, 9];
  
  let resultArray = mergeArrays(array1, array2, array3);
  
  console.log(resultArray); 
  