const express = require("express");
const session = require("express-session")
const bodyParser = require("body-parser")
const cors = require("cors");
const app = express();
const PORT = 5000;
const db = require("./models");
const signupRouter = require("./routes/signup");
const loginRouter = require("./routes/login")
const recipeRouter = require("./routes/recipe")
const mypageRouter = require("./routes/mypage")


app.use(bodyParser.json());
app.use(cors());
app.use(
  session({
    secret: "cooksiin",
    resave: false,
    saveUninitialized: true,
  })
);

app.options("/signup", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  res.send();
});

app.use("/a", (req, res) => {
  res.send("Welcome to Man's Club");
});

const materials = require("./seasonal materials.json");
//게시판 제철재료 표시
app.get("/recipe/materials", (req, res) => {
  let date_value = new Date();
  console.log(date_value.getMonth())
  if (!req.session.session_id) {
    res.status(404).send("다시 시도해 주세요");
  } else {
    res.status(201).send(materials[date_value.getMonth()]);
  }
})

// 회원 탈퇴 요청
app.patch("/mypage/Leave", (req, res) => {
  const deleted = "deleted";
  if (req.session.session_id) {
    db.users.findOne({ where: { id: req.session.session_id } }).then(
      (userData) => {
        db.users.update(
          {
            userid: deleted,
            email: userData.email,
            password: userData.password,
          },
          { where: { id: req.session.session_id } }
        ).then((result) => {
          req.session.destroy();
          res.status(200).send(result);
        });
      }
    );
  } else {
    res.status(404).send("잘못된 요청입니다. 다시 시도해 주시기 바랍니다.");
  }
});
// 유저 정보 수정
app.put(("/mypage/setupPut"), (req, res) => {
  if (req.session.session_id) {
    db.users.update(
      {
        userid: req.body.userid,
        password: req.body.password,
        email: req.body.email,
      },
      { where: { id: req.session.session_id } }
    ).then((modified) => {
      res.status(201).send(modified);
    });
  } else {
    res.status(404).send("잘못 요청하셨습니다. 다시 시도해 주시기 바랍니다.");
  }
})

app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/mypage', mypageRouter);
app.use('/recipe', recipeRouter)

app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});