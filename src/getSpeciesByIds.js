const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return species.filter(({ id }) => (ids.includes(id) ? id : undefined));
}

module.exports = getSpeciesByIds;
