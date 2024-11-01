type TUser = {
  readonly company: string;
  name: string;
  age: number;
  isMarried: boolean;
};

const user: TUser = {
  company: "alibaba",
  name: "azgor",
  age: 20,
  isMarried: false,
};
user.name = "fa";

const arr: number[] = [1, 2, 3, 4];
const doubleNumber = (num1: number, num2: number): number => num1 * num2;
const doubleNumber2: number[] = arr.map((elem: number): number => elem * elem);
const arr1 = [1, 1, 3];
const arr2 = [3, 4, 5];
const arr3 = arr1.push(...arr2);
const obj1 = { name: "ra", age: 20 };
const obj2 = { name: "mon", age: 30 };
const obj3 = { ...obj1, ...obj2 };
const func = (...names: string[]) => {
  names.forEach((name: string) => console.log(`friends are ${name}`));
};
func("rakib", "sakib", "musfiq");
const obj4 = {
  id: "fddfd",
  name: {
    firstName: "mez",
    middleName: "abe",
    lastName: "per",
  },
  age: 14,
};
const {
  id,
  age,
  name: { lastName, middleName, firstName },
} = obj4;

type TAdd = (num1: number, num2: number) => number;

const add: TAdd = (num1, num2) => num1 + num2;
