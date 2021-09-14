const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const allAnimals = () => species.reduce((acc, value) => {
  acc[value.name] = value.residents.length;
  return acc;
}, {});

function countAnimals(animal) {
  // seu código aqui
  if (!animal) return allAnimals();
  const specieAnimal = species.find((specie) => specie.name === animal.specie);
  if (!animal.sex) {
    return specieAnimal.residents.length;
  }
  return specieAnimal.residents.filter((specie) => specie.sex === animal.sex).length;
}

module.exports = countAnimals;
