// 11.	Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not?
function isPrime(number) {
    
    if (number < 2) {
        return false;
    }

    
    for (let i = 2; i <number; i++) {
        if (number % i === 0) {
            
            return false;
        }
    }

    // If no divisors are found, the number is prime
    return true;
}

const testNumber = 17;
if (isPrime(testNumber)) {
    console.log(`${testNumber} is a prime number.`);
} else {
    console.log(`${testNumber} is not a prime number.`);
}
