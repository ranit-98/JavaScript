function removeElementFromArrayInPlace(arr, elementToRemove) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === elementToRemove) {
        arr.splice(i, 1);
      }
    }
  }
  
  let originalArray = [23,56,4,78,5,63,45,210,56];
  let elementToRemove = 56;
  
  removeElementFromArrayInPlace(originalArray, elementToRemove);
  
  console.log(originalArray);
  