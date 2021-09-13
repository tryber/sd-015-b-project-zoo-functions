const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return species.filter((elemento, index) => elemento.id === ids[index] || elemento.id === ids[0]);
}

console.log(getSpeciesByIds('e8481c1d-42ea-4610-8e11-1752cfc05a46'));

module.exports = getSpeciesByIds;
