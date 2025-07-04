var User = /** @class */ (function () {
    function User(id) {
        this.name = "John";
        this.age = 30;
        this.code = "123";
        this.id = id;
    }
    User.prototype.greet = function (name) {
        throw new Error("Method not implemented.");
    };
    return User;
}());
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
