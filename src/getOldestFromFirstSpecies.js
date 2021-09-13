const data = require('../data/zoo_data');

const getFirstResponsibleId = (id) =>
  data.employees.find((employee) => id === employee.id).responsibleFor[0];

const getSpecieResidents = (id) =>
  data.species.find((resident) => id === resident.id).residents;

const getOldestResident = (specieResidents) =>
  specieResidents.reduce((acc, specie) =>
    (specie.age > acc.age ? specie : acc));

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const specieId = getFirstResponsibleId(id);
  const specieResidents = getSpecieResidents(specieId);
  const oldest = getOldestResident(specieResidents);
  const { name, sex, age } = oldest;

  return [name, sex, age];
}
getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');
module.exports = getOldestFromFirstSpecies;
