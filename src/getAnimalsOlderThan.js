const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const selectedAnimal = data.species.find(({ name }) => name === animal);
  const hisAge = selectedAnimal.residents.every((resident) => resident.age >= age);
  return hisAge;
}

module.exports = getAnimalsOlderThan;
