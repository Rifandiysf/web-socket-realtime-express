'use strict';
const {
  Model
} = require('sequelize');
const {v4: uuidv4} = require("uuid")
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.belongsToMany(models.roles, {
        through: 'role_users',
        foreignKey: 'user_id',
        otherKey: 'role_id'
      })
      user.belongsToMany(models.student, {
        through: 'student_users',
        foreignKey: 'user_id',
        otherKey: 'student_id'
      })
    }
  }
  user.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: uuidv4
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};