const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  function minAge(number) {
    if (number.age >= age) {
      return number;
    }
  }
  return data.species.some((specie) => specie.name === animal && specie.residents.every(minAge));
}

module.exports = getAnimalsOlderThan;
