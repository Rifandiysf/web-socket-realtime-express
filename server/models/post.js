'use strict';
const {
  Model
} = require('sequelize');
const {v4: uuidv4} = require("uuid")
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      post.hasOne(models.users, {
        foreignKey: 'user_id'
      })
    }
  }
  post.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: uuidv4
    },
    private: DataTypes.ENUM("TRUE", "FALSE"),
    content_text: DataTypes.STRING,
    content_image: DataTypes.TEXT,
    user_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};