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
