//13)Edit in array of object  property without changing original array of object.
function editProperty(array, index, propertyName, newValue) {
    let newArray = [...array];
    let updatedObject = {
      ...newArray[index],
      [propertyName]: newValue
    };
  
    newArray[index] = updatedObject;
  
    return newArray;
  }
 let originalArray = [
    { id: 1, name: 'Ram' },
    { id: 2, name: 'Shyam' },
    { id: 3, name: 'jodhu' }
  ];
  
  let newArray = editProperty(originalArray, 1, 'name', 'RadheShyam');
  
  console.log(originalArray); 
  console.log(newArray);     
  