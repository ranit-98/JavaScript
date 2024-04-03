let arr=[18,16,20,10000,15,25]
let max=0;
let min=arr[0];
for(let i=1;i<=arr.length;i++){
    if(arr[i]>max){
        max=arr[i]
    }
    else if(arr[i]<min){
        min=arr[i]
    }
}
console.log("maximum number is: "+max);
console.log("minimum number is: "+min);