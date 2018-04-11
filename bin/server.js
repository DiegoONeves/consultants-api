process.env.PORT = process.env.PORT || 3000;
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var app = express();

app.disable('etag');
require('../src/middlewares')(app);
require('../src/config/dbStart');
require('../src/app')(app);

app.listen(process.env.PORT, () => {
    console.log('\x1b[32m%s\x1b[0m', `\nListening on PORT: ${process.env.PORT} and Env: ${process.env.NODE_ENV}\n`);
});

module.exports = app;