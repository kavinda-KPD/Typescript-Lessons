let f1: Function;

f1 = () => {
  console.log("Hello World");
};

f1 = () => {
  console.log("Hello World 2");
};

function f2Real(a: number): string {
  console.log(a);
  return "Hello World";
}

type f2Type = (num: number) => string;

let f2: f2Type = f2Real;

console.log(f2.toString());
