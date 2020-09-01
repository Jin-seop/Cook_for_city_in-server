'use strict';
const {
  Model, INTEGER
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
      models.comments.belongsTo(models.users, {
        foreignKey : 'userid',
        as : 'comments'
      })

      models.comments.belongsTo(models.recipe, {
        foreignKey : 'recipeid',
        as : 'commentsrecipe'
      })
    }
  };
  comments.init({
    starpoint: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    userid : DataTypes.INTEGER,
    recipeid : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'comments',
  });
  return comments;
};