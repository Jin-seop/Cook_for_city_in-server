const express = require("express");
const session = require("express-session")
const bodyParser = require("body-parser")
const cors = require("cors");
const app = express();
const PORT = 5000;


app.use(bodyParser.json());
app.use(cors());

app.use("/", (req, res) => {
    res.send("Welcome to Man's Club");
});

app.listen(PORT, () => {
    console.log(`server on ${PORT}`);
});