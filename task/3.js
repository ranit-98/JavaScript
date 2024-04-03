//[{name:”Nill”,address:”malda”},{name:”Rupam”,address:”Kolkata”},{name:”raju”,address:”Jalpaiguri}only print  2nd object

let arrObj=[
    {name:"Nill",
    address:"malda"
    },
    {name:"Rupam",
    address:"Kolkata"
    },
    {name:"raju",
    address:"Jalpaiguri"
    }
]

for(let key in arrObj){
    if(key==1){
        console.log(arrObj[key])
    }
}