const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const { name, sex, age } = species;

function getOldestFromFirstSpecies(employeeId) {
  const getFirstSpecie = employees
    .find((animal) => employeeId === animal.id).responsibleFor
    .filter((id) => species.find((specie) => specie.id === id).name)[0];

  const getResidentsById = species.find((specie) => specie.id === getFirstSpecie).residents;

  const getOlder = getResidentsById.sort((a, b) => b.age - a.age)[0];

  return Object.values(getOlder);
}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
