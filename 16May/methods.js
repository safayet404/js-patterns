const students = [
    { name: "রহিম", gpa: 3.8, dept: "CSE" },
    { name: "করিম", gpa: 3.2, dept: "EEE" },
    { name: "জামিল", gpa: 3.9, dept: "CSE" },
    { name: "সালমা", gpa: 3.5, dept: "CSE" },
    { name: "নাফিস", gpa: 2.8, dept: "EEE" },
];


const names = students.map(s => s.name)
console.log(names);

const topStudents = students.filter(s => s.gpa > 3.0)
console.log(topStudents);

const depts = students.filter(s => s.dept === "EEE")
console.log(depts);


const finds = students.find(s => s.gpa === 3.2)
console.log(finds);

const totalGpa = students.reduce((sum, s) => sum + s.gpa, 0)
console.log(totalGpa);

const totGpa = students.map(s => s.dept)
console.log(totGpa);

const gpass = students.find(s => s.gpa > 2)

console.log("test gap on find", gpass);
