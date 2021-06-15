const router = require('express').Router();
const sequelize = require('../config/connection');
const { Profile } = require('../models');


router.post('/', async (req, res) => {
console.log(req.body)
  console.log("Create Profile")
  try {
    const profileData = await Profile.create({
      ...req.body,
      user_id: req.session.user_id
    });


    res.redirect('/profile')

  } catch (err) {
    res.status(400).json(err);
  }

})


router.post('/update', async (req, res) => {
  console.log(req.body)
  console.log(req.session)

  Profile.update(
    {
      name: req.body.name,
      wedding_date: req.body.wedding_date,
      theme: req.body.theme,
      main_dish: req.body.main_dish,
      band: req.body.band,
      description:req.body.description,
      image_url:req.body.image_url,
      date_end:req.body.date_end
    },
    {
      where: {
        id: req.body.profile_id,
      },
    }
  )
    .then((updateProfile) => {
      res.redirect("/profile")
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });

  

});

router.get('/', async (req, res) => {
  try {
      const profilesData = await Profile.findAll({});
      const profiles = profilesData.map((profile) => profile.get({ plain: true }));
      res.json(profiles);
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports = router