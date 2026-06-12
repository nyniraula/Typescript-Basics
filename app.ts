type guest = {
  name: string;
  age: number;
};

type admin = guest & {
  getDetails(a: string): void;
};

let a: admin;
