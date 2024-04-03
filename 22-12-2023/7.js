//There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.Sample array :array1 = [1,0,2,3,4];array2 = [3,5,6,7,8,13];

function computeSumOfArrays(arr1, arr2) {
    const maxLength=Math.max(arr1.length,arr2.length);
    const resultArray = [];
  
    for (let i = 0; i < maxLength; i++) {
        const val1=arr1[i]||0;
        const val2=arr2[i]||0;
        resultArray.push(val1 + val2);
    }
  
    return resultArray;
  }
  

  const array1 = [1,0,2,3,4];
  const array2 = [3,5,6,7,8,13];
  
  const sumArray = computeSumOfArrays(array1, array2);
  
  console.log("Array 1:", array1);
  console.log("Array 2:", array2);
  console.log("Sum of Arrays:", sumArray);
  