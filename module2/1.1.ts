{
  //

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  //   circle
  class Circle {
    constructor(public radius: number) {}
    getArea(): number {
      return Math.PI * this.radius;
    }
  }
  //   rectangle
  class Rectangle {
    constructor(public hight: number, public width: number) {}
    getArea(): number {
      return Math.PI * this.hight * this.width;
    }
  }
  const getArea = (pram: Shape) => {
    return pram.getArea();
  };
  const shape1 = new Shape();
  const shape2 = new Circle(10);
  const shape3 = new Rectangle(10, 10);
  console.log(getArea(shape1));
  //
}
