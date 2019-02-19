// const APIError = require('../errors/api-error');
const dbInterface = require('../db/db-interface');
const { getCoordinates } = dbInterface;

module.exports = {
  getAll: async (req, res) => {
    const coordinates = await dbInterface.getCoordinates((req.params.id));
    res.send(coordinates);
  },
};
