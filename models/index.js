const { profile } = require('console');
const User = require('./User');
const Profile = require ('./profile'); 


Profile.hasMany(User, {
  foreignKey: 'gallery_id',
});

User.belongsTo(Profile, {
  foreignKey: 'gallery_id',
});

module.exports = { User };