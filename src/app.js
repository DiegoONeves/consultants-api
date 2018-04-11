module.exports = (app) => {
	require('../src/routes')(app);
	return app;
};