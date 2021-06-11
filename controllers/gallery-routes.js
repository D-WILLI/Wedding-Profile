const { Profile } = require('../models');
const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
      const profilesData = await Profile.findAll({});
      const profiles = profilesData.map((profile) => profile.get({ plain: true }));
      res.render('gallery',{profiles});
    } catch (err) {
      res.status(500).json(err);
    }
  });
  module.exports = router