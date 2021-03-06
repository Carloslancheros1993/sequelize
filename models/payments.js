'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Payments.init({
    idClient: DataTypes.INTEGER,
    idMembership: DataTypes.INTEGER,
    date: DataTypes.DATE,
    validity: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Payments',
  });
  return Payments;
};