const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '',
    user : 'root',
    password : '',
    database : 'sti'
  }
});

module.exports = knex;