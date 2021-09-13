const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return species
      .reduce((acc, specie) => Object.assign(acc, {
        [specie.name]: specie.residents.length,
      }), {});
  }
  if (animal.gender) {
    return species
      .find((specie) => specie.name === (animal.specie)).residents
      .filter((resident) => resident.sex === (animal.gender)).length;
  }
  return species
    .find((specie) => specie.name === (animal.specie)).residents.length;
}

module.exports = countAnimals;
