let a=["abc","opp","ooolpxjic","dagcdghc","dauihcvh","dkjhchad"]
let b=a.filter(function(item){
    return item.length===3

})

console.log(b)






let c = []
function hello(...item) {

    for (let i = 0; i < item.length; i++) {

        // console.log(i + " " + item[i])
        if (item[i].length === 3) {
            c.push(item[i])
        }


    }
    console.log(c)
}

hello("abc", "opp", "ooolpxjic", "dagcdghc","uuu", "dauihcvh", "dkjhchad")


let d=[
    {
        name:"nil",
        roll:345678

    },
    {
        name:"kcdj",
        roll:65789
        
    },
    {
        name:"ncjbd",
        roll:45678
        
    }
]

let e=d.filter(function(item){
    return item.roll>=50000

})
console.log(e)

let f=[]
for(let j=0;j<d.length;j++){
    if(d[j].roll<50000)
        f.push(d[j])

}
console.log(f)