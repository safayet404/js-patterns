const user = {
    name: "Safayet",
    address: "Uttara",
    greet() {
        console.log(`Hello this is ${this.name}`);

    }
}

user.greet()

const company = {
    name: "Barrzen",
    address: "Uttara",
    department: {
        name: "Engineering",
        test() {
            console.log(`Hello dept ${this.address}`);

        }
    }
}

company.department.test()