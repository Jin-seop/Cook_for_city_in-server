'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cookcomment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.cookcomment.belongsTo(models.Users, {
        foreignKey: 'userid',
        as: 'cookcomment'
      })

      models.cookcomment.belongsTo(models.recipe, {
        foreignKey: 'recipeid',
        as: 'cookcommentrecipe'
      })
    }
  };
  cookcomment.init({
    starpoint: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    userid: DataTypes.INTEGER,
    recipeid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'cookcomment',
  });
  return cookcomment;
};