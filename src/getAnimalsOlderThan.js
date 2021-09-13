const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  let result = '';
  return species.some((specie) => {
    if (specie.name === animal) {
      result = specie.residents.every((resident) => resident.age >= age);
    }
    return result;
  });
}

module.exports = getAnimalsOlderThan;
