'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.recipe.belongsTo(models.comments,{
        foreignKey : "commentsid",
        as:"Recipe"
      });
      models.recipe.belongsToMany(models.users, { 
        foreignKey : "recipeid",
        through : 'favorites',
        as: "users"
      });
    }
  };
  recipe.init({
    title: DataTypes.STRING,
    meterial: DataTypes.STRING,
    recipe: DataTypes.STRING,
    recipe_img: DataTypes.STRING,
    commentsid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'recipe',
  });
  return recipe;
};