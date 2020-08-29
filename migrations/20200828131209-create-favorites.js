'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.createTable('favorites', {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER
    //   },
    //   userid: {
    //     type: Sequelize.INTEGER,
    //     references : { 
    //       model: 'users', 
    //       key: 'id'
    //     },
    //     onDelete : "CASCADE"
    //   },
    //   recipeid: {
    //     type: Sequelize.INTEGER,
    //     references : { 
    //       model: 'recipe', 
    //       key: 'id' 
    //     },
    //     onDelete : "CASCADE"
    //   },
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
    // await queryInterface.dropTable('favorites');
  }
};