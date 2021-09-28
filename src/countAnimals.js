const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  const animalsQuantity = {};
  if (!animal) {
    species.forEach((namedAnimals) => {
      animalsQuantity[`${namedAnimals.name}`] = namedAnimals.residents.length;
    });
    return animalsQuantity;
  }
  const quantity = species.filter((specie) => specie.name === animal.specie)[0].residents;
  const quantityBySex = quantity.filter((namedAnimals) => namedAnimals.sex === animal.sex);
  return !animal.sex ? quantity.length : quantityBySex.length;
}

module.exports = countAnimals;
