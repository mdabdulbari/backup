let employee1 = {
    name: "Bari",
    id: 1,
    desg: "developer",
    experience: 0,
    skills: ["JavaScript", "python", "sqlite"]
};

let employee2 = {
    name: "Ravi",
    id: 2,
    desg: "developer",
    experience: 2,
    skills: ["python", "postgres"]
};

let employee3 = {
    name: "Pooja",
    id: 3,
    desg: "developer",
    experience: 3,
    skills: ["JavaScript", "python", "sqlite"]
};

let employee4 = {
    name: "Suraj",
    id: 3,
    desg: "manager",
    experience: 3,
    skills: ["JavaScript", "python", "sqlite", "leadership"]
};

let employees_list = [employee1, employee2, employee3, employee4]

const get_employees = (given_skill, desg) =>{
    let emps_with_skill = [];
    for(employee of employees_list){
        if (employee.skills.includes(given_skill) && employee.desg === desg){
            emps_with_skill.push(employee);
        }
    }
    return emps_with_skill;
}

console.log(get_employees("JavaScript", "developer"));