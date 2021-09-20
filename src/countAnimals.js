const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  return species.filter(({ name }) => name === animal);
}
console.log(countAnimals('lions'));
console.log(countAnimals());

module.exports = countAnimals;
