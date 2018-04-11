const cors = require('cors'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    errorHandler = require('./errorHandler'),
    compress = require('compression');


module.exports = (app) => {
    app.use(errorHandler);

    app.use(compress());

	app.use(cors({
		origin: '*',
		exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
		maxAge: 5,
		credentials: true,
		allowMethods: ['GET', 'POST', 'UPDATE', 'PUT', 'PATCH', 'DELETE'],
		allowHeaders: ['Content-Type', 'Authorization', 'Accept']
	}));

    app.use(bodyParser.json());
    app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(methodOverride('X-HTTP-Method-Override'));
};