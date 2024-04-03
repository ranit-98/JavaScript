//1)Write a function that takes an array of numbers and returns a new array where each element is doubled.

function doubleElement(arr){
    doubleArrElem=arr.map((element)=>element*2)
    return doubleArrElem
    
}

let arr1=[1,2,3,4,5];
console.log(doubleElement(arr1))