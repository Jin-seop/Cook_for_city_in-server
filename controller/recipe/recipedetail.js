const db = require("../../models");

module.exports = { 
  post: (req, res) => {
      const { title } = req.body
      if(req.session.session_id){
      db.recipe.findOne({
          where : {
            title : title
          },
          attributes : [
              "title", 
              "meterial", 
              "recipe", 
              "recipe_img"
            ],
        include : [
            {model : db.users, as: "users", attributes: ["userid"]},
            {model : db.comments, as: "comments", attributes: ["starpoint", "comment"],
          include : [{model : db.users, as :"comments", attributes: ["userid"]}]}
        ]
      }).then((recipedetail) => {
          if(recipedetail){
          res.status(200).send(recipedetail);
          }else{
              res.status(404).send("요청자료가 없습니다.")
          }
      }).catch(function (e) {
          console.log(e)
      })
    }else{
        res.status(404).send("잘못 요청하셨습니다.")
    }
  }
};