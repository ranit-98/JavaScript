let a=12;
let b=12;
let c=12;

if(a===b && a===c && b===c){
    console.log("the given triangle is an equilateral");
}else if(a===b || a===c || b===c){
    console.log("the given triangle is an isosceles");
}else{
    console.log("the given triangle is a scalane");
}