//)Write a JavaScript program to check if the given argument is a string.

function isString(input) {
    return typeof input === 'string';
  }
  
  
  var myString = "Hello, World!";
  var myNumber = 42;
  
  console.log(isString(myString));  // Output: true
  console.log(isString(myNumber));  // Output: false
  