"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // await queryInterface.addColumn("Contents", "fk_userId", {
    //   allowNull: true,
    //   type: Sequelize.INTEGER,
    //   onDelete: "cascade",
    //   reference: { model: "Users", key: "id" },
    // });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    // await queryInterface.removeColumn("Contents", "fk_userId");
  },
};
