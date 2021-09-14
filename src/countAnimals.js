const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function emptyObject() {
  const object = {};

  species.forEach(({ name, residents }) => {
    object[name] = residents.length;
  });
  return object;
}

const findSpecie = (animal) => species.find((specie) => specie.name === (animal.specie));

const filterGender = (animal) => findSpecie(animal).residents
  .filter((resident) => resident.sex === (animal.gender));

function countAnimals(animal) {
  if (!animal) {
    return emptyObject();
  }
  return animal.gender
    ? filterGender(animal).length
    : findSpecie(animal).residents.length;
}

module.exports = countAnimals;
