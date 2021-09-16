const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const firstKind = employees.find((employee) => employee.id === id).responsibleFor[0];
  const creaturesOfKind = species.find((kind) => kind.id === firstKind).residents;
  const oldestCreature = creaturesOfKind.sort((a, b) => b.age - a.age)[0];
  const { name, sex, age } = oldestCreature;
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
