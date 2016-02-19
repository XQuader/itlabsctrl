var express    = require('express');
var bodyParser = require('body-parser');
var fs         = require('fs');
var db         = require('./db');

var app        = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8081;

var router = express.Router();

router.get('/teachers', function(req, res) {
  console.log('Called GET teachers');
  db.any("select first_name, last_name from person")
    .then(function (data) {
      res.json(data);
    })
    .catch(function (error) {
      res.end(error);
    });
});


app.use('/api', router);

app.listen(port);
console.log('Service started on port ' + port);