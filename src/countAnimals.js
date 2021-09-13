const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const emptyObject = species.reduce((result, current) => {
  const currentSpecieName = current.name;
  const currentSpecieLength = current.residents.length;
  const tempObj = { [currentSpecieName]: currentSpecieLength };

  return Object.assign(result, tempObj);
}, {});

function countAnimals(animal) {
  if (!animal) {
    return emptyObject;
  }
  return animal.gender ? species
    .find((specie) => specie.name === (animal.specie))
    .residents.filter((resident) => resident.sex === (animal.gender)).length : species
    .find((specie) => specie.name === animal.specie).residents.length;
}

module.exports = countAnimals;
