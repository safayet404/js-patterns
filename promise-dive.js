// const response = await fetch('https://jsonplaceholder.typicode.com/users');



function fetchUser() {
    fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        console.log("res rest", res);

        return res.json()

    }).then(data => {
        console.log("raw data", data);
        return data

    }).catch(err => {
        console.log(err);

    })
}

fetchUser()