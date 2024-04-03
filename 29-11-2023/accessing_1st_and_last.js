let arr=[1,2,3,4,5,6];
for(let i=0;i<arr.length;i++){
    if(i===0){
        console.log(i+1+"st element is: "+arr[i]);

    } else if(i=arr.length-1){
        console.log(i+1+"th element is: "+arr[i]);
    }
}