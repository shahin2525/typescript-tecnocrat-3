{
  //
  type TUser = { name: string; age: number };

  const createPromise = (): Promise<TUser> => {
    return new Promise<TUser>((resolve, reject) => {
      const data: TUser = { name: "rakib", age: 20 };
      if (data) {
        resolve(data);
      } else {
        reject("data not found");
      }
    });
  };

  const showData = async (): Promise<TUser> => {
    const data: TUser = await createPromise();

    console.log(data);
    return data;
  };

  showData();

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
  };
  type Vehicle<T> = T extends keyof Sheikh ? true : false;
  type HasPlane = Vehicle<"ship">;

  type AreaString = {
    width: string;
    height: boolean;
  };
  type Height = AreaString["height"];

  type AreaString2<T> = {
    [key in keyof T]: T[key];
  };
  const area5: AreaString2<{ height: number; width: string }> = {
    height: 20,
    width: "10",
  };
  type Person = {
    name: string;
    age?: number;
    email: string;
    isMarried: boolean;
  };
  type user1 = Pick<Person, "isMarried">;
  type omit = Omit<Person, "email">;
  type required = Required<Person>;
  type ReadonlyPerson = Readonly<Person>;
  //
  const user8: ReadonlyPerson = {
    name: "rak",
    age: 20,
    email: "adfd",
    isMarried: false,
  };
  user8.age = 55;
}
