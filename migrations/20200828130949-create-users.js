'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.createTable('users', {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER
    //   },
    //   userid: {
    //     type: Sequelize.INTEGER
    //   },
    //   email: {
    //     type: Sequelize.STRING
    //   },
    //   password: {
    //     type: Sequelize.STRING
    //   },
    //   commentsid: {
    //     type: Sequelize.INTEGER,
    //     references : {model:'comments', key: 'id'},
    //     onDelete : "CASCADE"
    //     },
    //   createdAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   },
    //   updatedAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   }
    // });
  },
  down: async (queryInterface, Sequelize) => {
    // await queryInterface.dropTable('users');
  }
};