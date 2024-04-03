//19)Create a function that takes an array of objects and sorts them based on a specified property using the sort function

function sortByProperty(array, property) {
    return array.sort((a, b) => {
     
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
  }
  

  const arrayOfObjects = [
    { name: "John", age: 30 },
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 }
  ];
  
 
  const sortedArray = sortByProperty(arrayOfObjects, "age");
  
  console.log(sortedArray);
  