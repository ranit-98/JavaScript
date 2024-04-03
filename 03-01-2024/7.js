function removeDuplicates(array) {
    let uniqueArray = array.filter((value, index, self) => {
        return self.indexOf(value) === index;
       
    });
  
    return uniqueArray;
  }
  
 
  let arrayWithDuplicates = [1, 2, 3, 4, 2, 5, 6, 1, 7, 8, 8, 9];
  let arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
  
  console.log(arrayWithoutDuplicates);
  
  