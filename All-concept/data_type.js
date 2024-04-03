// "" 9 null undefined 999n symbol true false  

// Object-- key value pair
// {
//     p:"h"
// }


//  let a="kp"
// let a="o" --let can not be re-declared but only can be re-assigned

var h="j"
var h="j"

const y="h"
//  y="i" ---constant can not be re-assigned or re-declared

// let str="sagnik"
// console.log("value of string : "+str)

let obj = {
    name: "Narendra Modi",
    age:70
}

for (let key in obj) {
   console.log(key +" : "+obj[key])
}



console.log("value of the key name is: "+obj.name)

let arr=["k","u","p","h"]


arr.forEach(element => {
    console.log(element)
});

// console.log("type of array: "+typeof(arr))
// console.log("array: "+arr)
console.log("2nd element of array is: "+arr[1])
