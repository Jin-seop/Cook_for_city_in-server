const db = require("../../models");
const jwt = require("jsonwebtoken")
const secretObj = require('../../config/jwt')

//토큰으로 로그인 구현해야됨. => 현재는 세션으로 되어있음.
module.exports = {
  // 로그인 요청
  post: (req, res,next) => {
    let token = jwt.sign({
      userid : req.body.userid
    }, secretObj.secret,{
        expiresIn : 0
    })

    db.users.findOne({ where: { userid: req.body.userid } }).then(
      (checkUser) => {
        if (checkUser) {
            res.cookie("user", token);
            res.json({
              token: token
            })
            res.status(200).send("로그아웃 되었습니다.");
          } else {
            res.status(404).send("비밀번호가 틀렸습니다.");
          }
      }
    );
  },
};