var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.createPerson = function (name, age) {
        if (Person.person) {
            return Person.person;
        }
        Person.person = new Person(name, age);
        return Person.person;
    };
    return Person;
}());
// const person = new Person("John", 30);
// console.log(person);
var person = Person.createPerson("John", 30);
console.log(person);
var person2 = Person.createPerson("John", 31);
console.log(person2);
