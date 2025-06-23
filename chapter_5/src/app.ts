// Code goes here!

class Department {
  // constructor(private readonly name: string, private employees: string[]) {}

  name: string = "Default";
  employees: string[] = ["Default"];
  // constructor() {
  //   this.name = "Default";
  //   this.employees = ["default emp"];
  // }

  describe(this: Department) {
    console.log("Department from class: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(name: string, employees: string[], public admins: string[]) {
    // super(name, employees);
    super();  
    this.name = name;
    this.employees = employees;
    this.admins = admins;
  }
}

const IT1 = new ITDepartment("kavinda", ["em1", "em2"], ["admin1", "admin2"]);

console.log(IT1);
IT1.addEmployee("em3");
IT1.printEmployeeInformation();
