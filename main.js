var express = require('express');
var app = express();

app.get('/*', function (req, res) {
    res.sendFile( __dirname + "/index.html" );
});


var server = app.listen(5000, function () {
    console.log('Node server is running..');
});