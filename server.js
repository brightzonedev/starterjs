var express = require('express');
var path = require('path');
var opn = require('opn');

var port = 3030;
var app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './src/index.html'));
});

app.listen(port, function(err) {
   if (err) {
       console.error(err);
   } else {
     opn('http://localhost:' + port);
    }
});


