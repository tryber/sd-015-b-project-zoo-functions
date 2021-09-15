const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  const { gender, specie } = animal;

  console.log(specie);
  return !animal ? gender : species.find((especie) => especie.name === animal.specie).residents;
}

module.exports = countAnimals;

console.log(countAnimals({ specie: 'bears' }));
