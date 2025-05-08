'use strict';
const {
  Model
} = require('sequelize');
const {v4, uuidv4} = require("uuid")
module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  roles.init({
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: uuidv4
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
      }
    }, {
    sequelize,
    modelName: 'roles',
  });
  return roles;
};