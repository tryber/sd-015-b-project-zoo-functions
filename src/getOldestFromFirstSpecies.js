const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const { responsibleFor } = employees.find((employeee) => employeee.id === id);
  const [firstOne] = responsibleFor;
  const animals = species.find((specie) => specie.id === firstOne).residents;
  const sortedAnimals = animals.sort((a, b) => b.age - a.age);
  const [firstOneSorted] = sortedAnimals;
  return [firstOneSorted.name, firstOneSorted.sex, firstOneSorted.age];
}

module.exports = getOldestFromFirstSpecies;

getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');
