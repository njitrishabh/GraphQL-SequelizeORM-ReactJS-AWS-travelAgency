const Sequelize = require('sequelize');
const db = require('../config/database');

const Quotes = db.define('quotes', {
    departure_location: {
        type: Sequelize.STRING
    },
    destination_location: {
        type: Sequelize.STRING
    },
    departure_date: {
        type: Sequelize.DATEONLY
    },
    return_date: {
        type: Sequelize.DATEONLY
    },
    total_travellers: {
        type: Sequelize.INTEGER
    },
    transportation: {
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.INTEGER
    }
});

db.sync()
    .then(function () {
        Quotes.bulkCreate([
            {
                id: 1,
                departure_location: "Toronto",
                destination_location: "Calgary",
                departure_date: '2016-08-09 07:42:28',
                return_date: '2016-10-09 07:42:28',
                total_travellers: 5,
                transportation: "car rental",
                name: "John Smith",
                phone: 1223456789

            },
            {
                id: 2,
                departure_location: "Vancouver",
                destination_location: "Calgary",
                departure_date: '2017-08-09 07:42:28',
                return_date: '2017-08-10 07:42:28',
                total_travellers: 5,
                transportation: "car rental",
                name: "Jane Smith",
                phone: 1223456789
            }
        ], {
            validate: true,
            ignoreDuplicates: true
        })
    });

module.exports = Quotes;