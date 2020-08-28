'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.comments.hasMany(models.users,{
        foreignKey : "commentsid",
        as: "users"
      });
      models.comments.hasMany(models.recipe,{
        foreignKey: "commentsid",
        as:"recipe"
      })
    }
  };
  comments.init({
    starpoint: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'comments',
  });
  return comments;
};