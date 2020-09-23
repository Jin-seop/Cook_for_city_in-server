const db = require("../../models");

module.exports = {
  put: (req, res) => {
    const { id } = req.body
    if (req.session.session_id) {
      db.recipe.findOne({
        where: { id: id } 
      }).then((data) => {
        console.log(data)
        db.favorites.destroy({
          where: { recipeid: data.id }
        }).then((result) => {
          res.status(200).send("삭제완료")
        })
      })
    } else {
      res.status(404).send("요청이 잘못되었습니다.")
    }
  }
};