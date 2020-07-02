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
                id: 12340,
                departure_location: "Toronto",
                destination_location: "Calgary",
                departure_date: '2020-08-09 07:42:28',
                return_date: '2029-10-09 07:42:28',
                total_travellers: 5,
                transportation: "car rental",
                name: "James Smith",
                phone: 7323456780

            },
            {
                id: 12341,
                departure_location: "Vancouver",
                destination_location: "New York",
                departure_date: '2020-10-09 07:42:28',
                return_date: '2020-11-11 07:42:28',
                total_travellers: 5,
                transportation: "Bus",
                name: "Michael Smith",
                phone: 8323456781
            },
            {
                id: 12342,
                departure_location: "Edmonton",
                destination_location: "Los Angeles",
                departure_date: '2020-09-09 07:42:28',
                return_date: '20120-11-10 07:42:28',
                total_travellers: 5,
                transportation: "Train",
                name: "Robert Smith",
                phone: 9323456782
            },
            {
                id: 12343,
                departure_location: "Montreal",
                destination_location: "Boston",
                departure_date: '2020-07-09 07:42:28',
                return_date: '2020-08-10 07:42:28',
                total_travellers: 5,
                transportation: "car rental",
                name: "Maria Garcia",
                phone: 6323456783
            },
            {
                id: 12344,
                departure_location: "Quebec City",
                destination_location: "Seattle",
                departure_date: '2020-10-01 07:42:28',
                return_date: '2020-10-30 07:42:28',
                total_travellers: 5,
                transportation: "Train",
                name: "Adam Johnson",
                phone: 5323456784
            },
            {
                id: 12345,
                departure_location: "Victoria",
                destination_location: "San Francisco",
                departure_date: '2020-07-12 07:42:28',
                return_date: '2020-08-15 07:42:28',
                total_travellers: 5,
                transportation: "car rental",
                name: "Mary Rafferty",
                phone: 4323456785
            },
            {
                id: 12346,
                departure_location: "Winnipeg",
                destination_location: "Houston",
                departure_date: '2020-09-19 07:42:28',
                return_date: '2020-10-01 07:42:28',
                total_travellers: 5,
                transportation: "Bus",
                name: "David Hernandez",
                phone: 3323456786
            }
        ], {
            validate: true,
            ignoreDuplicates: true
        })
    });

module.exports = Quotes;