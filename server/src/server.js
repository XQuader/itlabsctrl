var express     = require('express');
var bodyParser  = require('body-parser');
var db          = require('./db');
var fs          = require('fs');
var path        = require('path');
var multiparty  = require('connect-multiparty');

var multipartyMiddleware = multiparty({ uploadDir: 'uploads' });

var app         = express();

fs.mkdir('uploads', (err) => {
    "use strict";
    console.log(err);
})

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8081;

var router = express.Router();

router.route('/teachers')
    .get(function (req, res) {
        console.log('Called GET teachers');
        db.any('select * from person')
            .then(function (data) {
                res.json(data);
            })
            .catch(function (error) {
                console.log(error);
                res.json({
                    success: false,
                    error: error.message || error
                });
            });
    })
    .post(function (req, res) {
        console.log('Called POST teacher');
        db.none('insert into person (first_name, last_name, birth, sex) values($1, $2, $3, $4)', [req.body.first_name, req.body.last_name, req.body.birth, req.body.sex])
            .then(function (data) {
                res.json({
                    success: true,
                    data: null
                });
            })
            .catch(function (error) {
                console.log(error);
                res.json({
                    success: false,
                    error: error.message || error
                });
            });
    });

router.route('/teacher/:id')
    .get(function (req, res) {
        'use strict';

        console.log('Called GET teacher details');
        db.any('select subject.name from subject ' +
                'inner join person_subject on (subject.id = person_subject.subject)' +
                'and ($1 = person_subject.person)', req.params.id)
            .then(function (data) {
                console.log(data);
                res.json(data);
            })
            .catch(function (error) {
                console.log(error);
                res.json({
                    success: false,
                    error: error.message || error
                });
            });
    })
    .delete(function (req, res) {
        'use strict';

        console.log('Called DELETE teacher');
        db.none('delete from person where person.id = $1', req.params.id)
            .then(function (data) {
                res.json({
                    success: true,
                    data: null
                });
            })
            .catch(function (error) {
                console.log(error);
                res.json({
                    success: false,
                    error: error.message || error
                });
            });
    });

router.route('/upload')
    .post(multipartyMiddleware, function (req, res) {
        'use strict';

        console.log('Upload file or source');
        if (req.body.file) {
            var name = Math.random().toString().replace('0.','') + '.cpp';
            var file = fs.createWriteStream('uploads/' + name);
            file.write(req.body.file);
            file.end(() => {
                console.log('Source saved under \\'+ path.normalize('uploads\\' + name));
            });
        } else {
            console.log('File saved under \\' + path.normalize(req.files.file.path));
        }
        res.end('OK');
    });

app.use('/api', router);

app.listen(port);
console.log('Service started on port ' + port);