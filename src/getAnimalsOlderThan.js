const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const olderThan = data.species.find((species) => species.name === animal);

  return olderThan.residents.every((animalAge) => animalAge.age > age);
}

module.exports = getAnimalsOlderThan;
