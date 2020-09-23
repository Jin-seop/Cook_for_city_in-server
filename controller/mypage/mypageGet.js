const db = require("../../models");
const favorites = require("../../models/favorites");
const recipe = require("../recipe");

module.exports = {
  // 회원정보 마이페이지 요청
  get: (req, res) => {
    // 저장된 세션아이디 확인
    if (req.session.session_id) {
      db.Users.findAll({
        where: { id: req.session.session_id },
        attributes: ["userId"],
        include: [
          {
            model: db.recipe,
            as: "Recipe",
            attributes: ["id", "title"],
          },
          {
            model: db.cookcomment,
            as: "cookcomment",
            attributes: ["starpoint", "comment",],
            include: [
              {
                model: db.recipe,
                as: "cookcommentrecipe",
                attributes: ["title"]
              }
            ]
          },
        ],
      }).then((userInfo) => {
        if (userInfo) {
          res.status(200).send(userInfo);
        }
      });
    } else {
      res.status(404).send("잘못 요청하셨습니다.");
    }
  },
};