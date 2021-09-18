const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return ids.map((id) => species.find((specieID) => specieID.id === id));
}

module.exports = getSpeciesByIds;
