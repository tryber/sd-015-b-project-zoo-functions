const data = require('../data/zoo_data');

function getSpeciesByIds(ids1, ids2) {
  if (!ids1) { return [] };
  const species = Object.values(data.species);
  const speciesById = [];
  speciesById.push(species.find((animal) => animal.id === ids1));
  if (!ids2) { return speciesById };
  speciesById.push(species.find((animal) => animal.id === ids2));
  return speciesById;
}

module.exports = getSpeciesByIds;
