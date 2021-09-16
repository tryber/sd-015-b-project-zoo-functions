const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const allAnimals = species.reduce((acumulador, item) =>
      ((acumulador[item.name] = item.residents.length), acumulador), {});
    return allAnimals;
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
