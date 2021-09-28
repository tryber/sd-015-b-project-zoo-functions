const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    const allAnimals = species.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
    return allAnimals;
  }
  const { specie, sex: gender = undefined } = animal;
  if (gender === undefined) {
    const animalByName = species.find(({ name }) => name === specie).residents.length;
    return animalByName;
  }
  const animalByGender = species.find(({ name }) => name === specie)
    .residents.filter(({ sex }) => sex === gender).length;
  return animalByGender;
}

module.exports = countAnimals;
