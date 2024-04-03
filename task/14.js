//21)Write a function that takes an array of numbers and returns a new array where each element is doubled.

function doubleArrayElements(arr) {
    const doubledArray = arr.map(element => element * 2);
    return doubledArray;
  }
  
  
  const originalArray = [1, 2, 3, 4, 5];
  
  const doubledArray = doubleArrayElements(originalArray);
  
  console.log("Original Array:", originalArray);
  console.log("Doubled Array:", doubledArray);
  