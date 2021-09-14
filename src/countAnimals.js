const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const verifyParameters = () => species
  .reduce((acc, specie) => Object.assign(acc, {
    [specie.name]: specie.residents.length,
  }), {});

const findResidents = (animal) => species
  .find((specie) => specie.name === (animal.specie)).residents;

const filterGender = (animal) => findResidents(animal)
  .filter((resident) => resident.sex === (animal.gender));

function countAnimals(animal) {
  if (!animal) {
    return verifyParameters();
  }
  return animal.gender
    ? filterGender(animal).length
    : findResidents(animal).length;
}

module.exports = countAnimals;
