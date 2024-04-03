// function hello(item,op){
// console.log(item)
// console.log(op)
// }

// hello("nill","po")
//global scope
// let a=12
// function hello(){
// console.log(a)
// }
// console.log(a)
// hello()
//local scope
// function hello(){
// let a=12
// console.log(a)
// }
// console.log(a)
// hello()
// block scope
function hello() {
    {
      let a = 12;
      console.log(a);
    }
  
    console.log(a);
  }
  
  hello();
  // const hello=()=>{
  
  // }
  // hello()