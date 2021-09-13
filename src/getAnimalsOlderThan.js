const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const sameName = data.species.some((specie) => specie.name === animal);
  const catchAnimal = data.species.find((specie) => specie.name === animal);
  const older = catchAnimal.residents.every((value) => value.age > age);

  return (sameName && older);
}

module.exports = getAnimalsOlderThan;
