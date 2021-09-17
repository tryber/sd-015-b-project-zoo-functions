const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const verifyAnimal = data.species.find(({ name }) => name === animal);
  const verifyAge = verifyAnimal.residents.every((resident) => resident.age > age);

  return verifyAge;
}

module.exports = getAnimalsOlderThan;
