const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Profile extends Model {}

Profile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    wedding_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    band: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    main_dish: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    theme: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    timestamps:false,
    freezeTableName: true,
    underscored: true,
    modelName: 'profile',
  }
);
module.exports = Profile;











