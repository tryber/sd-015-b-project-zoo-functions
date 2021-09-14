const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAllAnimals(speciesArray) {
  const result = {};

  speciesArray.forEach((oneSpecies) => {
    result[oneSpecies.name] = oneSpecies.residents.length;
  });

  return result;
}

function countSpecificAnimals(speciesArray, animal) {
  return animal.sex === undefined
    ? speciesArray.find((oneSpecies) => oneSpecies.name === animal.specie).residents.length
    : speciesArray.find((oneSpecies) => oneSpecies.name === animal.specie).residents
      .filter((resident) => resident.sex === animal.sex).length;
}

function countAnimals(animal) {
  return animal === undefined ? countAllAnimals(species) : countSpecificAnimals(species, animal);
}

console.log(countAnimals({ specie: 'penguins' }));

module.exports = countAnimals;
