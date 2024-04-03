// 9.	Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

function odd_even(num){
    if(num%2===0)
        console.log(num+" is a even number");
    else
        console.log(num+" is a odd number");
    }
    
    for(let i=0;i<=15;i++){
        odd_even(i)
    }