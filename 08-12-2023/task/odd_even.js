function odd_even(num){
if(num%2===0)
    console.log(num+" is a even number");
else
    console.log(num+" is a odd number");
}

for(let i=1;i<=15;i++){
    odd_even(i)
}