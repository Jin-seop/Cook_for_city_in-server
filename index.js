const express = require("express");
const session = require("express-session")
const bodyParser = require("body-parser")
const cors = require("cors");
const jwt = require("jsonwebtoken")
const secretObj = require("./config/jwt")
const app = express();
const PORT = 5000;

const signupRouter = require("./routes/signup");
const loginRouter = require("./routes/login")


app.use(bodyParser.json());
app.use(cors());

app.use("/a", (req, res) => {
    res.send("Welcome to Man's Club");
});

app.use('/signup', signupRouter);
app.use('/login', loginRouter);
//토큰 확인
app.use("/api", function(req, res, next){
    let token = req.headers.cookie.user;
    let decoded = jwt.verify(token, secretObj.secret);
    if(decoded){
      res.send("권한이 있어서 API 수행 가능")
    }
    else{
      res.send("권한이 없습니다.")
    }
  })


app.listen(PORT, () => {
    console.log(`server on ${PORT}`);
});