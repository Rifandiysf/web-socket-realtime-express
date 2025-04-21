'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class major extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      major.hasMany(models.student, { foreignKey: 'major_id' });
    }
  }
  major.init({
    name: DataTypes.STRING,
    alias: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'major',
  });
  return major;
};