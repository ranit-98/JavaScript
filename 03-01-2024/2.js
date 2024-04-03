//2)Create a function that takes an array of numbers and returns a new array containing only the even numbers

function evenElementInArray(arr){
    const evenNumbers = arr.filter(number => number % 2 === 0);
    return evenNumbers;
}
let arr=[1,2,3,4,5,6]
console.log(evenElementInArray(arr))