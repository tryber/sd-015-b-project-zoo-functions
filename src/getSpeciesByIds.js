const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const speciesId = species.filter(({ id }) => ids.includes(id));
  return speciesId;
}
console.log(getSpeciesByIds());

module.exports = getSpeciesByIds;
