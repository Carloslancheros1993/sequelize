'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Classes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idInstructor: {
        type: Sequelize.INTEGER,
      },
      idClient: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      duration: {
        type: Sequelize.TIME
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
    await queryInterface.dropTable('Classes');
  }
};