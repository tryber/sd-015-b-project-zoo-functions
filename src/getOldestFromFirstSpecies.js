const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employeeIdManeger = employees.find((employee) => id === employee.id).responsibleFor[0];
  const animal = species.find((specie) => specie.id === employeeIdManeger);
  const residents = animal.residents
  .sort((fistAnimal, secondAnimal) => fistAnimal.age - secondAnimal.age);
  const oldest = residents[residents.length - 1];
  return Object.values(oldest);
}

module.exports = getOldestFromFirstSpecies;
