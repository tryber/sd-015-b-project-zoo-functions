const data = require('../data/zoo_data');

const { species, employees } = data;

function findOldestResident(animals) {
  const oldest = animals.reduce((acc, cur) => {
    let older = acc;
    const { age } = cur;
    if (age > older) {
      older = age;
    }
    return older;
  }, 0);
  return oldest;
}

function getOldestFromFirstSpecies(id) {
  const employeeById = employees.find((employee) => employee.id === id);
  const firstSpecie = employeeById.responsibleFor[0];
  const speciesGroup = species.find((animal) => animal.id === firstSpecie);
  const { residents } = speciesGroup;
  const oldestAnimal = residents.find((animal) => animal.age === findOldestResident(residents));
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
