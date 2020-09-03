const db = require("../../models");

module.exports = {
  put : (req, res) => {
    const { id } = req.body
    if (req.session.session_id) {
        db.Users.findOne({
            where : { id : req.session.session_id}
        }).then ((datas) => {
          if(datas.userId === "admin"){
              db.cookcomment.destroy({
                  where : { id : id }
              }).then((result) => {
                  res.status(200).send("삭제완료")
              })
          }else{
              res.status(404).send("잘못된 요청")
          }
      })
    } else {
      res.status(404).send("요청이 잘못되었습니다.")
    }
  }
};