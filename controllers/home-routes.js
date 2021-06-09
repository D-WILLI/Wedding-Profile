const router = require('express').Router();
const { Gallery, Couple } = require('./models');


// Is this a Model, a View, or a Controller? 
// This file is a Controller. 
// What is it responsible for handling?
// It routes commands to the Model and View parts.


// Add a comment describing the purpose of the 'get' route
// GET route for getting all of the dishes that are on the menu
router.get('/', async (req, res) => {
  // Add a comment describing the purpose of the render method
  // This method is rendering the 'all' Handlebars.js template. This is how we connect each route to the correct template.
  res.render('all');
});

module.exports = router;


// // GET one couple
// router.get('/couples/:id', async (req, res) => {
//   try {
//     const CoupleData = await Couple.findByPk(req.params.id);

//     const couple = CoupleData.get({ plain: true });

//     res.render('couple', { couple });
//     console.log('couple')
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// module.exports = router;
