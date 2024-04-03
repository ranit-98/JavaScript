//define a async function 

async function abcd(){
    let raw=await fetch('https://randomuser.me/api/')
    let result=await raw.json();
    console.log(result);
}
abcd();