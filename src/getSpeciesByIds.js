const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const speciesArray = ids.map(id => data.species.find(specie => specie.id === id));
  return speciesArray;
}

module.exports = getSpeciesByIds;
