var express = require('express');
var app = express();

app.use(express.static(__dirname + '/../../app'));

app.get('*', function(request, response){
  response.sendFile('app/index.html');
});

module.exports = app;
