class Person {
    constructor(name) {
      this.name = name;
    }
  
    greet() {
      console.log(`Hello ${this.name}`);
    }
  }
  
  // inheriting parent class
  class Student extends Person {
    constructor(namee) {
      console.log("Creating student class");
  
      // call the super class constructor and pass in the name parameter
      super(namee);
      console.log(namee);
    }
  }

  let student1 = new Student("Jack");
  student1.greet();