const router = require('express').Router();
const { Book } = require('../models');
const { searchBooks } = require('../utils/google.js');

router.get ('/google' , async (req, res) => {
    try {
        const bookData = await searchBooks("Harry Potter");
        console.log(bookData);
    } catch(err) {
        console.log(err);
    }
});



module.exports = router;