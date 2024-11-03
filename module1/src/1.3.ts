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
  //
}
