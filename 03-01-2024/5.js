//5)Implement a function that takes an array of numbers and returns a new array containing only the prime numbers using the filter function.

function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
    
  }
  
  function filterPrimeNumbers(numbers) {
   
    const primeNumbers = numbers.filter(number => isPrime(number));
    return primeNumbers;
  }
  

  const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const resultArray = filterPrimeNumbers(inputArray);
  
  console.log(resultArray); 
  