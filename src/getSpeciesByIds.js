const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (!ids[0]) return [];
  return species.filter(({ id }) => ids.some((identifiers) => id === identifiers));
}

module.exports = getSpeciesByIds;
