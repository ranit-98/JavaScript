let ans=new Promise((res,rej)=>{
    if(true){
        return res();
    }
    else{
        return rej();
    }
})

ans.then(function(){
    console.log("RESOLVED");
}).catch(function(){
    console.log("REJECTED");
})


//promise chain-------------
let p1=new Promise((res,rej)=>{
    return res("sabse pahele ghar par aao");
})
let p2=p1.then(function(data){
    console.log(data);
    return new Promise((res,rej)=>{
        return res("gate kholo aur gate lagao");
    })
})
let p3=p2.then(function(data){
    console.log(data);
    return new Promise((res,rej)=>{
        return res("khana pakao khana khao");
    })
})
let p4=p3.then(function(data){
    console.log(data);
    return new Promise((res,rej)=>{
        return res("sojao");
    })
})
p4.then(function(data){
    console.log(data);
})


let p5=new Promise((res,rej)=>{return res("joy maa Durga")})
let p6=p5.then((data)=>{
    console.log(data)
    return new Promise((res,rej)=>{res("joy maa Kali")})
})
let p7=p6.then((data)=>{
    console.log(data)
    return new Promise((res,rej)=>{res("joy maa Tara")})
})
p7.then((data)=>{console.log(data)})