const { employees, species } = require('../data/zoo_data');

function findOldest(animals) {
  const oldest = animals.reduce((accumulator, current) => {
    let older = accumulator;
    const { age } = current;

    if (age > older) {
      older = age;
    }
    return older;
  }, 0);

  return oldest;
}

function getOldestFromFirstSpecies(employeeId) {
  const firstSpecie = employees.find(({ id }) => id === employeeId).responsibleFor[0];
  const { residents } = species.find(({ id }) => id === firstSpecie);
  const { name, sex, age } = residents.find((resident) => resident.age === findOldest(residents));

  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
