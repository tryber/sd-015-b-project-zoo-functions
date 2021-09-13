const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const emptyObject = species.reduce((result, current) => {
  const currentSpecieName = current.name;
  const currentSpecieLength = current.residents.length;
  const tempObj = { [currentSpecieName]: currentSpecieLength };

  return Object.assign(result, tempObj);
}, {});

const findSpecie = (animal) => species.find((specie) => specie.name === (animal.specie));

const filterGender = (animal) => findSpecie(animal).residents
  .filter((resident) => resident.sex === (animal.gender));

function countAnimals(animal) {
  if (!animal) {
    return emptyObject;
  }
  return animal.gender
    ? filterGender(animal).length
    : findSpecie(animal).residents.length;
}

module.exports = countAnimals;
