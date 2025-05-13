const express = require('express');
require('./db/mongoose');
const userRoute = require("./router/userRoute");
const testRoute = require("./router/testRoute");
const orderRoute = require("./router/orderRoute")
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

//authCheck
function authCheck(req, res, next) {
    if (req.headers.authorization) {
        console.log("Authenticated User");
        next()
    } else {
        console.log("Not Authenticated User");
        res.status(401).json({ status: 401, msg: "Not Authenticated User" })
    }
}


app.use(express.json());
app.use('/user', authCheck, userRoute); // route level middleware
app.use('/test', testRoute);
app.use('/task', authCheck, taskRoute);

app.listen(3000, function () {
    console.log("Server running on port 3000.....")
});