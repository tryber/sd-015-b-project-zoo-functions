const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const animalId = employees.find((employee) => employee.id === id).responsibleFor[0];
  const animals = species.find((specie) => specie.id === animalId).residents;
  const oldest = animals.sort((age1, age2) => age2.age - age1.age)[0];
  return [oldest.name, oldest.sex, oldest.age];
}

module.exports = getOldestFromFirstSpecies;
