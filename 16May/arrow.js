const team = {
    name: "Engineers",
    members: ['Safayet', "Hema", "Ohee"],

    shwoMembers() {
        this.members.forEach(function (member) {
            console.log(`${member} belogns to ${this.name}`);

        })
    },

    shwoMembersCorrect() {
        this.members.forEach((member) => {
            console.log(`${member} belongs to ${this.name}`);

        })
    }
}

team.shwoMembers()
team.shwoMembersCorrect()

const obj = {
    name: "Dev Team",

    getName: () => { this.name },
    getName2() { return this.name }
}

console.log("obj.getName():", obj.getName())
console.log("obj.getName2():", obj.getName2())

// ========== PRACTICE QUESTIONS ==========

// Q1: What will be the output? Predict before running!
const person = {
    name: "Alice",
    greet: function () {
        return this.name;
    },
    greetArrow: () => {
        return this.name;
    }
};
console.log("\nQ1 - Regular vs Arrow method:");
console.log("person.greet():", person.greet());
console.log("person.greetArrow():", person.greetArrow());

// Q2: What will happen here?
const user = {
    username: "Bob",
    printUser: function () {
        [1, 2].forEach(function (num) {
            console.log(this.username);
        });
    },
    printUserArrow: function () {
        [1, 2].forEach((num) => {
            console.log(this.username);
        });
    }
};
console.log("\nQ2 - Regular function in forEach:");
user.printUser();
console.log("Q2 - Arrow function in forEach:");
user.printUserArrow();

// Q3: Predict the output
const company = {
    name: "TechCorp",
    getCompanyName: function () {
        const arrow = () => this.name;
        return arrow();
    }
};
console.log("\nQ3 - Arrow inside regular function:");
console.log("company.getCompanyName():", company.getCompanyName());

// Q4: What's the difference?
const obj2 = {
    value: 42,
    method1: function () { return this.value; },
    method2: () => this.value,
    nested: {
        value: 100,
        arrow: () => this.value,
        regular: function () { return this.value; }
    }
};
console.log("\nQ4 - Nested objects:");
console.log("obj2.method1():", obj2.method1());
console.log("obj2.method2():", obj2.method2());
console.log("obj2.nested.arrow():", obj2.nested.arrow());
console.log("obj2.nested.regular():", obj2.nested.regular());