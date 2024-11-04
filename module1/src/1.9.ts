class Counter {
  static count: number = 0;
  static increment() {
    return (Counter.count = Counter.count + 1);
  }
  static decrement() {
    return (Counter.count = Counter.count - 1);
  }
}
Counter.increment();
Counter.increment();
const count = Counter.increment();
console.log(count);
