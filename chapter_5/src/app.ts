class Person {
  name: string;
  age: number;

  private static person: Person;

  private constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  static createPerson(name: string, age: number) {
    if (Person.person) {
      return Person.person;
    }

    Person.person = new Person(name, age);
    return Person.person;
  }
}

// const person = new Person("John", 30);
// console.log(person);

const person = Person.createPerson("John", 30);
console.log(person);

const person2 = Person.createPerson("John", 31);
console.log(person2);
