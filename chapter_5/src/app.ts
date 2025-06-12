// Code goes here!

class Department {
  // name: string;
  // private employees: string[];

  constructor(private readonly name: string, private employees: string[]) {
    // this.name = n;
    // this.employees = [];
  }

  describe(this: Department) {
    // this.name = "Accounting";
    console.log("Department from class: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting", ["kavin"]);

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

// accounting.employees[2] = "Anna";

accounting.describe();
accounting.printEmployeeInformation();
