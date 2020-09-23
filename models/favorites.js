'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class favorites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.favorites.belongsTo(models.Users,{
        foreignKey : 'userid',
        as : 'Users'
      })
      models.favorites.belongsTo(models.recipe,{
        foreignKey : 'recipeid',
        as : 'Recipe'
      })
    }
  };
  favorites.init({
    userid: DataTypes.INTEGER,
    recipeid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'favorites',
  });
  return favorites;
};