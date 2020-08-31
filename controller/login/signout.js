const db = require("../../models");

module.exports = {
  // 로그인 요청
  post: (req, res,next) => {
    req.session.destroy();
    res.status(200).send("로그아웃 되셨습니다.");
  }
};