'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client_Memberships extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Client_Memberships.init({
    idClient: DataTypes.INTEGER,
    idMembership: DataTypes.INTEGER,
    idPayment: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Client_Memberships',
  });
  return Client_Memberships;
};