const db = require("../../models");
const crypto = require("crypto");

// 회원가입 요청
module.exports = {
  post: (req, res) => {
      const {userid, password, email} = req.body;
      //비밀번호 암호화
      let secret1 = "쿡시인화이팅";
      const hash = crypto.createHmac("sha1", secret1);
      hash.update(password);
      let passwordHashed = hash.digest("hex");  

    db.users.findOne({ 
      where: { 
        userid: userid 
      } 
    }).then((checkUserId) => {
        if (!checkUserId) {
          db.users.create({
            userid: userid,
            password: passwordHashed,
            email: email,
          }).then((result) => res.status(201).send(result));
        } else {
          res.status(404).send("잘못된 요청입니다. 다시 입력해주세요");
        }
      }
    );
  },
};