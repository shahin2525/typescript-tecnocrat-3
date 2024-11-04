type NormalUser = { name: string };
type AdminUser = { name: string; role: string };
const getUser = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    console.log(`user name is ${user.name} and user role is ${user.role}`);
  } else {
    console.log(`user name is ${user.name}`);
  }
};

const normalUser: NormalUser = {
  name: "rakib",
};
const adminUser: AdminUser = {
  name: "rakib",
  role: "admin",
};

getUser(adminUser);
