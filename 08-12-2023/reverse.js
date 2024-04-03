let arr=[1,2,3,4,5,6,7,8];
// let rev_arr=arr.reverse();
// console.log(rev_arr)

for(let i=arr.length-1;i>=0;i--){
    console.log(arr[i])
}
console.log("----------------------------------")
for(let j in arr){
    console.log(arr[arr.length-j-1])
}