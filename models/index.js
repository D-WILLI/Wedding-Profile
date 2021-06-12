<<<<<<< HEAD
const User = require('./User');
const Gallery = require('./Gallery');
const Couples = require('./Couples');

Gallery.hasMany(Couples, {
  foreignKey: 'theme_id',
});

Couples.belongsTo(Gallery, {
  foreignKey: 'theme_id',
});

module.exports = { User, Gallery, Couples };
=======
const User = require('./user');
const Profile = require('./profile');

User.hasOne(Profile, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Profile.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Profile };
>>>>>>> 46b27b8fbb01e128ec94916455b1635f3d6dd4e2
