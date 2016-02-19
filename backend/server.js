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
  db.any("select id, first_name, last_name from person")
    .then(function (data) {
      console.log(data);
      res.json(data);
    })
    .catch(function (error) {
      console.log(error);
      res.end(error);
    });
});

router.get('/teacher/:id', function(req, res) {
  "use strict";
  console.log('Called GET teacher details');
  db.any("select subject.name from person_subject " +
         "inner join subject on (subject.id = person_subject.subject)" +
                             "and ($1 = person_subject.person)", req.params.id)
    .then(function (data) {
      console.log(data);
      res.json(data);
    })
    .catch(function (error) {
      console.log(error);
      res.end(error);
    });

});


app.use('/api', router);

app.listen(port);
console.log('Service started on port ' + port);