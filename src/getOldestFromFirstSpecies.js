const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const person = data.employees.find((employee) => employee.id === id);
  const firstSpecie = data.species.find((specie) => specie.id === person.responsibleFor[0]);
  const checkAge = firstSpecie.residents.reduce((acumulator, sample) => ((sample.age > acumulator)
    ? sample.age : acumulator), 0);
  return Object.values(firstSpecie.residents.find((animal) => animal.age === checkAge));
}

module.exports = getOldestFromFirstSpecies;
