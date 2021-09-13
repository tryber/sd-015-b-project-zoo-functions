const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (!ids) return [];

  const filtered = species.filter(({ id }, position) => id === ids[position]);
  return filtered;
}

module.exports = getSpeciesByIds;
