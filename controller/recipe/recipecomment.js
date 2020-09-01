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
          console.log(data)
          db.comments.create({
              starpoint : starpoint,
              comment : comment,
          }).then((result) => 
          res.status(201).send(result))
      }).catch(function (e) {
          console.log(e)
      })
  }
}
};