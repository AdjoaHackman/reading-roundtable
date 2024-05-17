const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');
const { searchBooks } = require('../utils/google.js');


router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    if (!userData) {
      return res.status(400).json({ message: "No users found" });
    }

    const users = userData.map((project) => project.get({ plain: true }));

    return res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get('/search', async (req, res) => {
  req.query.bookSearch;
  
  try {
    const bookData = await searchBooks(req.query.bookSearch);
    console.log(bookData);

    if (!bookData) {
      return res.status(400).json({ message: "No results found" });
    }

    return res.render('searchResult', {
      bookData,

    });

  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
