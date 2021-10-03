const { species, employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const specieId = employees.find(({ id: employeeId }) => (
    employeeId === id
  )).responsibleFor[0];

  const olderSpecie = species.find(({ id: employeeId }) => (
    employeeId === specieId
  )).residents.sort(({ age: aAge }, { age: bAge }) => bAge - aAge)[0];

  return Object.values(olderSpecie);
}

module.exports = getOldestFromFirstSpecies;
