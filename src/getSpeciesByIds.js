const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) {
    return [];
  }
  return ids.map((id) => species.find((animal) => animal.id === id));
}

module.exports = getSpeciesByIds;
