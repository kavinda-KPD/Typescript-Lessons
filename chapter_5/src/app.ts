interface IProduct {
  code: string;
}

interface IPerson {
  id: number;
  name: string;
  age: number;

  greet(name: string): void;
}

class User implements IPerson, IProduct {
  id: number;
  name: string = "John";
  age: number = 30;
  greet(name: string): void {
    throw new Error("Method not implemented.");
  }

  code: string = "123";

  constructor(id: number) {
    this.id = id;
  }
}

// let user: IPerson;

// user = {
//   id: 1,
//   name: "John",
//   age: 30,
//   greet(name: string) {
//     console.log(`Hello, ${name}!`);
//   },
// };

// user.greet("Jane");
