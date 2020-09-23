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
      models.recipe.hasMany(models.cookcomment,{
        foreignKey : 'recipeid',
        as : 'comments'
      })

      models.recipe.belongsToMany(models.Users, { 
        foreignKey : "recipeid",
        through : 'favorites',
        as: "Users"
      });
    }
  };
  recipe.init({
    title: DataTypes.STRING,
    meterial: DataTypes.STRING,
    recipe: DataTypes.STRING,
    recipe_img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'recipe',
  });
  return recipe;
};