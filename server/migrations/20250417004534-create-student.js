'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        length: 100
      },
      lastName: {
        type: Sequelize.STRING,
        length: 100
      },
      classes: {
        type: Sequelize.ENUM("X", "XI", "XII", "XIII")
      },
      gender: {
        type: Sequelize.ENUM("M", "F")
      },
      major_id: {
        type: Sequelize.INTEGER,
        references: {
          key: 'id',
          model: 'majors'
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('students');
  }
};