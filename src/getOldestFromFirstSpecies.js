const { species, employees } = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => Object.values(species
  .find((oneSpecies) => oneSpecies.id === employees
    .find((employee) => employee.id === id).responsibleFor[0]).residents
  .sort((animalA, animalB) => animalB.age - animalA.age)[0]);

module.exports = getOldestFromFirstSpecies;
