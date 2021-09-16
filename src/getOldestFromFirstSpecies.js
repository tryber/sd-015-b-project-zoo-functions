const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employ = () => employees.find((employee) => employee.id === id).responsibleFor[0];
  const animal = () => species.find((specie) => specie.id === employ()).residents;
  const teste = animal().sort((a, b) => b.age - a.age)[0];
  return Object.values(teste);
}

module.exports = getOldestFromFirstSpecies;
