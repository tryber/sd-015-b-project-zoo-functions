const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(employeeId) {

  const getFirstSpecie = employees
    .find(({ id }) => employeeId === id).responsibleFor;

  const getResidents = species.find(({ id }) => id === getFirstSpecie[0]).residents;

  const findOldest = getResidents.sort((a, b) => b.age - a.age)[0];

  return Object.values(findOldest);
}

console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = getOldestFromFirstSpecies;
