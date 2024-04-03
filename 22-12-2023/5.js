//Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.

function oddEven(i){
    if(i%2==0){
        console.log(`${i} is a even number`)
    }else{
        console.log(`${i} is a odd number`)
    }
}
let num=13
oddEven(num)