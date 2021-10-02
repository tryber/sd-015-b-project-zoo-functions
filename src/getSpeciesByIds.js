const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const speciesById = [];
  ids.forEach((specieParam) => {
    speciesById.push(species.find((specieArray) => specieArray.id === specieParam));
  });
  return speciesById;
}

module.exports = getSpeciesByIds;
