const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const getEmployee = data.employees.find((employee) => id.includes(employee.id));
  const getFirstSpecie = getEmployee.responsibleFor[0];
  const getAnimal = data.species.find((animal) => animal.id === getFirstSpecie);
  const getFirstResident = getAnimal.residents.sort((obj1, obj2) => obj2.age - obj1.age)[0];
  const about = [getFirstResident.name, getFirstResident.sex, getFirstResident.age];

  return about;
}
getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');

module.exports = getOldestFromFirstSpecies;
