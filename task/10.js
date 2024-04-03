//17)Edit in array of object  property without changing original array of object.


const originalArray = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "John" },
    { id: 3, name: "Alice" }
  ];
  
  
  function editProperty(originalArray, idToEdit, propertyName, newValue) {

    const newArray = originalArray.map(obj => {
     
      if (obj.id === idToEdit) {
        
        return { ...obj, [propertyName]: newValue };
      }
      
      return obj;
    });
  
    return newArray;
  }
  
 
  const newArray = editProperty(originalArray, 2, "name", "UpdatedName");
  
  console.log("Original Array:", originalArray);
  console.log("Updated Array:", newArray);
  

 // The line of code you provided is using the object spread syntax ({ ...obj }) to create a shallow copy of an object (obj) and then updating a specific property ([propertyName]) with a new value (newValue). This technique is often used to create a new object with some modifications while preserving the original object.