// ========== IMPLICIT vs EXPLICIT BINDING PRACTICE QUESTIONS ==========

// QUESTION 1: What will be the output?
const person1 = {
    name: "Safayet",
    greet: function () {
        console.log(`Hello, I am ${this.name}`);
    }
};

person1.greet(); // What output?

// QUESTION 2: What will be the output?
const person2 = {
    name: "Hema",
    greet: function () {
        console.log(`Hello, I am ${this.name}`);
    }
};

const greetFunc = person2.greet;
greetFunc(); // What output?

// QUESTION 3: Using .call() - What will be the output?
function introduction(greetings, punctuation) {
    console.log(`${greetings}, ${this.name} ${punctuation}`);
}

const person3 = { name: "Safayet" };
introduction.call(person3, "Hello", "!"); // What output?

// QUESTION 4: Using .apply() - What will be the output?
const person4 = { name: "Ohee" };
introduction.apply(person4, ["Hi", "?"]); // What output?

// QUESTION 5: Using .bind() - What will be the output?
const person5 = { name: "Developer" };
const boundGreet = introduction.bind(person5, "Hey");
boundGreet("!!!"); // What output?

// QUESTION 6: Chain bind calls - What will be the output?
const person6 = { name: "Alice" };
const boundOnce = introduction.bind(person6, "First");
const boundTwice = boundOnce.bind({ name: "Bob" }, "Second");
boundTwice("???"); // What output? (Hint: bind can't be re-bound)

// QUESTION 7: Implicit binding in nested object - What will be the output?
const company = {
    name: "TechCorp",
    employee: {
        name: "Safayet",
        getInfo: function () {
            console.log(`${this.name} works at ${company.name}`);
        }
    }
};

company.employee.getInfo(); // What is 'this'? What output?

// QUESTION 8: Which one will print undefined and why?
const obj1 = {
    name: "Object1",
    getName: function () { return this.name; }
};

const obj2 = {
    name: "Object2"
};

console.log(obj1.getName()); // Output?
console.log(obj1.getName.call(obj2)); // Output?

// QUESTION 9: .bind() with multiple calls - What will be the output?
const calculator = {
    value: 10,
    add: function (num) {
        return this.value + num;
    }
};

const boundAdd = calculator.add.bind({ value: 100 });
console.log(boundAdd(5)); // Output?

// QUESTION 10: Explicit binding overrides implicit - True or False?
const user = {
    name: "Implicit User",
    greet: function () {
        return this.name;
    }
};

const explicitUser = { name: "Explicit User" };
console.log(user.greet.call(explicitUser)); // Output?