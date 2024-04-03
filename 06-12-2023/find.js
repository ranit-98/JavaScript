// let a=["abc","opp","ooolpxjic","dagcdghc","dauihcvh","dkjhchad"]
// let b=a.find(function(item){
//     return item.length===3

// })

// console.log(b)

const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
  ];

//   function isCherries(fruit) {
//     return fruit.name === "cherries";
//   }

//   console.log(inventory.find(isCherries));

//   let b=inventory.find(function(item){  // filter() returns an array containing the element that satisfies the condition,
//                                         // find() returns the element itself that satisfies the condition
//         return item.name=== "cherries"
    
//     })
    
//     console.log(b)
    

const a = [3, 10, 18, 20,21];
const f=a.find(chec)
function chec(l) {
  return l > 18;
}

console.log(f)

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ];
  const person = people.find((p) => p.name === "Bob");
  console.log(person); 


  const products = [
    { id: 1, name: "Widget", price: 10 },
    { id: 2, name: "Gadget", price: 20 },
    { id: 3, name: "Doodad", price: 30 },
  ];
  const product = products.find((p) => p.id === 2 && p.price === 20);
  console.log(product);
  