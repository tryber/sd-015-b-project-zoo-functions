const data = require('../data/zoo_data');
const { species, employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const findEmployee = employees.find((employee) => employee.id === id).responsibleFor[0];
  const firstAnimal = species.find((specie) => specie.id === findEmployee).residents;
  return Object.values(firstAnimal.reduce((acc, curr) => ((acc.age > curr.age) ? acc : curr)));
}

module.exports = getOldestFromFirstSpecies;
