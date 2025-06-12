// // Code goes here!

// class Department {
//   name: string;
//   constructor(n: string) {
//     this.name = n;
//   }

//   describe(this: Department) {
//     console.log("Department from class: " + this);
//   }
// }

// const accounting = new Department("Accounting");

// accounting.describe();
// // let accountingCopy = new Department("Accounting Copy");

// let accountingCopy = {
//   ...accounting,
//   describe: accounting.describe,
// };

// // console.log(accountingCopy.describe);
// // accountingCopy.describe();

// // console.log(accounting.describe);
