const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  // return species.find((specie) => (specie.name === animal)).residents
  //   .every((resident) => resident.age >= age);

  const foundSpecie = species.find((specie) => (specie.name === animal));
  const residentsHaveMinimumAgeOrNot = foundSpecie.residents
    .every((resident) => resident.age >= age);
  return residentsHaveMinimumAgeOrNot;
}

module.exports = getAnimalsOlderThan;
