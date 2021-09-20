const { species, employees } = require('../data/zoo_data');

const getOldestAnimal = (id) => species.find((specie) => specie.id === id).residents
  .reduce(((acc, curr) => (curr.age > acc.age ? curr : acc)));

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  return Object.values(getOldestAnimal(employees
    .find((employee) => employee.id === id).responsibleFor[0]));
}

module.exports = getOldestFromFirstSpecies;
