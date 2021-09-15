const data = require('../data/zoo_data');

const { species } = data;
const { employees } = data;

function getOldestFromFirstSpecies(employeedId) {
  const getFirstSpecie = employees.find((animal) => employeedId === animal.id).responsibleFor
    .filter((id) => species.find((specie) => specie.id === id).name)[0];
  const getResidentsById = species.find((specie) => specie.id === getFirstSpecie).residents;

  const older = getResidentsById.sort((a, b) => b.age - a.age)[0];

  return Object.values(older);
}

module.exports = getOldestFromFirstSpecies;
