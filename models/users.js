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
        foreignKey : 'commentsid',
        as:'users'
      })
      models.users.belongsToMany(models.recipe, { 
        foreignKey : 'userid',
        through : 'favorites',
        as: 'Recipe'
      });
    }
  };
  users.init({
    userid: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    commentsid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};