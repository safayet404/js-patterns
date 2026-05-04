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