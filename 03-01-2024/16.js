 async function fetching(){
    let raw= await fetch('https://randomuser.me/api/')
    let res= await raw.json()
    console.log(res)
 }
 fetching() 