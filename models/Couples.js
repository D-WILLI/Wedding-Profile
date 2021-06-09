const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Couples extends Model {}

Couples.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Couple: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    Description: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    Theme: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    Wedding_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    Theme_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Theme',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'couples',
  }
);

module.exports = Couples;
