const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(empId) {
  const firstSpecieID = employees.filter(({ id }) => id === empId)[0].responsibleFor[0];
  const oldestAnimal = species.find(({ id }) => id === firstSpecieID).residents
    .sort((a, b) => b.age - a.age)[0];
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
