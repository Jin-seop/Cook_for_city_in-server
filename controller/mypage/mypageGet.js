const db = require("../../models");
const favorites = require("../../models/favorites");
const recipe = require("../recipe");

module.exports = {
  // 회원정보 마이페이지 요청
  post: (req, res) => {
    // 저장된 세션아이디 확인
    if (req.session.session_id) {
      db.users.findAll({
        where: { id: req.session.session_id },
        attributes: ["userid"],

        include: [
          {
            model: db.favorites,
            as: "favorites",
            attributes: ["recipeid"]
          }
          // {
          //   model: db.comments,
          //   as: "comments",
          //   attributes: ["starpoint","comment"],
          // },
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