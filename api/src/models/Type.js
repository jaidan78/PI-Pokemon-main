const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Tipo', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};