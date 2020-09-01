const db = require("../../models");

module.exports = { 
  post: (req, res) => {
      const { title, starpoint, comment } = req.body
    if(req.session.session_id){
      db.recipe.findOne({
          where : {
            title : title
          }
      }).then((data) => {
          db.comments.create({
              starpoint : starpoint,
              comment : comment,
              userid : req.session.session_id,
              recipeid : data.id
          }).then((result) => 
          res.status(201).send(result))
      }).catch(function (e) {
          console.log(e)
       })
  }else {
    res.status(404).send("잘 못 요청하셨습니다.")
  }
}
};