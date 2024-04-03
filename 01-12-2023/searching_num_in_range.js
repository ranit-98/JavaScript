let num=19;
let flag=0;
for(let i=10;i<20;i++){
   if(i===num)
        flag=1;
   else
         flag=0;
}
if(flag===1) 
    console.log("the number "+num+" is present")
else
    console.log("The number "+num+" is not present")