'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      code: {
        type: Sequelize.STRING
      },
      nama: {
        type: Sequelize.STRING
      },
      hargaBeli: {
        type: Sequelize.STRING
      },
      hargaJual: {
        type: Sequelize.STRING
      },
      satuan: {
        type: Sequelize.STRING
      },
      setok: {
        type: Sequelize.INTEGER
      },
      setatus: {
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products');
  }
};