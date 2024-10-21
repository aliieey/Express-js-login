const express = require('express');
const app = express();


app.use(express.json());

const users = [
    { email: "ali@gmail.com", password: "ali1" },
    { email: "abdullah@gmail.com", password: "abd2" },
    { email: "faizan@gmail.com", password: "faiz3" },
    { email: "meesum@gmail.com", password: "meesum3" },
    { email: "kaleem@gmail.com", password: "kaleem3" },
    { email: "hamza@gmail.com", password: "hamza3" },
    { email: "tayyabbpt@gmail.com", password: "tayyab3" },
    { email: "israr@gmail.com", password: "israr3" },
    { email: "afaq@gmail.com", password: "afaq3" },
    { email: "ibrar@gmail.com", password: "ibrar3" },
    { email: "mohsin@gmail.com", password: "mohsin3" },
];


app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Check if the email and password match any entry in the static array
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        res.status(200).send("Login successful!");
    } else {
        res.status(401).send("Invalid email or password");
    }
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
})