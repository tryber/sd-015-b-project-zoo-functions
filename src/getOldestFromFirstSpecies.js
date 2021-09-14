const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employee = employees.find((person) => person.id === id)
    .responsibleFor[0];
  const animal = species.find((specie) => specie.id === employee);
  const result = animal.residents
    .sort((firstAge, seconAge) => seconAge.age - firstAge.age)
    .find((specie) => specie);

  return Object.values(result);
}

module.exports = getOldestFromFirstSpecies;
