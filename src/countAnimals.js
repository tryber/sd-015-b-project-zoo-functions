const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  const animalObject = {};
  if (!animal) {
    species.forEach((specie) => {
      animalObject[`${specie.name}`] = specie.residents.length;
    });
    return animalObject;
  }
  const selectSpecie = (specie) => specie.name === animal.specie;
  const selectedSpecie = species.find(selectSpecie);
  if (animal.gender) {
    const selectGender = (resident) => resident.sex === animal.gender;
    const selectedGender = selectedSpecie.residents.filter(selectGender);
    return selectedGender.length;
  }
  return selectedSpecie.residents.length;
}

module.exports = countAnimals;
