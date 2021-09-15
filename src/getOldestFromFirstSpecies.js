const data = require('../data/zoo_data');

const getFirstSpecie = (employeeId) =>
  data.employees.find((employee) => employee.id === employeeId)
    .responsibleFor[0];

const getSpeciesByIds = (specie) =>
  data.species.find((species) => species.id === specie);

function getOldestFromFirstSpecies(id) {
  const getEmployeeFirstSpecie = getSpeciesByIds(getFirstSpecie(id));
  const [{ name, sex, age }] = getEmployeeFirstSpecie.residents.sort(
    (a, b) => b.age - a.age,
  );
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
