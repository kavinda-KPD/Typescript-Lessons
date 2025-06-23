interface IPerson {
  name: string;
  age: number;

  greet(name: string): void;
}

let user: IPerson;

user = {
  name: "John",
  age: 30,
  greet(name: string) {
    console.log(`Hello, ${name}!`);
  },
};

user.greet("Jane");
