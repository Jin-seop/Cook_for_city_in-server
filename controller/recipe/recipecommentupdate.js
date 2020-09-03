const db = require("../../models");

module.exports = {
  put: (req, res) => {
    const { id, userId, starpoint, comment } = req.body
    if (req.session.session_id) {
      db.Users.findOne({
        where: {
          id: req.session.session_id
        }
      }).then((data) => {
        if (data.userId === userId) {
          db.cookcomment.findOne({
            where: { userid: data.id, id: id }
          }).then((commentdata) => {
            db.cookcomment.update(
              { starpoint: starpoint, comment: comment },
              { where: { id: commentdata.id } }
            ).then((result) => {
              res.status(200).send(result);
            })
          })
        }
      })
    } else {
      res.status(404).send("잘못된 요청입니다.")
    }
  }
};