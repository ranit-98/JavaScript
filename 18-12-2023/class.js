// class Polygon {
//     constructor() {
//       this.name = "hy";
//     }
//   }
  
//   const poly1 = new Polygon();
//   console.log(poly1.name)

class Person {
    constructor(...name) {
      this.name = name;
    }

    introduce() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }

  const otto = new Person("Ranit","Dey");

  otto.introduce()

  class Polygon {
        constructor() {
          this.name = "Taranath";
        }
        introduce() {
            console.log(`Hello, my name is ${this.name}`);
          }
      }
      
      const poly1 = new Polygon();
      poly1.introduce();