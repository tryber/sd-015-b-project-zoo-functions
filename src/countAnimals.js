const data = require('../data/zoo_data');

const getAnimals = (accumulator, currentAnimal) => {
  const nameAnimal = currentAnimal.name;
  const lengthAnimal = currentAnimal.residents.length;
  return { ...accumulator, [nameAnimal]: lengthAnimal };
};
const allSpecies = (specie) => specie.reduce(getAnimals, {});

const genderCheck = (animals, animal) => ((animal === undefined) ? animals.sex
  : animals.sex === animal);

function countAnimals(animal) {
  return (!animal) ? allSpecies(data.species)
    : data.species.find((animalZoo) => animalZoo.name === animal.specie).residents
      .filter((sa) => genderCheck(sa, animal.sex)).length;
}

module.exports = countAnimals;
