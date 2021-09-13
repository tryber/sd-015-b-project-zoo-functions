const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const specieId = data.employees.find((employee) => id === employee.id).responsibleFor[0];

  const specieResidents = data.species.find(({ actualId }) =>
    specieId === actualId).residents;

  const oldest = specieResidents.reduce((acc, specie) =>
    (specie.age > acc.age ? specie : acc));

  const {name, sex, age} = oldest;
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
