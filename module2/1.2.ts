interface Truck {
  startTruck(): void;
  stopTruck(): void;
  runTruck(): void;
}
class Car1 implements Truck {
  startTruck(): void {
    console.log("car start 1");
  }
  stopTruck(): void {
    console.log("stop truck 1");
  }
  runTruck(): void {
    console.log("run truck 1");
  }
}
const car1 = new Car1();
car1.startTruck();
car1.stopTruck();
car1.runTruck();
// abstract class
abstract class Car2 implements Truck {
  abstract startTruck(): void;
  abstract stopTruck(): void;
  abstract runTruck(): void;
}
class Car3 extends Car2 {
  startTruck(): void {
    console.log("car start 3");
  }
  stopTruck(): void {
    console.log("car stop 3");
  }
  runTruck(): void {
    console.log("run truck 3");
  }
}

const car3 = new Car3();
car3.runTruck();
car3.stopTruck();
car3.startTruck();
