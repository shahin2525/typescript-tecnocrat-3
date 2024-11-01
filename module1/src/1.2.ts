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
}
