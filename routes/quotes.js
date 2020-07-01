const express = require('express');
const router = express.Router();
const db = require('../config/database');
const quote = require('../models/Quotes');

router.get('/', (req, res) =>
    quote.findAll()
        .then(quotes => {
            console.log(quotes);
            res.sendStatus(200);
        })
        .catch(err => console.log(err))
);

module.exports = router;