'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      starpoint: {
        type: Sequelize.INTEGER
      },
      comment: {
        type: Sequelize.STRING
      },
      userid : {
        allowNull : false,
        type : Sequelize.INTEGER,
        references : { model: 'users', key: 'id'},
        onDelete : "CASCADE"
      },
      recipeid : {
        allowNull : false,
        type : Sequelize.INTEGER,
        references : { model: 'recipes', key: 'id'},
        onDelete : "CASCADE"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('comments');
  }
};