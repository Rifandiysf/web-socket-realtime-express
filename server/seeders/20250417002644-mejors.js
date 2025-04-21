'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('majors', [
      {
        name: 'Pengembangan Perangkat Lunak & Gim',
        alias: 'PPLG',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Teknik Jaringan komputer & Telekomunikasi',
        alias: 'TJKT',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Hotel & Restaurant',
        alias: 'HR',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Teknik Mesin',
        alias: 'TM',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Teknik Sepeda Motor',
        alias: 'TSM',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Teknik Kendaraan Ringan',
        alias: 'TKR',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Management Perkantoran & Layanan Bisnis',
        alias: 'MPLB',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Desain Komunikasi Visual',
        alias: 'DKV',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('majors', null, {});
  }
};