const router = require('express').Router();
const { Gallery, Couples } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
    console.log(req.body)
  try {
    const dbGalleryData = await Gallery.findAll({
      include: [
        {
        model: Couples,
          attributes: ['filename', 'description', 'name', 'theme'],
        },
      ],
    });

    const galleries = dbGalleryData.map((gallery) =>
      gallery.get({ plain: true })
    );

    res.render('homepage', {
      galleries,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;