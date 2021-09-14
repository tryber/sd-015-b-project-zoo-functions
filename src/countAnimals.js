const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function animalsCount() {
  const animalsInfo = {};
  species.forEach(({ name, residents }) => {
    animalsInfo[name] = residents.length;
  });
  return animalsInfo;
}

function animalSelect(animal) {
  return species.find((specie) => specie.name === animal.specie);
}

function animalSelectGender(animalSelected, animal) {
  const selectedGender = animalSelected.residents
    .filter((resident) => resident.sex === animal.gender);
  return selectedGender.length;
}
function countAnimals(animal) {
  if (!animal) return animalsCount();

  const animalSelected = animalSelect(animal);
  if (animal.gender) return animalSelectGender(animalSelected, animal);

  return animalSelected.residents.length;
}

module.exports = countAnimals;
