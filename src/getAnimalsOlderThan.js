const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Iniciei porém não conclui
function getAnimalsOlderThan(animal, age) {
  const filteredSpecie = species.filter((specie) => specie.name === animal);
  const individos = filteredSpecie[0].residents;
  return individos.every((individuo) =>
    individuo.age >= age);
}

console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
