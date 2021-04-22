const express = require('express')
const app = express()
const port = 4000

app.use(express.json());

app.use('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Accept, Origin, Content-Type, access_token');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

function handleRegister(req, res){
    user = req.body;
    res.send("Success!");
    console.log(user);
};

function handleLoging(req, res){
    let userPassword = req.body.password;
    let userEmail = req.body.email;
    if(user != null && user.password == userPassword && user.email == userEmail){
        res.send("Success!");
    }else{
        res.send("User not found");
    }
};

app.post("/register", handleRegister);
app.put("/login", handleLoging);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})