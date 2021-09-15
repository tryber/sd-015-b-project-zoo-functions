const { employees, species } = require('../data/zoo_data');

function findOldestAge(animals) {
  const oldest = animals.sort((a, b) => b.age - a.age);
  return oldest[0].age;
}

function getOldestFromFirstSpecies(employeeId) {
  const firstSpecie = employees.find(({ id }) => id === employeeId).responsibleFor[0];
  const { residents } = species.find(({ id }) => id === firstSpecie);
  const ageOfOldest = findOldestAge(residents);

  const { name, sex, age } = residents.find((resident) => resident.age === ageOfOldest);

  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
