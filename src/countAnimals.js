const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    const nameAndQuantity = species.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
    return nameAndQuantity;
  }
  const { specie, sex } = animal;
  const animalData = species.find(({ name }) => name === specie);
  if (!sex) {
    return animalData.residents.length;
  }
  const filterGender = animalData.residents.filter((gender) => gender.sex === sex);
  return filterGender.length;
}

module.exports = countAnimals;
