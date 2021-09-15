const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(employeeId) {
  // seu código aqui
  const getFirstSpecieId = employees.find(({ id }) => id === employeeId).responsibleFor[0];
  const getFirstSpecieResidents = species.find(({ id }) => id === getFirstSpecieId).residents;
  const oldestAge = getFirstSpecieResidents
    .map(({ age }) => age)
    .reduce((oldest, actual) => (oldest > actual ? oldest : actual));
  const oldestResidentObject = getFirstSpecieResidents.find(({ age }) => age === oldestAge);

  return Object.values(oldestResidentObject);
}

module.exports = getOldestFromFirstSpecies;
