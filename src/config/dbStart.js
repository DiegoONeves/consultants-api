const mongoose = require('mongoose'),
    config = require('./config');

mongoose.Promise = require('bluebird');
mongoose.set('debug', !config.production);

const mongoConnection = mongoose.connect(config.mongodb.uri, config.mongodb.options);
mongoConnection
    .then(
        db => console.log('\x1b[36m%s\x1b[0m', 'MongoDB successfully connected'),
        err => console.log('\x1b[33m%s\x1b[0m', 'Error while connecting to mongodb: ', err)
    );

module.exports = {
    MongoConnection: mongoConnection
};


