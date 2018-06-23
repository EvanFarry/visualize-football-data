var http = require('http');

var sendRequest = function(key, path, responseControl) {

  var payload = '';

  var options = {
    host : 'api.football-data.org',
    path : path,
    headers : {
      'X-Auth-Token' : key,
      'X-Response-Control' : responseControl,
    }
  }

  return new Promise((resolve, reject) => {

    console.log('requested : ' + path);

    http.get(options, function(res){

      res.on('data', (chunk) => {
        payload += chunk;
      })//end res.on('data')

      res.on('end', () => {
        resolve(payload);
      })//end res.on('end')

      res.on('error', () => {
        console.log('sendRequest() error');
        reject();
      })

    })//end http.get()
  })//.then( /* resolve & reject handled by Bluebird in index.js */ )
}//end function()

exports.sendRequest = sendRequest;
