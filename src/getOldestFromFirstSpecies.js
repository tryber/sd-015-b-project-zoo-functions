const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employe = employees.find((element) => element.id === id);
  const specie = species.find((element) => element.id === employe.responsibleFor[0]);
  const oldestAnimals = specie.residents.sort((a, b) => b.age - a.age);
  const oldest = [];
  oldest.push(oldestAnimals[0].name);
  oldest.push(oldestAnimals[0].sex);
  oldest.push(oldestAnimals[0].age);

  return oldest;
}

module.exports = getOldestFromFirstSpecies;
