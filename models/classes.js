'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Classes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Classes.init({
    idInstructor: DataTypes.INTEGER,
    idClient: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    duration: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Classes',
  });
  return Classes;
};