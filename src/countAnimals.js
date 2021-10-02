const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    const animalsNumbers = {};
    const animals = species.map((names) => names.name);
    animals.forEach((item) => {
      const numberOfAnimals = species.find((crrAnimal) => crrAnimal.name === item).residents.length;
      animalsNumbers[item] = numberOfAnimals;
    });
    return animalsNumbers;
  }

  const getAnimal = species.find((crrAnimal) => crrAnimal.name === animal.specie).residents;

  if (Object.keys(animal).includes('sex')) {
    const getAnimalBySex = getAnimal.filter((crrAnimal) => crrAnimal.sex === animal.sex);
    return getAnimalBySex.length;
  }
  return getAnimal.length;
}

console.log(countAnimals());

module.exports = countAnimals;
