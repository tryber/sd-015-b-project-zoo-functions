const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const verifyParameters = () => species
  .reduce((acc, specie) => Object.assign(acc, {
    [specie.name]: specie.residents.length,
  }), {});

const findSpecie = (animal) => species.find((specie) => specie.name === (animal.specie));

const filterGender = (animal) => findSpecie(animal).residents
  .filter((resident) => resident.sex === (animal.gender));

function countAnimals(animal) {
  if (!animal) {
    return verifyParameters();
  }
  return animal.gender
    ? filterGender(animal).length
    : findSpecie(animal).residents.length;
}

module.exports = countAnimals;
