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
  {
    Couple: 'Sand + Sea = Summer',
    Theme: 'S_Photo',
    Wedding_date: 'June 10, 2019',
    gallery_id: 2,
    filename: '03-sand-sea-summer.jpg',
    description: 'Sandy beach with the blue sea and sky in the background.',
  },
  {
    Couple: 'Beach Chairs',
    Theme: 'icemanphotos',
    Wedding_date: 'July 4, 2020',
    gallery_id: 2,
    filename: '04-beach-chairs.jpg',
    description: 'Two beach chairs under a beach umbrella on the beach.',
  },
  {
    Couple: 'Beach Sunrise',
    Theme: 'VRstudio',
    Wedding_date: 'August 14, 2016',
    gallery_id: 2,
    filename: '05-beach-sunrise.jpg',
    description: 'Sun setting in the horizon with waves lapping the shore.',
  },
  
  
];

const seedCouples = () => Couples.bulkCreate(Coupledata);

module.exports = seedCouples;
