const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const { species, employees } = data;

  const checkedEmployee = employees.find((employee) => employee.id === id);

  const firstSpecies = species.find((oneSpecies) => oneSpecies.id
  === checkedEmployee.responsibleFor[0]);

  const oldestFromFirstSpecies = firstSpecies.residents
    .sort((animalA, animalB) => animalB.age - animalA.age)[0];

  return Object.values(oldestFromFirstSpecies);
}

module.exports = getOldestFromFirstSpecies;
