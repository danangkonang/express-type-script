'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    code: DataTypes.STRING,
    nama: DataTypes.STRING,
    hargaBeli: DataTypes.STRING,
    hargaJual: DataTypes.STRING,
    satuan: DataTypes.STRING,
    setok: DataTypes.INTEGER,
    setatus: DataTypes.STRING
  }, {});
  product.associate = function(models) {
    // associations can be defined here
  };
  return product;
};