const data = require('../data/zoo_data');

const { species } = data;
function getAnimalsOlderThan(animal, age) {
  const nameSpecies = species.find(({ name }) => name === animal);
  return nameSpecies.residents.every((ageSpecies) => ageSpecies.age > age);
}

module.exports = getAnimalsOlderThan;
