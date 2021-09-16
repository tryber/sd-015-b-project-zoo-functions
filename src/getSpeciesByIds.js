const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.map((i) => data.species.find((animal) => animal.id === i));
}

module.exports = getSpeciesByIds;
