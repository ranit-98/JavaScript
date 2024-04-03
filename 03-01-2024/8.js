//8)Write a function that accepts any number of arguments and returns their sum using the rest parameter.
function sum(...numbers) {
   
    return numbers.reduce((total, current) => total + current);
  }
  
  const result = sum(1, 2, 3, 4, 5);
  
  console.log(result); 
  