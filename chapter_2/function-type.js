var f1;
f1 = function () {
    console.log("Hello World");
};
f1 = function () {
    console.log("Hello World 2");
};
function f2Real(a) {
    console.log(a);
    return "Hello World";
}
var f2 = f2Real;
console.log(f2.toString());
// let f3: (input: string) => string = () => "string";
// console.log(f1.toString());
