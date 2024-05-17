const express = require('express')
const router = require('express').Router();

//const { Book } = require('../models');
const { searchBooks } = require('../../utils/google.js');

// const app = express();
// app.use(express.static(path.join(__dirname, 'public')));

router.get ('/' , async (req, res) => {
    try {
        const bookData = await searchBooks(bookSearch);
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

router.post('/', async (req, res) => {
    console.log(req.body);

    res.json({
        message: 'Saved book data successfully.'
    });
});

module.exports = router;