const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return species
      .reduce((acc, specie) => Object.assign(acc, {
        [specie.name]: specie.residents.length,
      }), {});
  }
  return animal.gender
    ? species
      .find((specie) => specie.name === (animal.specie)).residents
      .filter((resident) => resident.sex === (animal.gender)).length
    : species
      .find((specie) => specie.name === (animal.specie)).residents.length;
}

module.exports = countAnimals;
