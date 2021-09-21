const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  const animalNames = {};
  if (typeof animal === 'undefined') {
    species.forEach((specieName) => {
      animalNames[`${specieName.name}`] = specieName.residents.length;
    });
    return animalNames;
  }
  if (typeof animal.sex !== 'undefined') {
    const residents = species.find((specie) => specie.name === animal.specie);
    const genderAnimal = residents.residents.filter((element) => element.sex === animal.sex);
    return genderAnimal.length;
  }
  const findSpecie = species.find((specie) => specie.name === animal.specie);
  return findSpecie.residents.length;
}

module.exports = countAnimals;
