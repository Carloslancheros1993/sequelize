'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Class_Seasons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idClass: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Classes',
          key: 'id'
        }
      },
      idInstructor: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Instructors',
          key: 'id'
        }
      },
      idClient: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Clients',
          key: 'id'
        }
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
    await queryInterface.dropTable('Class_Seasons');
  }
};