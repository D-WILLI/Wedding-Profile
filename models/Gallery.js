const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Gallery extends Model {}

Gallery.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    couple: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    wedding_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'gallery',
  }
);

module.exports = Gallery;
