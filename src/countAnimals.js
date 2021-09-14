const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function emptyObject() {
  const object = {};

  species.forEach(({ name, residents }) => {
    object[name] = residents.length;
  });
  return object;
}

const findResidents = (animal) =>
  species.find((specie) => specie.name === (animal.specie)).residents;

const filterGender = (animal) => findResidents(animal)
  .filter((resident) => resident.sex === (animal.sex));

function countAnimals(animal) {
  if (!animal) {
    return emptyObject();
  }
  return animal.gender
    ? filterGender(animal).length
    : findResidents(animal).length;
}

module.exports = countAnimals;
