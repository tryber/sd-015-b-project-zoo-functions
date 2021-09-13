const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const specieObject = data.species.find(({ name }) => name === animal);
  return specieObject.residents.every((elementOfResident) => elementOfResident.age >= age);
}

module.exports = getAnimalsOlderThan;
