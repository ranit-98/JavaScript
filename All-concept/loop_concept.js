// -------for of -----------
let a=["a","m","k","kxjd","jd"]
console.log("for of....")
for(let i of a){
    console.log(i)
}

//----------for in---------------
let b=["a","m","k","kxjd","jd"]
console.log("for in....")
for(let i in b){
    console.log(i)
}

//----------for each-------------
const myAwesomeArray = [1, 2, 3, 4, 5]
let a1=myAwesomeArray.forEach(x => x * x)

console.log(a1,"f")
let b1=myAwesomeArray.map(x => x * x)
console.log(b1,"j")