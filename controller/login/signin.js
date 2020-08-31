const db = require("../../models");
const crypto = require("crypto");
const jwt = require("jsonwebtoken")
const secretObj = require('../../config/jwt')

//토큰으로 로그인 구현해야됨. => 현재는 세션으로 되어있음.
module.exports = {
  // 로그인 요청
  post: (req, res,next) => {
    // 로그인 요청시 입력된 비밀번호를 헤싱합니다.
    let secret1 = "쿡시인화이팅";
    const hash = crypto.createHmac("sha1", secret1);
    hash.update(req.body.password);
    let passwordHashed = hash.digest("hex");

    let token = jwt.sign({
      userid : req.body.userid
    }, secretObj.secret)

    db.users.findOne({ where: { userid: req.body.userid } }).then(
      (checkUser) => {
        if (checkUser) {
          if (checkUser.password === passwordHashed) {
            res.cookie("user", token);
            res.json({
              token: token
            })
            res.status(200).send("로그인 되었습니다.");
          } else {
            res.status(404).send("비밀번호가 틀렸습니다.");
          }
        } else {
          res.status(404).send("유저아이디가 틀렸습니다. o 없는 정보입니다.");
        }
      }
    );
  },
};