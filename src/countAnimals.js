const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal) {
    const { specie, sex } = animal;
    const specieRequired = species.find((element) => element.name === specie);
    let quantity = specieRequired.residents;
    if (sex) {
      quantity = quantity.filter((element) => element.sex === sex);
    } return quantity.length;
  }
  const result = {};
  species.forEach((element) => {
    const animalName = element.name;
    const animalResidents = element.residents.length;
    result[`${animalName}`] = animalResidents;
  });
  return result;
}

module.exports = countAnimals;
