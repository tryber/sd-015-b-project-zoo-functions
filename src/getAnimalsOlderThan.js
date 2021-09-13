const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species.find(((animals, index) => (animals.name === animal)
  (test.residents.age[index] >= age)));
}
module.exports = getAnimalsOlderThan;
