//7)Write a JavaScript program to find duplicate values in a JavaScript array
function findDuplicates(arr) {
    return arr.filter((value, index, array) => array.indexOf(value) !== index);
  }
  
  // Example usage
  const myArray = [1, 2, 3, 4, 3, 2, 5, 6, 7, 8, 7];
  
  const duplicateValues = findDuplicates(myArray);
  
  console.log("Original Array:", myArray);
  console.log("Duplicate Values:", duplicateValues);
  