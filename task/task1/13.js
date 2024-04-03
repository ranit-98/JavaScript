const color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const o = ["th", "st", "nd", "rd"];

for (let i = 0; i < color.length; i++) {
    if(i<=2){
        console.log(`${i+1}${o[i+1]} choice is ${color[i]}.`);
    }else{
        console.log(`${i+1}${o[0]} choice is ${color[i]}.`);
    }
   
}
