const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const idAnimal = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const animals = data.species.find((specie) => specie.id === idAnimal).residents;
  const old = animals.sort((age1, age2) => age2.age - age1.age)[0];
  return [old.name, old.sex, old.age];
}

module.exports = getOldestFromFirstSpecies;
