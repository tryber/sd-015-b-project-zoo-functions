const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (!ids) return [];
  const result = data.species.filter((specie) => (ids.some((id) => id === specie.id)));
  return result;
}

module.exports = getSpeciesByIds;
