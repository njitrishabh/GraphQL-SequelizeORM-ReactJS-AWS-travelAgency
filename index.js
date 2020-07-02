const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const db = require('./config/database');

db.authenticate()
    .then(function (err) {
        console.log('Connection has been established successfully.');
    }, function (err) {
        console.log('Unable to connect to the database:', err);
    });

// sample sql db query
const mysql = require('./config/create_table');
mysql.query(
    'show tables',
    function (err, results, fields) {
        console.log(results); // results contains rows returned by server
    }
);

const app = express();
app.use(cors());
app.get('/', (req, res) => res.send('INDEX'));
// quotes routes
app.use('/quotes', require('./routes/quotes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`app listening at http://localhost:${PORT}`))