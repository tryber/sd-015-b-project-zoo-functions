const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const filteredEmployee = employees.filter((employee) => employee.id === id);
  const firstSpecieAboutCare = filteredEmployee[0].responsibleFor[0];
  const filteredSpecie = species.filter((specie) => specie.id === firstSpecieAboutCare)[0];
  const oldestIndividuoAboutCare = filteredSpecie.residents.reduce((oldest, resident) =>
    ((oldest > resident.age) ? oldest : resident.age), 0);
  const infoOldestIndividuo = filteredSpecie.residents.filter((resident) =>
    resident.age === oldestIndividuoAboutCare)[0];
  return [infoOldestIndividuo.name, infoOldestIndividuo.sex, infoOldestIndividuo.age];
}

module.exports = getOldestFromFirstSpecies;
