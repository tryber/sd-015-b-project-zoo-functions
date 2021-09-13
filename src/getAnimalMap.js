const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalMap(options) {
  return species.map((specie) => specie.name);
}
console.log(getAnimalMap);
module.exports = getAnimalMap;
