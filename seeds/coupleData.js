const { Couples } = require('../models');

const Coupledata = [
  {
    Couple: 'Blossoming Apricot',
    Theme: 'LedyX',
    Wedding_date: 'March 30, 2018',
    gallery_id: 1,
    filename: '01-blossoming-apricot.jpg',
    description:
      'Branches with pink apricot blossoms against a blue background.',
  },
  {
    Couple: 'Cosmos Flowers',
    Theme: 'WStudio',
    Wedding_date: 'May 05, 2017',
    gallery_id: 1,
    filename: '02-cosmos-flowers.jpg',
    description: 'Pink cosmos flowers against a blue sky.',
  },
  
];

const seedCouples = () => Couples.bulkCreate(Coupledata);

module.exports = seedCouples;
