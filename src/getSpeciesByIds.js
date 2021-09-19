const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => ids.map((i) => species.find((animal) => animal.id === i));

module.exports = getSpeciesByIds;
