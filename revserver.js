var express = require('express');
var path = require('path');
//var bodyParser = require('body-parser');
var revroutes = require('./app/routes/revision.server.routes')
var app = express()
//app.use(bodyParser.json());
app.set('views', path.join(__dirname,'/app/views'));
app.use(express.static(path.join(__dirname, '/public')));
app.use('/',revroutes)
app.listen(3000, function () {
	  console.log('App listening on port 3000')
	})	
module.exports = app;