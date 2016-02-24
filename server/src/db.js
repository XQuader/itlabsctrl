// Loading and initializing the library:
var pgp = require('pg-promise')({
    // Initialization Options
});

var cn = {
    host: 'localhost', // server name or IP address;
    port: 5432,
    database: 'itlabs',
    user: 'postgres',
    password: '321654',
    schema: 'public'
};

module.exports = pgp(cn);