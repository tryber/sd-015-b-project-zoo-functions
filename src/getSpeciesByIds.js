const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return species.filter((kind) => ids.includes(kind.id));
}

module.exports = getSpeciesByIds;
