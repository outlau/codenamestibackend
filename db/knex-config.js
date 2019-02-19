const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : 'localhost',
    user : 'outlau',
    password : 'tupac21',
    database : 'sti'
  }
});

module.exports = knex;