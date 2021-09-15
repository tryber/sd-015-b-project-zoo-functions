const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return species.filter((speciesId) => ids.includes(speciesId.id));
}

module.exports = getSpeciesByIds;
console.log(getSpeciesByIds('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
