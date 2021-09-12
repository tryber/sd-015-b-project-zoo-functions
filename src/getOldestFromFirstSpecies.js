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

function getOldestFromFirstSpecies(id) {
  const employee = employees.find((name) => name.id === id);
  const firstSpecie = employee.responsibleFor[0];
  const groupOfSpecie = species.find((specie) => specie.id === firstSpecie);
  const { residents } = groupOfSpecie;
  const oldest = residents.find((resident) => resident.age === findOldest(residents));

  return [oldest.name, oldest.sex, oldest.age];
}

module.exports = getOldestFromFirstSpecies;
