//Imports
var express = require('express'); //make express app
var bodyParser = require('body-parser'); //include bodyParser
var Promise = require('bluebird'); //promise library

//import functions
var fun = require('./fun.js');

//declarations
const app = express();

//user body parser
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

//allow acces control?
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
})

//--------------------------------------------------------
// home route
//--------------------------------------------------------
app.get('/', function(req, res) {
  res.send("home page");
})

//--------------------------------------------------------
// '/request' route -- pass parameters to API call
//--------------------------------------------------------
app.get('/request', function(req, res){

  //Promise from bluebird library
  Promise.try(function(){
    return fun.sendRequest(
      req.query.key,
      req.query.path,
      req.query.responseContorl
    )
  }).then(function(data) {
    res.send(data);
  })
})

//--------------------------------------------------------
//open & listen on port
//--------------------------------------------------------
app.listen(3000, () => console.log('listening on port 3000'));

module.exports = app;
