const knex = require('./knex-config');

class DbInterface {

  static async getCoordinates(id) {
    return knex
        .table('Coordinates').select('*');
  }
}

module.exports = DbInterface;