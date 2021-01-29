'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Class_Season extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Class_Season.init({
    idClass: DataTypes.INTEGER,
    idInstructor: DataTypes.INTEGER,
    idClient: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Class_Season',
  });
  return Class_Season;
};