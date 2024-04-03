class Product {
    constructor(number1, number2) {
      this.num1 = number1;
      this.num2 = number2;
    }
    introduce() {
      console.log(`Hello, multiplication is ${this.num1 * this.num2}`);
    }
  }
  
  var rect1 = new Product(5, 10);
  rect1.introduce();