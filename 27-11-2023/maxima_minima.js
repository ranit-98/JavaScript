let arr=[18,16,20,100,15,25]
let max=0;
let min=arr[0];
// for(let i=1;i<=arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i]
//     }
//     else if(arr[i]<min){
//         min=arr[i]
//     }
// }
// console.log("maximum number is: "+max);
// console.log("minimum number is: "+min);


for(let i in arr){
    if(arr[i]>max){
         max=arr[i]
            }
    else if(arr[i]<min){
                min=arr[i]
            }
        }       
console.log("maximum number is(using for in): "+max);
console.log("minimum number is(using for in): "+min);

// let b=arr.map((item)=>{
//     if(item>max){
//         max=item
//     }
//     else if(item<min){
//         min=item
//     }
// })

// console.log("maximum number is( using map): "+max);
// console.log("minimum number is ( using map): "+min);

// for(let i of arr){
//     if(i>max){
//         max=i
//     }
//     else if(i<min){
//         min=i
//     }  
// }
// console.log("maximum number is(using for of): "+max);
// console.log("minimum number is(using for of): "+min);
