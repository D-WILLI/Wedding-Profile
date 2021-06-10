const router = require('express').Router();
const { Gallery, Couple } = require('../models');

// GET one couple
router.get('/couple/:id', async (req, res) => {
  try {
    const CoupleData = await Couple.findByPk(req.params.id);

    const couple = CoupleData.get({ plain: true });

    res.render('couple', { couple });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;