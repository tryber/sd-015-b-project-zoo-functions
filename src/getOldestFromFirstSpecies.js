const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employee = employees.find((worker) => worker.id === id)
    .responsibleFor[0];
  const animal = species.find((specie) => specie.id === employee);
  const olderAnimal = animal.residents
    .sort((firstAge, seconAge) => seconAge.age - firstAge.age)
    .find((specie) => specie);

  return Object.values(olderAnimal);
}

module.exports = getOldestFromFirstSpecies;
