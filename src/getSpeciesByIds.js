const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  return species.filter((specie) => ids.some((id) => specie.id === id));
}

console.log(getSpeciesByIds());

module.exports = getSpeciesByIds;
