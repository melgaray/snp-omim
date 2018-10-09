// Babel ES6/JSX Compiler
require('babel-register');

var swig  = require('swig');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('./app/routes');
var config = require('./config');
var mongoose = require('mongoose');
var swig  = require('swig');
var xml2js = require('xml2js');

var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var OmimGene = require('./models/omim');
var Phenotype = require('./models/phenotype');

var app = express();

mongoose.connect('mongodb://localhost/phenotype');
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/api/omim', function(req, res, next) {
	OmimGene.find()
	.exec(function(err, genes){
		if (err) return next(err);
		return res.send(genes);
	});
});

app.get('/api/omimWithPhenotype', function(req, res, next) {
  OmimGene.find({'hasPhenotype': true})
  .exec(function(err, genes){
    if (err) return next(err);
    return res.send(genes);
  });
});

app.get('/api/snp', function(req, res, next) {
  Phenotype.find()
  .exec(function(err, genes){
    if (err) return next(err);
    return res.send(genes);
  });
});

app.use(function(req, res) {
  Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
      var page = swig.renderFile('views/index.html', { html: html });
      res.status(200).send(page);
    } else {
      res.status(404).send('Page Not Found')
    }
  });
});
var server = require('http').createServer(app);

server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

//app.listen(app.get('port'), function() {
//  console.log('Express server listening on port ' + app.get('port'));
//});