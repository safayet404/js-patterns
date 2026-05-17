

function Person(name, age) {
    this.name = name,
        this.age = age
}

Person.prototype.greet = function () {
    return `hello ${this.name} and age is ${this.age}`
}

const test = new Person("Safaet", 26)

console.log(test.greet());
