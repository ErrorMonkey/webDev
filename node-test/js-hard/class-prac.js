class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    console.log(this.width * this.height);
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  getArea() {
    const diagonal = Math.floor(Math.sqrt(this.width ** 2 + this.height ** 2));
    console.log("diagonal", diagonal);
  }
}
const rect1 = new Rectangle(10, 5);
rect1.getArea();
//
class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  getArea() {
    const triArea = (this.width * this.height) / 2;
    console.log("triArea", triArea);
  }
}
const tri1 = new Triangle(10, 25);
tri1.getArea();
//
class Circle extends Shape {
  constructor(width) {
    super(width);
    const radius = this.radius;
  }

  getArea() {
    const circleArea = Math.floor((this.radius / 2 ** 2) * 3.14);
    console.log("circleArea", circleArea);
  }
}
const circle1 = new Circle(234);
circle1.getArea();
