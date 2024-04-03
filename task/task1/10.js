//10)Write a JavaScript program to create an object from the specified object, where all keys are in lowercase

function convertKeysToLowerCase(originalObject) {
    if (typeof originalObject !== 'object' || originalObject === null) {
      throw new Error('Input must be an object');
    }
  
    const newObject = {};
  
    for (const key in originalObject) {
      if (originalObject.hasOwnProperty(key)) {
        const lowercaseKey = key.toLowerCase();
        newObject[lowercaseKey] = originalObject[key];
      }
    }
  
    return newObject;
  }
  
  
  const originalObject = {
    Name: 'John',
    Age: 30,
    Occupation: 'Developer'
  };
  
  const objectWithLowercaseKeys = convertKeysToLowerCase(originalObject);
  
  console.log(objectWithLowercaseKeys);
  