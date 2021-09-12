const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const specieId = data.employees.find((employee) => id === employee.id).responsibleFor[0];
  const specieResidents = data.species.find(({id}) => specieId === id).residents;
  const oldest = specieResidents.reduce((acc, specie) => specie.age > acc.age ? specie : acc);
  const {name, sex, age} = oldest;
  return [name, sex, age];
}
getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');
module.exports = getOldestFromFirstSpecies;
