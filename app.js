var express = require("express");
var app = express(),
    path = require('path'),
    bodyParser = require('body-parser');
app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'html'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.get('/', function(req, res) {
    res.render('main.html');
});
var port = 9999;
console.log('listening to port ' + port)
app.listen(port);