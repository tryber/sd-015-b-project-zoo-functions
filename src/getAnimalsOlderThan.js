const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.filter((specie) => specie.name === animal).every((specie, index) =>
    specie.residents[index].age > age);
}

module.exports = getAnimalsOlderThan;
