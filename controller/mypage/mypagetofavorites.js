const db = require("../../models");

module.exports = {
  // 마이페이지에서 내가 쓴 게시글로 이동 요청
  post: (req, res) => {
    if (req.session.session_id) {
      // 클라이언트 측에서 body에 해당 게시글의 title를 담아서 요청을 보낼 것이다.
      db.recipe.findAll({
        where: {
          title: req.body.title,
        },
        attributes: ["title", "recipe", "recipe_img"],
        include: [
          { model: db.users, as: "users", attributes: ["userid"] },
          {
            model: db.comments,
            as: "comments",
            attributes: ["starpoint", "comment"],
            include: [
              { model: db.users, as: "comments", attributes: ["userid"] },
            ],
          },
        ],
      }).then((content) => {
        res.status(201).send(content);
      });
    } else {
      res.status(404).send("요청하신 정보가 없습니다.");
    }
  },
};