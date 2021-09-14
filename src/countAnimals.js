const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal) {
    const { specie, sex } = animal;
    const specieRequired = species.find((element) => element.name === specie);
    let quantity = specieRequired.residents;
    if (sex) {
      quantity = quantity
        .filter((element) => element.sex.toLowerCase() === sex.toLowerCase());
    } return quantity.length;
  }
  const objectReturn = {};
  species.forEach((element) => {
    const animalName = element.name;
    const animalResidents = element.residents.length;
    objectReturn[`${animalName}`] = animalResidents;
  });
  return objectReturn;
}

module.exports = countAnimals;
