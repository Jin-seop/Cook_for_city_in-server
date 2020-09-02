const db = require("../../models");

// 회원가입 요청
module.exports = {
  post: (req, res) => {
      const {userid, password, email} = req.body;

    db.Users.findOne({ 
      where: { 
        userid: userid 
      } 
    }).then((checkUserId) => {
        if (!checkUserId) {
          db.Users.create({
            userid: userid,
            password: password,
            email: email,
          }).then((result) => res.status(201).send(result));
        } else {
          res.status(404).send("잘못된 요청입니다. 다시 입력해주세요");
        }
      }
    );
  },
};