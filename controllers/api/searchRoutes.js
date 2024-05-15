const router = require('express').Router();

//const { Book } = require('../models');
const { searchBooks } = require('../../utils/google.js');

router.get ('/google' , async (req, res) => {
    try {
        const bookData = await searchBooks("Harry Potter");
        console.log(bookData);

        if(!bookData) {
            return res.status(400).json({message:"No results found"});
        } else {
            return res.status(200).json(bookData);
        }

    
    } catch(err) {
        console.log(err);
        return res.status(500).json(err);
    }
});



module.exports = router;