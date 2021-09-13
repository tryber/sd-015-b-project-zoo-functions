const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const specie = data.species.filter(({ id }) => ids.includes(id));
  if (!ids) {
    return [];
  }
  return specie;
}

module.exports = getSpeciesByIds;
