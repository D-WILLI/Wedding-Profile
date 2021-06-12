
const router = require('express').Router();
const userRoutes = require('./user-routes');
const profileRoutes = require('./profile-routes');
const { User, Profile ,} = require('../models');
const galleryRoutes = require('./gallery-routes');

router.use('/gallery', galleryRoutes)
router.use('/api/users', userRoutes)
router.use('/api/profiles', profileRoutes)

router.get('/', async(req,res) =>{
  console.log(req.session)
  res.render('all')
})

router.get('/profile', async (req, res) => {
  console.log(req.session)
  
  try {

    const profileData = await Profile.findOne({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: User,
          attributes: ['name', 'email'],
        },
      ],
    });
    console.log(profileData)

    let profile = {
    }
    if (profileData === null) {
      profile = {
        name: "",
        mainDish: "",
        band: "",
        theme: "",
        wedding_date: ""
      }
    } else {
      profile = profileData.get({ plain: true });
      console.log(profile)
    }

    

    res.render('profile', {
      ...profile,
      logged_in: req.session.logged_in,
      has_profile: (profile.name !== "") ? true : false
    });
  } catch (err) {
    console.log("There was an error")
    console.log(err)
    res.status(500).json(err);
  }
})


module.exports = router;


