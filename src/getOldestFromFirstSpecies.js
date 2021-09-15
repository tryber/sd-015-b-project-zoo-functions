const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(employeesId) {
  const getFirstAnimal = employees
    .find((animal) => employeesId === animal.id).responsibleFor
    .filter((id) => species
      .find((specie) => specie.id === id).name)[0];
  const getResidentsById = species
    .find((specie) => specie.id === getFirstAnimal).residents;

  const old = getResidentsById.sort((a, b) => b.age - a.age);
  return Object.values(old[0]);
}

// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
