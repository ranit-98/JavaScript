function Person(first, last, age, eye) {        //function constractor
    this.firstName = first; 
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

  const myFather = new Person("John", "Doe", 50, "blue");
console.log(myFather.firstName)

//The Function() constructor creates Function objects. Calling the constructor directly can create functions dynamically,