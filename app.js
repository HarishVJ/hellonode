var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('The changes are here');
});

var server = app.listen(process.env.PORT || 3000, function () {
    console.log("The application is running under port : " + 3000);
});