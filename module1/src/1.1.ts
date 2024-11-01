{
  type FrontendDeveloper = "fakibaj" | "juniorDeveloper";
  type FullStackDeveloper = "frontendDeveloper" | "backendDeveloper";
  type Developer = FrontendDeveloper | FullStackDeveloper;

  // const frontendDeveloper:FrontendDeveloper = "fakibaj"
  // const fullStackDeveloper:FullStackDeveloper = "backendDeveloper"
  // const developer:Developer = {
  //     frontendDeveloper:frontendDeveloper,
  //     fullStackDeveloper:fullStackDeveloper

  // }

  type TUser = {
    name: string;
    id: string;
    gender: "male" | "female";
    age: number;
  };

  const user: TUser = {
    name: "salman",
    id: "dfdfd",
    gender: "female",
    age: 20,
  };
}

type TFrontend = { skills: string[]; designation1: "frontend" };
type TBackend = { skills: string[]; designation2: "backend" };
type TFullStackDeveloper = TFrontend & TBackend;
const developer: TFullStackDeveloper = {
  skills: ["html", "css", "express"],
  designation1: "frontend",
  designation2: "backend",
};
