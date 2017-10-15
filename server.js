var express = require('express');
var app = express();


// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// // make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {
    res.render('index.html');
});
app.get('/contact', function(req, res) {
    res.render('contact.html');
});

app.get('/download', function(req, res){
  var file = __dirname + 'public/music/i_don_t Know_why.m4a';
  res.download(file); // Set disposition and send it.
});



app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});