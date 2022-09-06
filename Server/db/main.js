const knex = require('knex')


const cnt = knex({
client: 'pg',

connection: {
user: 'username2',
password: 'passwordstring',
host: 'localhost',
port: '5432',
database: 'pavle'
}

});



module.exports = cnt;
