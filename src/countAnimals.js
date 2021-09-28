const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    const catchEmAll = species.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
    return catchEmAll;
  }
  const { specie, sex: gender = undefined } = animal;
  if (gender === undefined) {
    const findAnimalByName = species.find(({ name }) => name === specie).residents.length;
    return findAnimalByName;
  }
  const findAnimalByGender = species.find(({ name }) => name === specie)
    .residents.filter(({ sex }) => sex === gender).length;
  return findAnimalByGender;
}

module.exports = countAnimals;
