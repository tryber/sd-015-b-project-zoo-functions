const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.filter((animalActual) => animalActual.name === animal)
    .map((ages) => ages.residents.every((resident) => resident.age > age)).shift();
}

module.exports = getAnimalsOlderThan;

console.log(getAnimalsOlderThan('penguins', 4));
