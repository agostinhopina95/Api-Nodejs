const express = require("express");
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./config/db");

// init DB
InitiateMongoServer();

const app = express();

const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json({ message: "API Working" });
});

app.listen(PORT, (req, res) =>{
    console.log("Please, visite this link: http://localhost:"+PORT);
});