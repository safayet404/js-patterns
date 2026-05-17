const database = {
    users: [
        { id: 1, name: "সাফায়েত", email: "safayet@gmail.com" },
        { id: 2, name: "হেমা", email: "hema@gmail.com" },
        { id: 3, name: "ওহী", email: "ohee@gmail.com" }
    ]
};


function fetchSingleUser(userId) {
    return new Promise((resolve, reject) => {
        const user = database.users.find((u) => u.id === userId)

        if (user) {
            resolve(user)
        } else {
            reject("no user")
        }
    })
}

fetchSingleUser(1).then((user) => {
    console.log(`user ${user.name}`);

}).catch((error) => {
    console.log(error, "kot khaisen bhai");

})