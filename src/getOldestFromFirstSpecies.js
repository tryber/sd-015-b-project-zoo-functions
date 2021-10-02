const data = require('../data/zoo_data');
const { species, employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const getEmployee = employees.find((employ) => employ.id === id);
  const getSpecie = species.find((specie) => specie.id === getEmployee.responsibleFor[0]);
  const oldestSpecie = getSpecie.residents.sort((a, b) => b.age - a.age);
  return Object.values(oldestSpecie[0]);
}

module.exports = getOldestFromFirstSpecies;
