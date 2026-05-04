function introduction(greetings, punctuation) {
    console.log(`${greetings} ,${this.name} ${punctuation}`);

}

const person = { name: "Safayet" }

introduction.call(person, "Hello", "!")
introduction.apply(person, ["Hello,", "Bhai valo achen?"])
introduction.apply(person, ["Hello,", "Bhai valo achen?"])

const testBind = introduction.bind(person, "Hello")

testBind("Hello")
testBind("!")