'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Payments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idClient: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Clients',
          key: 'id'
        }
      },
      idMembership: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Memberships',
          key: 'id'
        }
      },
      date: {
        type: Sequelize.DATE
      },
      validity: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Payments');
  }
};