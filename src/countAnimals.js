const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  // finding specie
  const findingAnimal = species.find((elemento) => animal === elemento.specie);
  return findingAnimal;
}

module.exports = countAnimals;

console.log(countAnimals({ specie: 'penguins' }))