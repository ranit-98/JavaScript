// 8.	Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4

function findSecondLowestAndGreatest(numbers) {
    // Check if the array has at least two elements
    if (numbers.length < 2) {
        return "Array must have at least two elements.";
    }

    // Sort the array in ascending order
    const sortedNumbers = numbers.slice().sort((a, b) => a - b);

    //.sort((a, b) => a - b): This sorts the elements of the copied array in ascending order. The sort method takes a comparison function as an argument, and (a, b) => a - b is a concise arrow function that compares two elements (a and b). The function returns a negative value if a should be sorted before b, a positive value if a should be sorted after b, and 0 if they are equal. By subtracting b from a, the function sorts the elements in ascending order.

    // Remove duplicates
    const uniqueNumbers = [...new Set(sortedNumbers)];

    // Find the second lowest and second greatest numbers
    const secondLowest = uniqueNumbers[1];
    const secondGreatest = uniqueNumbers[uniqueNumbers.length - 2];

    return {
        secondLowest,
        secondGreatest
    };
}


const numbersArray = [1,2,3,4,5];
const result = findSecondLowestAndGreatest(numbersArray);

console.log(`Second Lowest: ${result.secondLowest}`);
console.log(`Second Greatest: ${result.secondGreatest}`);
