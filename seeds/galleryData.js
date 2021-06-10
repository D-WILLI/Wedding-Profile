const { Gallery } = require('../models');

const gallerydata = [
  {
    name: 'Printemps',
    Wedding_date: 'April 20, 2021 07:00:00',
  },
  {
    name: 'Sommer',
    Wedding_date: 'June 22, 2021 09:00:00',
  },
  {
    name: 'Herfst',
    Wedding_date: 'September 23, 2021 08:30:00',
  },
  {
    name: 'Invierno',
    Wedding_date: 'December 22, 2020 11:00:00',
  },
];

const seedGallery = () => Gallery.bulkCreate(gallerydata);

module.exports = seedGallery;
