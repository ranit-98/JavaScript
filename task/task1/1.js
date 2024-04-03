//1)1 to 20 print only even numbers

let start=1;
let end=20;

for(let i=start;i<=end;i++){
    if(i%2==0){
        console.log(i);
    }else{
        continue;
    }
}