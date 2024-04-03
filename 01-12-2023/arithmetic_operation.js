let a=10;
let b=5;
let add;
let sub;
let mul;
let div;
arith(a,b)

function arith(a,b){
    if(a>b){
        add=a+b;
        sub=a-b;
        mul=a*b;
        div=a/b;
        
    }else{
        add=a+b;
        sub=b-a;
        mul=a*b;
        div=b/a;
    }
    console.log("addition of "+a+" and"+b+" is "+add);
    console.log("substraction of "+a+" and"+b+" is "+sub);
    console.log("multiplication of "+a+" and"+b+" is "+mul);
    console.log("div of "+a+" and"+b+" is "+div);
}
    
