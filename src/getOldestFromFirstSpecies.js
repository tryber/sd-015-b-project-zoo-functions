const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(employeeId) {
  const getFirstSpecie = employees
    .find(({ id }) => employeeId === id).responsibleFor;

  const getResidents = species
    .find(({ id }) => id === getFirstSpecie[0]).residents;

  const findOldest = getResidents
    .sort((a, b) => b.age - a.age)[0];

  return Object.values(findOldest);
}

module.exports = getOldestFromFirstSpecies;
