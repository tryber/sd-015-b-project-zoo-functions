const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const allAnimals = species.map((animals) => (animals.name));
    const countAllAnimals = species.map((animals) => (animals.residents.length));
    const transformeObj = {};
    for (let index = 0; index < allAnimals.length; index += 1) {
      transformeObj[allAnimals[index]] = countAllAnimals[index];
    }
    return transformeObj;
  }
  const findAnimals = species.find((animals) => (animals.name === animal.specie));
  if (animal.gender === '' || animal.gender === undefined) {
    const countAnimal = findAnimals.residents.length;
    return countAnimal;
  }
  const countAnimalsByGender = findAnimals.residents.filter((genders) =>
    (genders.sex === animal.gender)).length;
  return countAnimalsByGender;
}

module.exports = countAnimals;
