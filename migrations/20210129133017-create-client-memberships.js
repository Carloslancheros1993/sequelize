'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Client_Memberships', {
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
      idPayment: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Payments',
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
    await queryInterface.dropTable('Client_Memberships');
  }
};