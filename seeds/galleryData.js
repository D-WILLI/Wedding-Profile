const { Gallery } = require('../models');

const gallerydata = [
  {
    couple: 'Printemps',
    Wedding_date: 'April 20, 2021 07:00:00',
  },
  {
    couple: 'Sommer',
    Wedding_date: 'June 22, 2021 09:00:00',
  },
  {
    couple: 'Herfst',
    Wedding_date: 'September 23, 2021 08:30:00',
  },
  {
    couple: 'Invierno',
    Wedding_date: 'December 22, 2020 11:00:00',
  },
];

const seedGallery = () => Gallery.bulkCreate(gallerydata);

module.exports = seedGallery;
