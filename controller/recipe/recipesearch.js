const db = require("../../models");
const sequelize = require("sequelize")
const Op = sequelize.Op;

module.exports = { 
  post: (req, res) => {
      const { meterial } = req.body
      db.recipe.findAll({
          where : {
            meterial : { 
                [Op.like] : "%" + meterial + "%"}
          },
          limit : req.body.count * 10
      }).then((recipesearch) => {
          res.status(200).send(recipesearch);
      }).catch(function (e) {
          console.log(e)
      })
  }
};