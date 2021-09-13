const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  const animalsInfo = {};
  if (!animal) {
    species.forEach(({ name, residents }) => {
      animalsInfo[name] = residents.length;
    });
    return animalsInfo;
  }

  const animalSelected = species.find((specie) => specie.name === animal.specie);

  if (animal.gender) {
    const selectedGender = animalSelected.residents
      .filter((resident) => resident.sex === animal.gender);
    return selectedGender.length;
  }

  return animalSelected.residents.length;
}

module.exports = countAnimals;
