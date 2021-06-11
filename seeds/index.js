const sequelize = require('../config/connection');
const seedGallery = require('./galleryData')
const seedCouples = require('./coupleData');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedGallery();

  await seedCouples();

  process.exit(0);
};

seedAll();
