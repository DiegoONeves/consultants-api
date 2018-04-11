module.exports = async (app) => {
	const fs = require('fs');

	fs.readdirSync(__dirname)
		.filter(file => file.includes('route'))
		.map(route => require(`./${route.replace('.js', '')}`)(app))

	return app;
};