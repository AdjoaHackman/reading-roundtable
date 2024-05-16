const router = require('express').Router();
const userRoutes = require('./userRoutes');

const searchRoutes = require('./searchRoutes');
const libraryRoutes = require('./libraryRoutes');


router.use('/users', userRoutes);
router.use('/search', searchRoutes);
router.use('/library', libraryRoutes);

module.exports = router;
