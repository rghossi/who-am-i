var express = require('express');
var app = express();
var useragent = require('express-useragent');

app.use(useragent.express());
app.get('/api/whoami', function (req, res) {
	var result = {};
	result.language = req.headers["accept-language"].split(",")[0].split(';')[0];
	result.software = req.useragent.source.split('(')[1].split(')')[0];
	result.ipadress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	res.send(result);
});

app.listen(process.env.PORT || 3000, function () {
  console.log('App listening on port 3000!');
});