const data = require('../data/zoo_data');

const { species, employees } = data;

const findOldestResident = (animals) => ('cheguei');

function getOldestFromFirstSpecies(id) {
  const employeeById = employees.find((employee) => employee.id === id);
  const firstSpecie = employeeById.resposibleFor[0];
  const speciesGroup = species.find((animal) => animal.id === firstSpecie);
  const { residents } = speciesGroup;
  const oldestAnimal = residents.find((animal) => animal.age === findOldestResident(residents));
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
