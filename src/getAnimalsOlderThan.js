const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const specie = species.find((bicho) => bicho.name === animal);
  return specie.residents.every((bicho) => bicho.age > age);
}

module.exports = getAnimalsOlderThan;
