// anonymous

const abc: string = "";

let teacher: {
  name: string;
  exp: number;
};
// let teacher: { name: string; exp: number } = {
//   name: "Zeeshan",
//   exp: 10,
// };
teacher = {
  name: "Abu Hurairah",
  exp: 10,
};

const someFunction = (a: number, b: number, c: number) => a + b + c;
someFunction(1, 2, 3);
// Aliased Object Type
type Student = {
  name: string;
  age: number;
  address?: string;
};

let student: Student = {
  name: "Sheraz",
  age: 15,
  address: "FSD",
};

let student2: Student = {
  name: "Ahmad",
  age: 15,
};

let student3: Student = {
  name: "Zia Khan",
  age: 60,
};

console.log(student["name"]);
console.log(student.age);

// Interfaces

interface Manager {
  name: string;
  subordiates?: number;
}

let storeManager: Manager = {
  name: "Bilal",
};

console.log(storeManager.subordiates);
