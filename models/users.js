'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.users.belongsTo(models.comments,{
        foreignKey : "id",
        as:"comments"
      })
      models.users.belongsToMany(models.recipe, { 
        foreignKey : 'userid',
        through : 'favorites',
        as: "recipe"
      });
    }
  };
  users.init({
    userid: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    commentsid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};