{
  //

  class Person {
    constructor(
      public name: string,
      public age: number,
      public address: string
    ) {}
    getSleep(numOfHours: number) {
      console.log(`sleep time ${numOfHours}`);
    }
  }
  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }
  class Teacher extends Person {
    constructor(
      name: string,
      age: number,
      address: string,
      public designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
    takeClass(numOfHours: number) {
      console.log(`class time will be ${numOfHours}`);
    }
  }
  const stu = new Student("roki", 20, "dhaka");
  const teacher = new Teacher("roki", 20, "dhaka", "professor");
  stu.getSleep(7);
  teacher.getSleep(6);
  teacher.takeClass(2);
  //
}
