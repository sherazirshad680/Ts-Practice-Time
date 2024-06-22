let teacher = {
  name: "Abu Hurairah",
  experience: "10",
};

console.log(teacher.name);
console.log(teacher["experience"]);

// Type Declaration
let student: {
  name: string;
  age: number;
};

student = {
  name: "Sheraz",
  age: 15,
};

console.log(student["name"]);
console.log(student.age);
