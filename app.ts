interface User {
  name: string;
  age: number;
  email: string;
  gender?: string;
}

const adam: User = {
  name: "Adam",
  age: 12,
  email: "Adam123",
  gender: "male",
};
