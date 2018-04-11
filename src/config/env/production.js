module.exports = {
	production: true,
    mongodb: {
        uri: 'mongodb://admin:admin123@ds241059.mlab.com:41059/fctests',
        options: {
            user: 'admin',
            pass: 'admin123',
            useMongoClient: true
        }
    }
};