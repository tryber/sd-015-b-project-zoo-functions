const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const findEmployee = employees.find((employeeId) => employeeId.id === id);
  const findSpecie = species.find((specieId) => specieId.id === findEmployee.responsibleFor[0]);
  const residents = findSpecie.residents.sort((a, b) => b.age - a.age);
  const arrayResult = [residents[0].name, residents[0].sex, residents[0].age];
  return arrayResult;
}

module.exports = getOldestFromFirstSpecies;
