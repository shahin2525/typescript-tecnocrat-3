{
  //

  const isAdmin = "";
  const isAdminOrGuest = isAdmin ?? "guest";
  const isAdminOrGuest2 = isAdmin ? isAdmin : "guest";
  type TUser = {
    id: string;
    age: number;
    address: {
      permanentAddress?: string;
      presentAddress: string;
    };
  };
  const user: TUser = {
    id: "sdfdfd",
    age: 20,
    address: {
      presentAddress: "cdfd",
    },
  };

  const permanentAddress =
    user?.address?.permanentAddress ?? "no permanent address";
  //

  const convertToSpeedMeter = (value: unknown) => {
    if (typeof value === "number") {
      const meter = (value * 1000) / 3600;
      console.log(meter);
    } else if (typeof value === "string") {
      const [data, unit] = value.split(" ");
      const meter = (parseFloat(data) * 1000) / 3600;
      console.log(meter);
    }
  };
  convertToSpeedMeter(1000);

  type arr = number[];
  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 * num2;
  interface arr2 {
    [index: number]: number[];
  }
  type genericArray<T> = Array<T>;
  const array1: genericArray<number> = [1, 2, 3];
  const array2: genericArray<string> = ["one", "two", "three"];
  const array3: genericArray<boolean> = [true, false, true];
  //
  const arrayObj: genericArray<{ name: string; age: number; id: string }> = [
    { name: "roki", age: 20, id: "dfdff" },
    { name: "soki", age: 10, id: "dfdfd" },
  ];
  type genericTuple<X, Y> = [X, Y];
  const manus: genericTuple<string, number> = ["x", 20];
  const manus2: genericTuple<string, boolean> = ["x", true];
  const userId: genericTuple<number, { name: string; age: number }> = [
    20,
    {
      name: "raki",
      age: 20,
    },
  ];
  interface Developer<T, X = null> {
    name: string;
    age: number;
    computer: { brand: string; price: number };
    smartWatch: T;
    bike?: X;
  }
  type SmartWatch = {
    brand: string;
    price: number;
  };
  type Bike = {
    brand: string;
    price: number;
    version: string;
  };
  const dev1: Developer<SmartWatch> = {
    name: "roki",
    age: 20,
    computer: {
      brand: "lenovo",
      price: 20,
    },
    smartWatch: {
      brand: "asus",
      price: 2000,
    },
  };
  const dev2: Developer<SmartWatch, Bike> = {
    name: "roki",
    age: 20,
    computer: {
      brand: "lenovo",
      price: 20,
    },
    smartWatch: {
      brand: "asus",
      price: 2000,
    },
    bike: {
      brand: "asus",
      price: 2000,
      version: "r15",
    },
  };
  // function generic
  const addCourseToDB = <T>(student: T) => {
    const course = "next level";
    return {
      ...student,
      course,
    };
  };
  const stu1 = addCourseToDB({ name: "rakig", age: 20 });
  const stu2 = addCourseToDB({ name: "rakig", age: 20, id: "454" });
}
