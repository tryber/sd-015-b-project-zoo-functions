const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.map((iD) => data.species.find((animal) => animal.id === iD));
}

module.exports = getSpeciesByIds;
