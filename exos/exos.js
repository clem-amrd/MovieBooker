function generateToken(user) {
    let token = window.btoa(JSON.stringify(user));
    return token;
}

function verifyToken(token) {
    let decodedToken = window.atob(token);
    return JSON.parse(decodedToken);
}

function filterUsers(arrayUsers, text) {
    newArray = arrayUsers.filter((user) => user.username.includes(text));
    return newArray;
}

user = {
    username: "user",
    passeword: "password"
}

array = [
    {
        username: "Clémence",
        passeword: "test1"
    },
    {
        username: "Tibor",
        passeword: "test2"
    },
    {
        username: "Allan",
        passeword: "test3"
    }]

//exec functions
token = generateToken(user);
console.log(token);
user = verifyToken(token);
console.log(user);
console.log(filterUsers(array, "l"));