//6)Create a function that takes an array of objects and sorts them based on a specified property using the sort function.

function sortByProperty(array, property) {
    
    array.sort((a, b) => {
      const valueA = a[property];
      const valueB = b[property];
  
      if (valueA < valueB) {
        return -1; 
      } else if (valueA > valueB) {
        return 1; 
      } else {
        return 0; 
      }
    });
  
    return array;
  }
  
  
  const arrayOfObjects = [
    { name: "Ram", age: 30 ,  id:102 },
    { name: "Shyam", age: 25, id:89},
    { name: "Madhu", age: 35 , id:59}
  ];
  
 
  const sortedArray = sortByProperty(arrayOfObjects, 'age');
  
  console.log(sortedArray);

  