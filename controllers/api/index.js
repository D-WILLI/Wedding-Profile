const router = require('express').Router();

const userRoutes = require('./user_routes');

router.use('/users', userRoutes);

module.exports = router;