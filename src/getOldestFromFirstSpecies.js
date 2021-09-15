const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(employeeId) {
  const getFirstSpecie = employees
    .find((animal) => employeeId === animal.id).responsibleFor
    .filter((id) => species.find((specie) => specie.id === id).name)[0];

  const getResidentsById = species.find((specie) => specie.id === getFirstSpecie).residents;

  const getOlder = getResidentsById.sort((a, b) => b.age - a.age)[0];

  return Object.values(getOlder);
}

module.exports = getOldestFromFirstSpecies;
