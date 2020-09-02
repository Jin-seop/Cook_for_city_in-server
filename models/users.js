'use strict';
const crypto = require("crypto")
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
      models.users.hasMany(models.comments,{
        foreignKey : 'userid',
        as : 'comments'
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
    password: DataTypes.STRING
  }, {
    hooks: {
      afterValidate: (data, options) => {
        let secret1 = "쿡시인화이팅";
        const hash = crypto.createHmac("sha1", secret1);
        hash.update(data.password);
        data.password = hash.digest("hex");
      },
    },
    sequelize,
    modelName: "users",
  }
);
  return users;
};