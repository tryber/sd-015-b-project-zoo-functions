const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];
  return ids.map((id) => data.species.filter((specie) => specie.id === id));
}

module.exports = getSpeciesByIds;
