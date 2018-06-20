let employee1 = {
    name: "Bari",
    id: 1,
    desg: "developer",
    experience: 0,
    skills: ["JavaScript", "python", "sqlite"]
};

employee_json = JSON.stringify(employee1);
console.log(employee_json);
emp = JSON.parse(employee_json);
console.log(emp);