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

  //
}
