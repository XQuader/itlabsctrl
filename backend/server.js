var express    = require('express');
var bodyParser = require('body-parser');
var fs         = require('fs');

var app        = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8081;

var router = express.Router();

router.get('/teachers', function(req, res) {
  console.log('Called GET teachers');
  fs.readFile('../api/teachers.json', function(err, data) {
    if (err)
      res.end('File not found');
    else
      res.json(JSON.parse(data.toString()));
  });
});


app.use('/api', router);

app.listen(port);
console.log('Service started on port ' + port);