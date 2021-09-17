const data = require('../data/zoo_data');

const { species } = data;

const { employees } = data;

function getOldestFromFirstSpecies(id) {
  const firstSpecieId = employees.find((employee) => employee.id === id).responsibleFor[0];

  const animals = species.find((specie) => specie.id === firstSpecieId).residents;

  const oldest = animals.reduce((acc, animal) => {
    if (acc.age > animal.age) return acc;
    return animal;
  });

  return [oldest.name, oldest.sex, oldest.age];
}

module.exports = getOldestFromFirstSpecies;
