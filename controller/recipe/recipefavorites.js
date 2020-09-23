const db = require("../../models");

module.exports = { 
  post: (req, res) => {
      const { id } = req.body
      if(req.session.session_id){
        db.recipe.findOne({
            where : {id : id}
        }).then((data) => {
            console.log(data)
            db.favorites.create({
                userid : req.session.session_id,
                recipeid : data.id
            }).then((result) => {
                res.status(201).send(result)
            })
        })
      }else{
        res.status(404).send("요청이 잘못되었습니다.")
      }
  }
};