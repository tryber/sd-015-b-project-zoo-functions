const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// busca o id do animal
function getAnimal(id) {
  return employees.find((employee) => employee.id === id)
    .responsibleFor[0];
}

// busca o animal mais velho
function getOldestResident(id) {
  return species.find((animal) => animal.id === getAnimal(id))
    .residents.sort((resident1, resident2) => resident2.age - resident1.age)[0];
}

function getOldestFromFirstSpecies(id) {
  const OldestResident = getOldestResident(id);
  return [OldestResident.name, OldestResident.sex, OldestResident.age];
}

module.exports = getOldestFromFirstSpecies;
