{
  //

  class Animal {
    constructor(public name: string, species: string) {}
    makeSound() {
      console.log("i am sounding");
    }
  }
  //   dog
  class Dog extends Animal {
    constructor(public name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log("i am geu");
    }
  }
  //   Cat
  class Cat extends Animal {
    constructor(public name: string, species: string) {
      super(name, species);
    }
    makeMeu() {
      console.log("i am meu");
    }
  }
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };
  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeu();
    } else {
      animal.makeSound();
    }
  };

  const dog = new Dog("jerman", "dog");
  const cat = new Cat("indian", "cat");
  getAnimal(cat);
  //
}
