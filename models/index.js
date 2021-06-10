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
