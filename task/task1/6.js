//6)There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.

function computeSumOfArrays(arr1, arr2) {
    const resultArray = [];
  
    if (arr1.length !== arr2.length) {
      console.log("Arrays must have the same length.");
      return resultArray;
    }
  
    for (let i = 0; i < arr1.length; i++) {
      resultArray.push(arr1[i] + arr2[i]);
    }
  
    return resultArray;
  }
  

  const array1 = [1, 2, 3, 4, 5];
  const array2 = [5, 4, 3, 2, 1];
  
  const sumArray = computeSumOfArrays(array1, array2);
  
  console.log("Array 1:", array1);
  console.log("Array 2:", array2);
  console.log("Sum of Arrays:", sumArray);
  