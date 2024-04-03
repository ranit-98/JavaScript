//Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.Sample array : [1,2,3,4,5]
function findSecondLowestAndGreatest(numbers) {
    
    const sortedNumbers = numbers.slice().sort((a, b) => a - b);

   
    const uniqueNumbers = [...new Set(sortedNumbers)];

    
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
