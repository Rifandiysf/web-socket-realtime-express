'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      student.belongsTo(models.major, { foreignKey: 'major_id' });
    }
  }
  student.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    classes: DataTypes.ENUM( 'X','XI', 'XII'),
    gender: DataTypes.ENUM('M', "F"),
    major_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'student',
  });
  return student;
};