const db = require("../../models");

module.exports = {
  // 회원정보 마이페이지 요청
  get: (req, res) => {
    // 저장된 세션아이디 확인
      db.recipe.findAll({
      }).then((recipeinfo) => {
          res.status(200).send(recipeinfo);
      });
  }
};